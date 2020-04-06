import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCanadaComponent } from './about-canada.component';

describe('AboutCanadaComponent', () => {
  let component: AboutCanadaComponent;
  let fixture: ComponentFixture<AboutCanadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCanadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
