import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
  moduleId: module.id
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions, private _page: Page) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

  public gobackTologin() {
    console.log("working in goback function");
    this.routerExtensions.back();
  }


}
