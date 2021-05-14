import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ElipsizedPipe } from './pipes/elipsized.pipe';
@NgModule({
  declarations: [
  DialogComponent,
  ],
  imports:[
    CommonModule,
    ImageCropperModule,
    MatToolbarModule
  ],
  exports: [
    CommonModule,
    DialogComponent,
    ImageCropperModule,
    MatToolbarModule,
  ],
  providers: [
    ImageCropperModule,
    MatToolbarModule,
    ElipsizedPipe
],
})
export class SharedModule {

}
