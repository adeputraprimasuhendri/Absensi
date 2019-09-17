import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaryawanPage } from './karyawan.page';

describe('KaryawanPage', () => {
  let component: KaryawanPage;
  let fixture: ComponentFixture<KaryawanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaryawanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaryawanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
