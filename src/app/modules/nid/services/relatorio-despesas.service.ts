import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RelatorioDespesa} from "../../../core/schemas/relatorio-despesa.interface";

@Injectable({
  providedIn: 'root',
})
export class RelatorioDespesaService {
  constructor(private http: HttpClient) {}

  find(): Observable<RelatorioDespesa[]> {
    return this.http.get<RelatorioDespesa[]>('/RelatorioDespesa');
  }

  create(body: RelatorioDespesa): Observable<RelatorioDespesa> {
    return this.http.post<RelatorioDespesa>('/RelatorioDespesa', body);
  }

  update(body: RelatorioDespesa): Observable<RelatorioDespesa> {
    return this.http.put<RelatorioDespesa>('/RelatorioDespesa', body);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`/RelatorioDespesa/${id}`);
  }
}
