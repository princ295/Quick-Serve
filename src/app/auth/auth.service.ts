import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }

  readonly root_api: string ="http://127.0.0.1:8000/";
  
  private setSession(authResult) {
    console.log('api call have done')
    const token = authResult.token;
    localStorage.setItem('token', authResult.token);
  }

  register(obj: any){
    return this.http.post(this.root_api+'api/register/',obj).pipe(tap(
      response => {
        console.log(response)
        this.setSession(response)}),
    shareReplay(),)
  }

  login(obj: any) {
    console.log(obj)
    console.log(`${this.root_api}`)
    return this.http.post(`${this.root_api}api/login/`,obj).pipe(
      tap((response: any) => {
        console.log(response)
        let info: any = response as any
        info.token = `xyz@${response[0].fname}pqwxy&${response[0].lname}`
        
        console.log(response)
        const enc = btoa(escape(JSON.stringify(response)));
        this.setSession(response)
        // encryption
        localStorage.setItem('Encrytion_Token', enc)
      }),
      shareReplay(),
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    this.route.navigate(['/A/login'])
  }
}
