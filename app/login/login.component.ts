import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { AndroidData, ShapeEnum } from 'nativescript-ng-shadow';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
  moduleId: module.id
})
export class LoginComponent implements OnInit {

  constructor(private _page: Page) { }
  ngOnInit() {
    this._page.actionBarHidden = true;
  }

  fabShadow: AndroidData = {
    elevation: 2,
    bgcolor: '#ff1744',
    shape: ShapeEnum.OVAL,
  };
}
