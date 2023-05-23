import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConctactPageComponent } from './conctact-page.component';

describe('ConctactPageComponent', () => {
  let component: ConctactPageComponent;
  let fixture: ComponentFixture<ConctactPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConctactPageComponent]
    });
    fixture = TestBed.createComponent(ConctactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
