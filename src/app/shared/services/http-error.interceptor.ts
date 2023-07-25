import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, finalize, tap } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';
import { environment } from '../../../environments/environment';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, SessionStorageService, CookieService } from '@collab/comp-library';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(public loaderService: LoaderService, private cookieService: CookieService, private sessionStorage: SessionStorageService) {
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        return next.handle(request)
            .pipe(
                retry(1),
                finalize(() => this.loaderService.hide()),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.status === 401) {
                        this.clearCahceAndRedirect();
                    } else if (error.status === 400) {
                      return throwError(error);
                    } else if (error.error instanceof ErrorEvent) {
                        errorMessage = `Error: ${error.error.message}`;
                        return throwError(errorMessage);
                    }
                  return throwError(error);
                })
            );
    }

    private clearCahceAndRedirect() {
        this.cookieService.setCookie(ACCESS_TOKEN_KEY, '', 0);
        this.cookieService.setCookie(REFRESH_TOKEN_KEY, '', 0);
        this.sessionStorage.setStorage('userId', '');
        window.location.href = environment.uiUrl + '/#/login?error=invalid_token';
    }
}
