import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosisTreatmentComponent } from './views/diagnosis-treatment/diagnosis-treatment.component';

const routes: Routes = [
  { path: 'diagnosis-treatment', component: DiagnosisTreatmentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosisTreatmentRoutingModule { }
