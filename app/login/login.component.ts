import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
  moduleId: module.id
})
export class LoginComponent implements OnInit {

  constructor(private _page: Page) { }

  // textFieldOne: boolean = true;
  // textFieldTwo: boolean = true;
  // firstTx: string ;
  ngOnInit() {
    this._page.actionBarHidden = true;
  }

  // onReturnPress(args) {
  //   let textField = <TextField>args.object;
  //   this.firstTx = textField.text;


  // }

  // onFocusTextone(args) {
  //   this.textFieldOne = false;
  // }

  // onblurTextone(args) {
  //   let textField = <TextField>args.object;
  //   this.firstTx = textField.text;
  //   this.firstTx.length >=1 ? this.textFieldOne = false : this.textFieldOne = true;
  // }
  
  // onFocusTexttwo(args) {
  //   this.textFieldTwo = false;
  // }
  
  // onblurTexttwo(args) {
  //   let textField = <TextField>args.object;
  //   this.firstTx = textField.text;
  //   this.firstTx.length >=1 ? this.textFieldTwo = false : this.textFieldTwo = true;
  // }
  
  
  // public onTextChangeOne(args) {
  //   let textField = <TextField>args.object;
  //   this.firstTx = textField.text;
  //   this.firstTx.length >=1 ? this.textFieldOne = false : this.textFieldOne = true;
  // }

  // public onTextChangeTwo(args) {
  //   let textField = <TextField>args.object;
  //   this.firstTx = textField.text;
  //   this.firstTx.length >=1 ? this.textFieldTwo = false : this.textFieldTwo = true;
  // }

}
