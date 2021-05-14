import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropzoneComponent } from './ui/dropzone/dropzone.component';
import { SharedModule } from './shared/shared.module';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ElipsizedPipe } from './shared/pipes/elipsized.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DropzoneComponent,
    ElipsizedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ElipsizedPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
