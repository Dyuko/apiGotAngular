import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed  = false;
  constructor() { }

  ngOnInit(): void {
    console.log('Init NavbarComponent');
  }

}
