import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColsultarProdutosComponent } from './colsultar-produtos.component';

describe('ColsultarProdutosComponent', () => {
  let component: ColsultarProdutosComponent;
  let fixture: ComponentFixture<ColsultarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColsultarProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColsultarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
