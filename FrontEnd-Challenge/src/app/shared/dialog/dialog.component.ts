import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';
interface DialogData {
  event: any;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  fileToUpload: any;
  imageUrl: any;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  filename ='';
  isLoading =true;
  constructor( public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
   // this.handleFileInput(this.data.event)
   this.fileChangeEvent(this.data.event)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  // handleFileInput(event: any) {
  //   const target= event.target as HTMLInputElement;
  //   const file: File = (target.files as FileList)[0]
  //   this.fileToUpload = file;
  //   let reader = new FileReader();
  //   reader.onload = (event: any) => {
  //     this.imageUrl = event.target.result;
  //   }
  //   reader.readAsDataURL(this.fileToUpload);
  // }
  fileChangeEvent(event: any): void {
    console.log("jjajj", event.target.files[0].name)
    this.filename = event.target.files[0].name;
    this.imageChangedEvent = ''
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
      this.isLoading = false;
  }
  save(){
    this.dialogRef.close({ data: this.croppedImage, filename: this.filename })
  }
  close(){
    this.dialogRef.close();
  }

  openDialogAgain(){
    this.dialogRef.close();
  }

}
