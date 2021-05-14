import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent implements OnInit {

  response: any;
  filename = '';
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }



  openDialog(event): void {
    this.filename =event.target.files[0].name;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '45em',
      data: {event: event}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        this.response = result.data;
      }

    });
  }

  reloadImage(){
    this.response = undefined;
  }

}
