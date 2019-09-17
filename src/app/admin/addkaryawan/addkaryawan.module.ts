import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddkaryawanPage } from './addkaryawan.page';

const routes: Routes = [
  {
    path: '',
    component: AddkaryawanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddkaryawanPage]
})
export class AddkaryawanPageModule {}
