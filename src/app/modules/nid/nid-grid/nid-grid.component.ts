import { Component } from '@angular/core';
import { RelatorioDespesa } from '../../../core/schemas/relatorio-despesa.interface';
import { RelatorioDespesaService } from '../../../core/services/relatorio-despesas.service';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NidViewComponent } from '../nid-view/nid-view.component';
import { NidAddComponent } from '../nid-add/nid-add.component';

@Component({
  selector: 'app-nid-grid',
  templateUrl: './nid-grid.component.html',
  styleUrl: './nid-grid.component.css'
})
export class NidGridComponent {
  relatorioDespesas: RelatorioDespesa[] = [];
  modalRef?: BsModalRef;


  constructor(
    private relatorioDespesaService: RelatorioDespesaService,
    private toastr: ToastrService,
    private router: Router,
    private modalService: BsModalService,
  ) {}

  ngOnInit() {
    this.getAllData();
  }

  getAllData(){
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
