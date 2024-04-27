import { NgModule } from "@angular/core";
import { LoginComponent } from "./component/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import {LoginRountingModule} from "./login.routing.module";
import {NgIf} from "@angular/common";
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRountingModule,
    ReactiveFormsModule,
    NgIf,
    NgxSpinnerModule
  ]
})
export class LoginModule {}
