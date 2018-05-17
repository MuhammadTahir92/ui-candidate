import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
  moduleId:module.id
})
export class LoginComponent implements OnInit {

  constructor(private _page: Page) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }
  
  



}
