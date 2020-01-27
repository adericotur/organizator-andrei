import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';
import { Pacient } from 'src/app/models/pacient.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';
import { DialogProcedureComponent } from 'src/app/ui/shared/procedure/dialog-procedure/dialog-procedure.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit {

  @Input() data;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  public openAddModal() {
    this.dialog.open(DialogProcedureComponent, {
      width: '300px',
      data: this.data,
      autoFocus: false
    });
  }

}
