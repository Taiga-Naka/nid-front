import {NgModule} from "@angular/core";
import {NidViewComponent} from "./nid-view/nid-view.component";
import {NidRoutingModule} from "./nid.routing.module";
import {NgForOf} from "@angular/common";

@NgModule({
  declarations: [NidViewComponent],
    imports: [NidRoutingModule, NgForOf]
})
export class NidViewModule {
}
