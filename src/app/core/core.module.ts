import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS} from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ApiInterceptor } from "./interceptors/api.interceptor";

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
