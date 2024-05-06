import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NidAddComponent } from './nid-add.component';

describe('NidAddComponent', () => {
  let component: NidAddComponent;
  let fixture: ComponentFixture<NidAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NidAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NidAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
