import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropzoneComponent } from './ui/dropzone/dropzone.component';


const routes: Routes = [{
  path:'',
  component: DropzoneComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
