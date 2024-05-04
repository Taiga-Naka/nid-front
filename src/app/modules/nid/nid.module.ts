import {NgModule} from "@angular/core";
import {NidViewComponent} from "./nid-view/nid-view.component";
import {NidRoutingModule} from "./nid.routing.module";
import { CommonModule } from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [NidViewComponent],
    imports: [
        NidRoutingModule,
        CommonModule,
        ReactiveFormsModule
    ]
})
export class NidViewModule {
}
