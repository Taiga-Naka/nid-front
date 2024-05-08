import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../enviroment/environment";

@Injectable({
  providedIn: 'root',
})
export class FuncinarioService {
  constructor(private http: HttpClient) {}

  find(): Observable<any[]> {
    return this.http.get<any[]>(
      environment.apiUrl + 'Funcionario'
    );
  }
}
