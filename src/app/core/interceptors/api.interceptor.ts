import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import {environment} from "../../enviroment/environment";
import { ToastrService } from "ngx-toastr";
import { AuthenticatorServices } from "../services/auth.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    public toastr: ToastrService,
    private loginService: AuthenticatorServices
    ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const jwt = currentUser ? currentUser.token : "";

    const authReq = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${jwt}`),
    });

    return next.handle(authReq).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.toastr.error(
              "Sessão expirada, faça login novamente",
              "Erro"
            );
            this.loginService.logout();
          }
          if (err.status === 403) {
            this.toastr.error(
              "Você não tem permissão para acessar este recurso",
              "Erro"
            );
          }
        }
        return throwError(() => new Error("Erro"));
      })
    );
  }
}
