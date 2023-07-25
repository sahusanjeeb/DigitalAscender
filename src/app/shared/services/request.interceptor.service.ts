import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from './cookie.service';
import {ACCESS_TOKEN_KEY} from '../constants';
import { SessionStorageService } from './session-storage.service';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

	constructor(private cookieService: CookieService, private sessionStorage: SessionStorageService) { }

	public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.sessionStorage.getStorage('userId') && request.method === 'POST') {
            request.body['userId'] = this.sessionStorage.getStorage('userId');
        }

		if ((request.url.includes('/trial/status')|| (request.url.includes('ita/requestHistory')) || request.url.includes('signout')) && request.body['userId']) {
			delete request.body['userId'];
		}

		if (this.cookieService.getCookie(ACCESS_TOKEN_KEY)) {
			request = request.clone({
				setHeaders: {
					[ACCESS_TOKEN_KEY]: this.cookieService.getCookie(ACCESS_TOKEN_KEY) ? this.cookieService.getCookie(ACCESS_TOKEN_KEY) : ''
				}
			});
		}

		return next.handle(request);
	}
}
