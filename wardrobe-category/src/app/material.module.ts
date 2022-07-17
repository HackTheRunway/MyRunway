// material.module.ts

import { NgModule } from '@angular/core';

import { MatSelectModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ]
})

export class MaterialModule { }