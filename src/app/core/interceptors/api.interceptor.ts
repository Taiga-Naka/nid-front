import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {environment} from "../../enviroment/environment";

export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
    if(req.url.startsWith('/')) {
      return next.handle(req.clone({
        url: environment.apiUrl + req.url
      }));
    }
    return next.handle(req);
  }
}
