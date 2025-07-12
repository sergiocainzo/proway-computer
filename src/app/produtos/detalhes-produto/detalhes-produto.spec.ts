import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesProduto } from './detalhes-produto';

describe('DetalhesProduto', () => {
  let component: DetalhesProduto;
  let fixture: ComponentFixture<DetalhesProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
