import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "~/login/login.component";
import { SignupComponent } from "~/signup/signup.component";
import { ForgetPasswordComponent } from "~/forget-password/forget-password.component";


const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "forget", component: ForgetPasswordComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }