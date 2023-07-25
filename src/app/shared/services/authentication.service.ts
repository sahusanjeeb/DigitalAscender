
import { Injectable } from '@angular/core';
import { User, UserI } from '../models/user';
import { ROUTE_USER_LOGIN } from '../constants/route-paths';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../constants';
import { CookieService } from './cookie.service';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public currentUser!: Observable<User>;
    public userDetails!: UserI;
    public accessToken: any;
    // private apiServiceUrl = environment.apiUrl;

    private tokensSubject$ = new BehaviorSubject<any>(null);
    public tokens$ = this.tokensSubject$.asObservable();

    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    /**
     *
     * this method will get the current user value
     * @readonly
     * @param {userName} string
     * @param {password} string
     * @type {User}
     * @memberof AuthenticationService
     */
    public logIn(userName: string, password: string, environment: any): Observable<any> {
        const options = {
            'userName': encodeURI(userName),
            'password': encodeURI(password)
        };

        const headers = { headers: new HttpHeaders().set('Content-Type', 'application/json'), observe: 'response' as 'body' };
        const url = environment.apiUrl + ROUTE_USER_LOGIN;

        return this.http.post(url, options, headers);
    }

    /**
     * this method will save the user details from the login authentication.
     * @param {userDetails}
     * @memberof AuthenticationService
     */
    public setUserDetails(userDetails: UserI): void {
        this.userDetails = userDetails;
    }

    /**
     * this method will return the saved userdetails
     *
     * @return {*}  {UserI}
     * @memberof AuthenticationService
     */
    public getUserDetails(): UserI {
        return this.userDetails;
    }

    /**
     * this methid will logOut the user from the application
     *
     * @memberof AuthenticationService
     */
    public logOut(environment: any) {
        const headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
        const url = environment.apiUrl + '/user/signout';

        return this.http.post(url, headers).subscribe(_res => {
            this.cookieService.getCookie(ACCESS_TOKEN_KEY) ? this.cookieService.setCookie(ACCESS_TOKEN_KEY, '', 0) : null;
            this.cookieService.getCookie(REFRESH_TOKEN_KEY) ? this.cookieService.setCookie(REFRESH_TOKEN_KEY, '', 0) : null;
            window.location.href = environment.uiUrl + '/#/login';
        });
    }
}
