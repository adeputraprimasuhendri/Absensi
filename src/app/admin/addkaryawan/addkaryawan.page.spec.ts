import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkaryawanPage } from './addkaryawan.page';

describe('AddkaryawanPage', () => {
  let component: AddkaryawanPage;
  let fixture: ComponentFixture<AddkaryawanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddkaryawanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddkaryawanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
