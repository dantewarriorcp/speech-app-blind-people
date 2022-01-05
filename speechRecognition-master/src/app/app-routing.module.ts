import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { SpeechComponent } from './components/speech/speech.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
const routes: Routes = [
  { path: 'speech', component: SpeechComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'speech' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
