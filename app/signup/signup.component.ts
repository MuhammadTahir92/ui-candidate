import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  moduleId : module.id
})
export class SignupComponent implements OnInit {
  constructor(private _page: Page) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }
}
