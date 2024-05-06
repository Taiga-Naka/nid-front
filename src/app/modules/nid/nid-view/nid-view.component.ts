import { Component, OnInit } from '@angular/core';
import { RelatorioDespesa } from "../../../core/schemas/relatorio-despesa.interface";
import { ToastrService } from "ngx-toastr";
import { RelatorioDespesaService } from '../../../core/services/relatorio-despesas.service';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-nid-view',
  templateUrl: './nid-view.component.html',
  styleUrl: './nid-view.component.scss'
})
export class NidViewComponent implements OnInit {

  relatorio: any;

  constructor(
    public modalRef: BsModalRef,
  ) {
   }

  ngOnInit() {
    console.log('opa');
    console.log(this.relatorio);
    this.relatorio = this.relatorio[0];
  }

  close() {
    this.modalRef.hide();
  }
}
