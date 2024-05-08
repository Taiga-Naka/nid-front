import {Component} from '@angular/core';
import {RelatorioDespesa} from '../../../core/schemas/relatorio-despesa.interface';
import {RelatorioDespesaService} from '../../../core/services/relatorio-despesas.service';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {NidViewComponent} from '../nid-view/nid-view.component';
import {NidAddComponent} from '../nid-add/nid-add.component';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { FuncinarioService } from '../../../core/services/funcionario.service';
import { RelatorioDespesaAddModel } from '../../../core/models/relatorio-despesa.model';

@Component({
  selector: 'app-nid-grid',
  templateUrl: './nid-grid.component.html',
  styleUrl: './nid-grid.component.css'
})
export class NidGridComponent {
  relatorioDespesas: RelatorioDespesa[] = [];
  modalRef?: BsModalRef;
  formGroupFiltragem: FormGroup = new FormGroup({});

  funcionarios: any[] = [];

  filterForm: FormGroup = new FormGroup({});

  constructor(
    private relatorioDespesaService: RelatorioDespesaService,
    private funcinarioService: FuncinarioService,
    private toastr: ToastrService,
    private router: Router,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.buildForm(new RelatorioDespesaAddModel());
    this.getAllFuncionarios();
    this.getAllData();
  }

  buildForm(add: RelatorioDespesaAddModel) {
    this.filterForm = this.formBuilder.group({
      idFuncionario: [add.FuncionarioId],
      ArquivoPdf: [add.ArquivoPdf, Validators.required],
      Valor: [add.valor, Validators.required],
    });
  }


  getAllFuncionarios() {
    this.funcinarioService.find().subscribe({
      next: data => {
        this.funcionarios = data;
        console.log(data);
      },
      error: err => {
        console.log(err);
        this.toastr.error('Erro!!')
      }
    })
  }

  getAllData(){
    // if(this.formGroupFiltragem.value.idFuncionario != null) {
    //   this.relatorioDespesaService.find(this.formGroupFiltragem.value.idFuncionario)
    // } else {
    //   console.log('TA NULO SA PORRA')
    //   this.limparFiltro()
    // }


    var id = this.filterForm.value.id;
    var funcionarioId = this.filterForm.value.idFuncionario;

    this.relatorioDespesaService.find(id, funcionarioId).subscribe({
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
    this.getAllData();
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

    this.modalRef.onHide?.subscribe(() => {
      this.getAllData();
    })
  }
}
