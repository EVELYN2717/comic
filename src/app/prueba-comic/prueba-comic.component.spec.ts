import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaComicComponent } from './prueba-comic.component';

describe('PruebaComicComponent', () => {
  let component: PruebaComicComponent;
  let fixture: ComponentFixture<PruebaComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
