import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    DragDropModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    DragDropModule
  ]
})

export class MaterialModule {}
