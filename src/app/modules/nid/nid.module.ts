import {NgModule} from "@angular/core";
import {NidViewComponent} from "./nid-view/nid-view.component";
import {NidRoutingModule} from "./nid.routing.module";

@NgModule({
  declarations: [NidViewComponent],
  imports: [NidRoutingModule]
})
export class NidViewModule {
}
