import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgOnChangesFeature } from '@angular/core/src/render3';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'My CO2 Footprint',  icon: 'pe-7s-graph', class: 'list-item' },
    { path: '/trends', title: 'Global Trends',  icon:'pe-7s-bell', class: 'list-item' },
    { path: '/expenses', title: 'Log Expenses',  icon:'pe-7s-bell', class: 'list-item' },
    { path: '/accountstmt', title: 'Account Statement',  icon:'pe-7s-note2', class: 'list-item' },
    { path: '/user', title: 'My Profile',  icon:'pe-7s-user', class: 'list-item' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  isClosed: boolean = false;
  
  @Output() sidebarClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() width: string;
  

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  onSidebarClick() {
    this.isClosed = !this.isClosed;
    this.sidebarClosed.emit(this.isClosed);
  }

  getWidth() {
    // var width = this.isClosed ? '60px' : '260px';
    return {'width': this.width};
}

getPadding() {
  return {'padding-left': this.isClosed ? '0px' : '15px'};
}

}
