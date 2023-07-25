import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {
  public baseURL = 'http://localhost:8082';

  constructor(private http: HttpClient) {}

  /**
   *
   * this methid will make an API Call to generate Test Data
   * @param {params} params
   * @return {*}  {Observable <any>}
   * @memberof FileDownloadService
   */
  public downloadFile(params: any): void {
    let queryString = params;

    const url = `${this.baseURL}`;

    this.http.get(url + queryString, { observe: 'response', responseType: 'blob' as 'json' } ).subscribe(
      (res: any) => {
        const urlString = window.URL.createObjectURL(res.body);
        const anchor = document.createElement('a');
          
        if (!!res.headers.get('content-disposition') && !!res.headers.get('content-disposition').split('fileName=')[1]) {
          anchor.download = res.headers.get('content-disposition').split('fileName=')[1].trim();
        } else if (!!res.headers.get('content-disposition') && !!res.headers.get('content-disposition').split('fileName=')[0]) {
          anchor.download = res.headers.get('content-disposition').split('fileName=')[0].trim()
        } else {
          anchor.download = 'file.zip'
        }

        anchor.href = urlString;
        anchor.click();
      }
    );
  }

}
