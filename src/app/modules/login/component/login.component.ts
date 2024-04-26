import {Component, OnInit} from '@angular/core';
import {EmailValidator, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  isSubmit = false;
  isSubmitAlert = false;

  // submitValidation(): void {
  //   if(!Email) {
  //     console.log("Email não autorizado seu fdp!!");
  //   } else {
  //     console.log("Email enviado com Sucesso porra!!");
  //     this.isSubmit = true
  //   }
  // }

  ngOnInit(): void {

  }

  // private authenticatorServices: AuthenticatorServices
  constructor() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  getData(): void {

  }

  onSend(): void {
    if (!this.formGroup.valid)
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
    console.log(`Email: ${this.formGroup.get('email')?.value}`);
    console.log(`Senha: ${this.formGroup.get('password')?.value}`);
  }
}
