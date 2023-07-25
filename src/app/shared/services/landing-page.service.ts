import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  public storyMode:any;
  public askAVA: any; 
  // public askRequirement: any;
  // public askDomain: any;
  // public askApplication: any;
  public testCaseData: any;
  

  constructor( private http: HttpClient ) { }

  public getGptData( data: any): Observable<any> {
    const payload = {
      userSignature : "AVA-GPT-WebApp",
      prompt: data,
      // mode : "STORY_OR_EPIC"
      mode: this.storyMode
    }

    const headers = { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'access-key': 'eyJraWQiOiIzNGJkMzRjZi05OTlkLTQ0MTgtOWNlZS01YTBlYjg3ZmVmZjgiLCJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FzY2VuZGlvbi5jb20iLCJpZGVudGlmaWVyIjoiYXZhIy0qZ3B0IiwiaWF0IjoxNjgyMzk0MjE3LCJleHAiOjE2OTc5NDYyMTd9.7Fkj49qaAyB18M3FJLMFzaXJiGZeW9rV8dqFUBif3OLupNiJ6pj_iCDxUkJSmyNBywRVIXTqZegbuIdmE2HheA'
    })};

    const url = 'https://ava-force-gpt-api-v2.azurewebsites.net/ava/force/gpt/model';
  
    return this.http.post( url, payload, headers );
  }


  public getTestCaseData( data: any ): Observable<any> {
    const payload = {
      userSignature : "test@ascendion.com",
      prompt : data.searchRequirement,
      mode : "GENERATE_TEST_CASES",
      templatePosition : 3,
      additionalPromptInfo : {
        domain : data.selectDomain,
        appType : data.selectApplication
      }
    }
    const headers = { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'access-key' : 'eyJraWQiOiJhZmRiNDNmOC1kNmJmLTQyOGUtODNjZC0xOGY5YzMwZTI4N2QiLCJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FzY2VuZGlvbi5jb20iLCJpZGVudGlmaWVyIjoiYXZhIy0qZ3B0IiwiaWF0IjoxNjg0NDA5MzAwLCJleHAiOjE2OTk5NjEzMDB9.QePdwdG8RzkifB4dYcaIrt0znTlnRSAhgXaaecnTMNYSEQmCV1ICWj37rkkr_pu4FeIR8Kz7uyabaNHhy-LmhQ'
    })};

    const url = 'https://ava-force-gpt-api-v2.azurewebsites.net/ava/force/gpt/model';

    return this.http.post( url, payload, headers );
  }

  public getTestCaseGeneration() {

    const headers = { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'access-key' : 'eyJraWQiOiJhZmRiNDNmOC1kNmJmLTQyOGUtODNjZC0xOGY5YzMwZTI4N2QiLCJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FzY2VuZGlvbi5jb20iLCJpZGVudGlmaWVyIjoiYXZhIy0qZ3B0IiwiaWF0IjoxNjg0NDA5MzAwLCJleHAiOjE2OTk5NjEzMDB9.QePdwdG8RzkifB4dYcaIrt0znTlnRSAhgXaaecnTMNYSEQmCV1ICWj37rkkr_pu4FeIR8Kz7uyabaNHhy-LmhQ'
    })};
    const url = 'https://ava-force-gpt-api-v2.azurewebsites.net/ava/force/gpt/lovs?mode=GENERATE_TEST_CASES';

    return this.http.get(url, headers).pipe(
      map((response: any) => {
          return response;
      })
    );
  }

}
