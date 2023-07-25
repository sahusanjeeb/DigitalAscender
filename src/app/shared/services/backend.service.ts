import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class BackendService {
    private apiServiceUrl = environment.apiUrl;

    constructor(private http: HttpClient) {
    }


      /**
     *
     * this is a genermethod will make a post call to
     * @param {endPoint} string
     * @param {request} any
     * @return {*}  {Observable<SingleURL>}
     * @memberof AccessibilityScanService
     */
    public post(endPoint: string, request: any): any {
        const url = `${this.apiServiceUrl}${endPoint}`;

        // loading spinner logic goes here
        return this.http.post(url, request);
    }

    /**
     *
     * this method is exclusively used to get the SVG from backend service
     * @param {string} url
     * @return {*}  {Observable<string>}
     * @memberof BackendService
     */
    public getSvg(url: string): Observable<string> {
        return this.http.get(url, {responseType: 'text'});
    }

// /**
    //  *
    //  * this method is exclusively used to get the SVG from backend service
    //  * @param {string} url
    //  * @return {*}  {Observable<string>}
    //  * @memberof BackendService
    //  */
    // public get(url: string): Observable<any> {
    //     return this.http.get(url);
    // }

    /**
     * This is common method for doing a GET call.
     *
     * @param {string} endPoint
     * @returns {Observable<any>}
     */
    public get(endPoint: string): Observable<any> {
        const url = `${this.apiServiceUrl}${endPoint}`;

        return this.http.get(url).pipe(
            map((response: any) => {
                return response;
            })
        );
    }

    /**
     * This is common method to get stub data from local json file.
     *
     * @param {string} url
     * @param {string} params
     * @returns {Observable<any>}
     */
    public getData(url: string, params: string): Observable<any> {
        return this.http.get(url + params).pipe(
            map((response: any) => {
                return response;
            })
        );
    }

    public postFormData(endPoint: any, requestObj: any) {
        const url = `${this.apiServiceUrl}${endPoint}`;

        return this.http.post <FormData> (url, requestObj);
    }

}
