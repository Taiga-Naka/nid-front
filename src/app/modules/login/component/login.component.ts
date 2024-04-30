import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticatorServices } from "../../../core/services/auth.service";
import { User } from "../../../core/models/user.model";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

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
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.buildForm(new User());
  }

  buildForm(user: User) {
    this.loginForm = this.formBuilder.group({
      Email: new FormControl(user.email, [Validators.required, Validators.email]),
      Password: new FormControl(user.password, [Validators.required]),
    });
  }

  onSend(): void {
    if (!this.loginForm.valid) {
      console.error('Obrigatorio preencher campo!!');
      this.isSubmitAlert = true;

      if (this.isSubmitAlert) {
        console.log('"Aparendo uma letra vermelha de Warning"');
      }
      return;
    }

    this.isSubmit = true;
    this.isSubmitAlert = false;
    console.log('Enviando seguintes dados');
    console.log(this.loginForm.value);

    //this.spinner.show();
    this.loginService.login(this.loginForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.toastr.success('Usuário Logado!', 'Sucesso!');
        this.router.navigate(['/nid']);
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Senha ou e-mail invalidos', 'Erro!');
      }
    }).add(() => {
      this.isSubmit = false;
      this.spinner.hide();
    });
  }
}
