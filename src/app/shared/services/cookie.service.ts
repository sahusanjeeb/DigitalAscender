import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CookieService {

	showCookiePolicy = true;
	constructor() { }

	public setCookie(cname: string, cvalue: string, exdays: number) { // this method can be used for setting/deleting the cookie
		const d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		let expires = "expires=" + d.toUTCString();

		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;Secure;";
	}

	public getCookie(cname: string) {
		let name = cname + "=";
		let ca = document.cookie.split(';');

		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
}
