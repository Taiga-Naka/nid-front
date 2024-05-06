import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NidAssignComponent } from './nid-assign.component';

describe('NidAssignComponent', () => {
  let component: NidAssignComponent;
  let fixture: ComponentFixture<NidAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NidAssignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NidAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
