import {
    Injectable
} from '@angular/core';
import {
    Subject
} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private breadCrumbsSubject = new Subject();
    breadCrumbs$ = this.breadCrumbsSubject.asObservable();

    public isLoading = new Subject < boolean > ();
    public show() {
        this.isLoading.next(true);
    }
    public hide() {
        this.isLoading.next(false);
    }

    public broadcastBreadCrumbs(breadCrumbs: any) {
        this.breadCrumbsSubject.next(breadCrumbs);
    }
}
