import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { LoaderService } from './shared/services/loader.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public showExpandedNav!: boolean;
  public navbarItems = ['Prompt Management','Content Moderation', 'Security', 'Configuration','Analytics'];
  // public breadcrumbs: any = null;

  constructor(public router: Router, private cdr: ChangeDetectorRef, public loaderService: LoaderService ) {}

  public ngOnInit(): void {
    this.showExpandedNav = true;
  }

  // public ngAfterViewInit() {
  //   this.loaderService.breadCrumbs$.subscribe(res => {
  //       this.breadcrumbs = res;
  //   });
  //   this.cdr.detectChanges();
  // }

}
