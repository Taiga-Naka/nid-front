import {Route, RouterModule} from "@angular/router";
import {NidViewComponent} from "./nid-view/nid-view.component";
import {NgModule} from "@angular/core";
import { AuthGuard } from "../../core/guards/auth.guard";
import { NidGridComponent } from "./nid-grid/nid-grid.component";
import { NidAssignComponent } from "./nid-assign/nid-assign.component";

const routes: Route[] = [
  {
    path: '',
    component: NidGridComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'assinar/:id',
    component: NidAssignComponent,
    canActivate: [AuthGuard]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: []
})
export class NidRoutingModule {}
