import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RelatorioDespesaService } from '../../../core/services/relatorio-despesas.service';
import { TokenRelatorioDespesasService } from '../../../core/services/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nid-assign',
  templateUrl: './nid-assign.component.html',
  styleUrl: './nid-assign.component.css'
})
export class NidAssignComponent {

  relatorioToken: string = '';

  isValidToken: any;

  relatorioStatus = [
    // {id: 1, name: 'Pendente'},
    {id: 2, name: 'Aprovar'},
    {id: 3, name: 'Recusar'}
  ];

  selectedStatus: number = 0;

  constructor(
    private route: Router,
    private relatorioDespesaService: RelatorioDespesaService,
    private tokenService: TokenRelatorioDespesasService,
    private toaster: ToastrService
  ) {
    var token = this.route.url.split('/')[2];

    this.relatorioToken = token;

    if(token != null && token != '') {
      this.tokenService.validateToken(token).subscribe({
        next: data => {
          this.isValidToken = data;
          console.log(data);
          if(!this.isValidToken) {
            this.toaster.error('Token inválido');
            this.route.navigate(['/']);
          }
        },
        error: err => {
          this.route.navigate(['/']);
        }
      });
    } else {
      this.route.navigate(['/']);
    }
   }

  ngOnInit(): void {
  }

  assingRelatorio(){
    if(this.selectedStatus == 0) {
      this.toaster.error('Selecione um status');
      return;
    }

    this.tokenService.assinarRelatorio(this.relatorioToken, this.selectedStatus).subscribe({
      next: data => {
        this.toaster.success('Relatório assinado com sucesso');
        this.route.navigate(['/']);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
