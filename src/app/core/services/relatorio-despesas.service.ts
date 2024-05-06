import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { RelatorioDespesa } from "../schemas/relatorio-despesa.interface";
import { environment } from "../../enviroment/environment";

@Injectable({
  providedIn: 'root',
})
export class RelatorioDespesaService {
  constructor(private http: HttpClient) {}

  find(id?: string): Observable<RelatorioDespesa[]> {
    return this.http.get<RelatorioDespesa[]>(
      environment.apiUrl + 'RelatorioDespesas?' +
      (id != null ? "id=" + id : "")
    );
  }

  create(body: RelatorioDespesa): Observable<RelatorioDespesa> {
    return this.http.post<RelatorioDespesa>(`${environment.apiUrl}RelatorioDespesas`, body);
  }

  update(body: RelatorioDespesa): Observable<RelatorioDespesa> {
    return this.http.put<RelatorioDespesa>(environment.apiUrl + 'RelatorioDespesas', body);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(environment.apiUrl + `RelatorioDespesas/${id}`);
  }
}
