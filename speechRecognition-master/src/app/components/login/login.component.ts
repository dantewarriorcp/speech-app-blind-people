import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { SpeechService } from 'src/app/services/speech.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  title = "Formulario Dutic-Invidentes";
  constructor(private fb: FormBuilder,private router: Router,public speech: SpeechService) {
    this.createForm();
    this.speech.init();
  }
  
  ngOnInit():void{}
  createForm() {
    this.angForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(5)]],
      surname: ["", Validators.required]
    });
    this.angForm.controls["name"].valueChanges.subscribe(data => {
      console.log(data);
    }
    );

  }
  onSubmit() {
    if (this.angForm.valid) {
      if(this.angForm.value["name"]==="nico"){
        if(this.angForm.value["surname"]==="prado"){
          this.router.navigateByUrl('speech');
        }
      }
      else {
        alert("FILL ALL FIELDS");
      }
      
    } else {
      alert("FILL ALL FIELDS");
    }
  }

  startService2(): void {
    this.speech.text = '';
    this.speech.user = '';
    this.speech.pass = '';
    this.speech.start2();
    this.speech.error = false;
  }
}
