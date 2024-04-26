import { Component } from '@angular/core';
import {LoginComponent} from "./modules/login/component/login.component";

@Component({
  // imports: [LoginComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'manseira-nid';
}
