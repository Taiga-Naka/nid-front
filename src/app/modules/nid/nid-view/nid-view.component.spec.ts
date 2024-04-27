import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NidViewComponent } from './nid-view.component';

describe('NidViewComponent', () => {
  let component: NidViewComponent;
  let fixture: ComponentFixture<NidViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NidViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NidViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
