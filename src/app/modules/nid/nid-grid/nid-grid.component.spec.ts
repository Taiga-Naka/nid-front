import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NidGridComponent } from './nid-grid.component';

describe('NidGridComponent', () => {
  let component: NidGridComponent;
  let fixture: ComponentFixture<NidGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NidGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NidGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
