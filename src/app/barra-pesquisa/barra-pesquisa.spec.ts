import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPesquisa } from './barra-pesquisa';

describe('BarraPesquisa', () => {
  let component: BarraPesquisa;
  let fixture: ComponentFixture<BarraPesquisa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarraPesquisa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraPesquisa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
