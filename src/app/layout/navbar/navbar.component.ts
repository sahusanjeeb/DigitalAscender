import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from './model/navbar.model';
import { LinkConfig } from '@collab/comp-library';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() public items!: string[];
  @Output() public toggleNav: EventEmitter<boolean> = new EventEmitter<boolean>();

  public MenuItems: Array < MenuItem > = [];

  public icons = { menu: 'menu' };
  public iconClassName: 'icon-Sidebar-Collapse' | 'icon-Sidebar-Expand' = 'icon-Sidebar-Collapse'

  constructor(private router: Router, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    console.log(this.items)
    for (let i = 0; i < this.router.config.length; i++) {
      const menuItemObj = new MenuItem();
      menuItemObj.path = this.router.config[i].path!;
      menuItemObj.title = this.router.config[i].data ?.['title'];
      menuItemObj.label = this.router.config[i].data ?.['navLabel'];
      menuItemObj.icon = this.router.config[i].data ?.['navIcon'];
      menuItemObj.newIconName = this.router.config[i].data ?.['newIconName'];
      menuItemObj.isActive = this.router.config[i].data ?.['isActive'];

      if (this.items.indexOf(menuItemObj.label) !== -1) {
        this.MenuItems.push(menuItemObj);
      }
    }
  }

  /**
   * for sidebar collapse and expand navbar
   * @return {*}  {boolean}
   * @memberof NavbarComponent
   */
  public toggleSideNav(): void {
    this.iconClassName  = this.iconClassName === 'icon-Sidebar-Collapse' ? 'icon-Sidebar-Expand' : 'icon-Sidebar-Collapse';
    this.toggleNav.emit();
  }

  /**
   *
   * this methos will return the url for icons
   * @param {string} icon
   * @return {*}  {string}
   * @memberof NavbarComponent
   */
  public getUrl(icon = ''): string {
    let url = '';
    if (icon) {
      url = 'assets/' + icon;
      if (!icon.includes('.')) {
        url += '.svg';
      }
    }
    return url;
  }

  public routeLinkConfig(label: string): LinkConfig {
    return {
      hrefVal: '',
      linkText: label
    };
  }

  public routeToPath(path: string): void {
    const routed = this.router.navigateByUrl(path);
  }
}
