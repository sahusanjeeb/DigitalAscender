import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CookieService } from './cookie.service';

@Injectable({
	providedIn: 'root'
})
export class PageActionService {
    pageActions: any;
	constructor(private http: HttpClient, @Inject('config') private config:any,
        private cookieService: CookieService) {
    }

    public getPageActions(): any {
        const token = this.cookieService.getCookie('X-Ava-Access-Token');
        if (token) {
            const tokenDetails = JSON.parse(atob(token.split(".")[1]));
        
            const rolesRequest = {
              tenant: "AVA_IAM_Default",
              email: tokenDetails["email"],
              firstName: tokenDetails["firstName"],
              lastName: tokenDetails["lastName"],
              userName: tokenDetails["sub"],
              roles: tokenDetails["roles"],
            };
            
            return this.http.post( this.config.configuration.env.apiUrl + '/user/roles/pageaction/v1', rolesRequest);
        }
    }

    public hasAction( page:string, role:string) {
        if (this.pageActions && !!this.pageActions[page]) {
            return this.pageActions[page].includes(role);
        }

        return false;
    }
}