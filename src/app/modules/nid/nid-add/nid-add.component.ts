import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RelatorioDespesaAddModel } from '../../../core/models/relatorio-despesa.model';
import { ToastrService } from 'ngx-toastr';
import { RelatorioDespesaService } from '../../../core/services/relatorio-despesas.service';

@Component({
  selector: 'app-nid-add',
  templateUrl: './nid-add.component.html',
  styleUrl: './nid-add.component.css'
})
export class NidAddComponent {

  addForm: FormGroup = new FormGroup({});

  constructor(
    public modalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private relatorioDespesaService: RelatorioDespesaService
  ) {
   }

  ngOnInit() {
    this.buildForm(new RelatorioDespesaAddModel());
    console.log('opa');
  }

  close() {
    this.modalRef.hide();
  }

  buildForm(add: RelatorioDespesaAddModel) {
    this.addForm = this.formBuilder.group({
      ArquivoPdf: [add.ArquivoPdf, Validators.required],
      Valor: [add.valor, Validators.required],
    });
  }

  createNid(){
    if(this.addForm.invalid){
      this.toastr.error('Preencha todos os campos', 'Erro!');
      return;
    }

    this.relatorioDespesaService.create(this.addForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.toastr.success('Nid criado com sucesso!', 'Sucesso!');
        this.modalRef.hide();
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Erro ao criar Nid', 'Erro!');
      }
    });
  }

}
