import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiditComponent } from './bidit.component';

describe('BiditComponent', () => {
  let component: BiditComponent;
  let fixture: ComponentFixture<BiditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
