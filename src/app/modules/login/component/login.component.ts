import {Component, OnInit} from '@angular/core';
import {EmailValidator, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {AuthenticatorServices} from "../../../core/services/auth.service";
import {User} from "../../../core/models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  isSubmit = false;
  isSubmitAlert = false;

  newUser: User = new User();

  // private authenticatorServices: AuthenticatorServices
  constructor(
    private loginService: AuthenticatorServices,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.buildForm(new User());
  }

  buildForm(user: User) {
    this.loginForm = this.formBuilder.group({
      Email: new FormControl(user.Email, [Validators.required, Validators.email]),
      Senha: new FormControl(user.Senha, [Validators.required]),
    });
  }

  onSend(): void {
    if (!this.loginForm.valid)
    {
      console.error('Obrigatorio preencher campo!!');
      this.isSubmitAlert = true;

      if(this.isSubmitAlert === true)
      {
        console.log('"Aparendo uma letra vermelha de Warning"');
      }
      return;
    }

    this.isSubmit = true;
    this.isSubmitAlert = false;
    console.log('Enviando seguintes dados');
    console.log(`Email: ${this.loginForm.get('email')?.value}`);
    console.log(`Senha: ${this.loginForm.get('password')?.value}`);

    try {
      this.loginService.login(this.loginForm.value).subscribe(
        (data) =>{
          console.log(data);
        }
      )
    } catch(err) {
      console.log(err);
    }
  }
}
