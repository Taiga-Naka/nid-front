import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../enviroment/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorServices {
  constructor(private http: HttpClient) {}

  //login no ()
  public httpLinkTask$(): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/login', {})
  }
}
