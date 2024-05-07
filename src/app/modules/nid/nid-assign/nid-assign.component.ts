import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RelatorioDespesaService } from '../../../core/services/relatorio-despesas.service';

@Component({
  selector: 'app-nid-assign',
  templateUrl: './nid-assign.component.html',
  styleUrl: './nid-assign.component.css'
})
export class NidAssignComponent {

  isValidToken = false;

  constructor(
    private route: Router,
    private relatorioDespesaService: RelatorioDespesaService,
  ) {
    var id = this.route.url.split('/')[2];
   }

  ngOnInit(): void {
  }

  getNidById(id: string) {
    this.relatorioDespesaService.find(id).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
