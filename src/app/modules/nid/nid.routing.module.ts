import {Route, RouterModule} from "@angular/router";
import {NidViewComponent} from "./nid-view/nid-view.component";
import {NgModule} from "@angular/core";
import { AuthGuard } from "../../core/guards/auth.guard";

const routes: Route[] = [
  {
    path: '',
    component: NidViewComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: []
})
export class NidRoutingModule {}
