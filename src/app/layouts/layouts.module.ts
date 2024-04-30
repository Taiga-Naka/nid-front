import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HorizontalComponent } from './horizontal/horizontal.component';
import { HorizontaltopbarComponent } from './horizontaltopbar/horizontaltopbar.component';
import { FooterComponent } from './footer/footer.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';

@NgModule({
  declarations: [
    HorizontalComponent,
    HorizontaltopbarComponent,
    FooterComponent,
    RightsidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: []
})
export class LayoutsModule { }
