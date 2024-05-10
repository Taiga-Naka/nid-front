import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../enviroment/environment";

@Injectable({
  providedIn: 'root',
})
export class TokenRelatorioDespesasService {
  constructor(private http: HttpClient) { }

  validateToken(tokenId: string): Observable<boolean> {
    return this.http.get<any>(
      environment.apiUrl + 'RelatorioToken?tokenId=' + tokenId
    );
  }

  assinarRelatorio(tokenId: string, status: number): Observable<boolean> {
    return this.http.post<any>(
      environment.apiUrl + 'RelatorioToken/assinar-relatorio?tokenId=' + tokenId + '&status=' + status,
      {}
    );
  }
}
