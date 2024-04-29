import {Route, RouterModule} from "@angular/router";
import {NidViewComponent} from "./nid-view/nid-view.component";
import {NgModule} from "@angular/core";

const routes: Route[] = [
  {
    path: '',
    component: NidViewComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class NidRoutingModule {}

//teste
