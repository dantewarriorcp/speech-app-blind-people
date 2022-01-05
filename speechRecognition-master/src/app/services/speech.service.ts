import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
declare const webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  error = true;

  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  text = '';
  user='';
  usercorrect=false;
  pass='';
  passcorrect=false;
  total='';
  tempWords: any;

  constructor(private router: Router) { }

  init(): void {
    this.recognition.interimResults = true;
    this.recognition.lang = 'es-ES';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
    });
  }

  start(): void {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    this.recognition.addEventListener('end', () => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
      } else {
        this.wordConcat();
        this.recognition.start();
        if (this.text.trim() !== 'redirigir') {
          console.log("HOLA");
          console.log(this.text.trim())
          this.stop();
          this.text = 'ERROR!!!';
          this.error = true;
        } else {
          console.log("HOLA");
          console.log(this.text.trim())
          this.stop();
          this.router.navigateByUrl('details');
          window.open('https://www.google.com');
          this.error = true;
        }
      }
    });
  }
  start2(): void {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    this.recognition.addEventListener('end', () => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
      }
      else {
        this.wordConcat();
        this.recognition.start();
        this.total=this.total+" "+this.user.trim();
        this.total.toString();
        if(this.total === 'usuario contra')console.log("qw fue");this.router.navigateByUrl('speech')
        this.stop();
        this.error = true;
        }
    });
  }
  stop(): void {
    
    this.recognition.stop();
    this.isStoppedSpeechRecog = true;
    this.wordConcat();
  }

  wordConcat(): void {
    this.text = this.text + this.tempWords + ' ';
    this.user = this.user + this.tempWords + ' ';
    this.pass = this.pass + this.tempWords + ' ';
    this.tempWords = ' ';
  }
}
