import { Component } from '@angular/core';
import { RelatorioDespesa } from '../../../core/schemas/relatorio-despesa.interface';
import { RelatorioDespesaService } from '../../../core/services/relatorio-despesas.service';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NidViewComponent } from '../nid-view/nid-view.component';
import { NidAddComponent } from '../nid-add/nid-add.component';
import {FormBuilder, FormGroup} from "@angular/forms";
import {getDate} from "ngx-bootstrap/chronos/utils/date-getters";

@Component({
  selector: 'app-nid-grid',
  templateUrl: './nid-grid.component.html',
  styleUrl: './nid-grid.component.css'
})
export class NidGridComponent {
  relatorioDespesas: RelatorioDespesa[] = [];
  modalRef?: BsModalRef;
  formGroupFiltragem: FormGroup = new FormGroup({});


  constructor(
    private relatorioDespesaService: RelatorioDespesaService,
    private toastr: ToastrService,
    private router: Router,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.formGroupFiltragem = this.formBuilder.group({
      idFuncionario: [null],
      // data: ,
      // telefone: [null],
    });
    this.getAllData();
  }

  getAllData(){
    if(this.formGroupFiltragem.value.idFuncionario != null) {
      this.relatorioDespesaService.find(this.formGroupFiltragem.value.idFuncionario)
    } else {
      console.log('TA NULO SA PORRA')
      this.limparFiltro()
    }
    this.relatorioDespesaService.find().subscribe({
      next: data => {
        this.relatorioDespesas = data;
        console.log(data);
      },
      error: err => {
        console.log(err);
        this.toastr.error('Erro!!')
      }
    })
  }

  limparFiltro() {
    this.formGroupFiltragem.reset();
  }

  redirectTo(data: any) {
    this.modalRef = this.modalService.show(NidViewComponent, {
      initialState: {
        relatorio: [data],
      },
      class:
        "modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md",
      ignoreBackdropClick: true,
    });
  }

  openAddModal() {
    this.modalRef = this.modalService.show(NidAddComponent, {
      class:
        "modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md",
      ignoreBackdropClick: true,
    });

    this.modalRef.onHide?.subscribe((e) =>{
      this.getAllData();
    })
  }
}
