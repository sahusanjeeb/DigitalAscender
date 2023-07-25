import {Injectable} from '@angular/core';

@Injectable()
export class SessionStorageService {
    setStorage(key: string, value: any){
        sessionStorage.setItem(key, value);
    }
    getStorage(key: string){
        return sessionStorage.getItem(key);
    }
    deleteStorage(key: string) {
        sessionStorage.removeItem(key);
    }
    setLocalStorage(key: string, value: any){
        localStorage.setItem(key, value);
    }
    getLocalStorage(key: string) {
        return localStorage.getItem(key);
    }
    deleteLocalStorage(key: string) {
        localStorage.removeItem(key);
    }
}
