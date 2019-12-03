import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      new MenuItem("Movie", "/movie/list", "Movies List"),
      new MenuItem("Actor", "/actor/list", "Actors List"),
      new MenuItem("Cast", "/cast/list", "Casts List")
    ];
  }

}
