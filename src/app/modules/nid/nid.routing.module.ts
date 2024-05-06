import {Route, RouterModule} from "@angular/router";
import {NidViewComponent} from "./nid-view/nid-view.component";
import {NgModule} from "@angular/core";
import { AuthGuard } from "../../core/guards/auth.guard";
import { NidGridComponent } from "./nid-grid/nid-grid.component";

const routes: Route[] = [
  {
    path: '',
    component: NidGridComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id/assinar',
    component: NidGridComponent,
    canActivate: [AuthGuard]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: []
})
export class NidRoutingModule {}
