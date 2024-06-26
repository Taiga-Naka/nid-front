import { NgModule } from "@angular/core";
import { NidViewComponent } from "./nid-view/nid-view.component";
import { NidRoutingModule } from "./nid.routing.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NidAssignComponent } from "./nid-assign/nid-assign.component";
import { NidGridComponent } from "./nid-grid/nid-grid.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { NgSelectModule } from '@ng-select/ng-select';
import { NidAddComponent } from "./nid-add/nid-add.component";

@NgModule({
  declarations: [
    NidViewComponent,
    NidAssignComponent,
    NidGridComponent,
    NidAddComponent
  ],
  imports: [
    NidRoutingModule,
    NgSelectModule,
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ]
})
export class NidViewModule {
}
