import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'codingTest';
  items: { label: string, routerLink: string }[];

  ngOnInit() {
    this.items = [
      { label: 'Search', routerLink: '/' },
      { label: 'Favorite', routerLink: 'favorite' }
    ];

  }
}
