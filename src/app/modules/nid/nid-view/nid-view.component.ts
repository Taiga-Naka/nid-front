import {Component, OnInit} from '@angular/core';
import {RelatorioDespesa} from "../../../core/schemas/relatorio-despesa.interface";
import {RelatorioDespesaService} from "../services/relatorio-despesas.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-nid-view',
  templateUrl: './nid-view.component.html',
  styleUrl: './nid-view.component.scss'
})
export class NidViewComponent implements OnInit {
  relatorioDespesas: RelatorioDespesa[] = [];

  constructor(
    private relatorioDespesaService: RelatorioDespesaService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.relatorioDespesaService.find().subscribe({
      next: data => {
        this.relatorioDespesas = data;
      },
      error: err => {
        console.log(err);
        this.toastr.error('Erro!!')
      }
    })
  }
}
