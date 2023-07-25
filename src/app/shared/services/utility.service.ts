import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UtilityService {
    private userProfileDetailsSubject = new Subject();
    userProfileDetails$ = this.userProfileDetailsSubject.asObservable();
    public environmentVarible!: string;

    constructor() {}

    /**
     * this method will broadcast user profile details.
     * @param {userProfile}
     * @memberof UtilityService
     */
     public broadcastUserProfile(userProfile: any): void {
        this.userProfileDetailsSubject.next(userProfile);
    }

    public setEnvironmentVariable(environmentVarible: string) {
        this.environmentVarible = environmentVarible;
    }

    public getEnvironmentVariable() {
        return this.environmentVarible;
    }
}
