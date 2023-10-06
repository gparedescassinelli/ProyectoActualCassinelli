import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.css']
})
export class SectionContactComponent implements OnInit {

  loading =false;

  formulario!: FormGroup; // No inicialices aquí

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.formulario = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]], // Inicializa aquí
    });

    this.loading=false;
  }

  contactUs(){

    console.log('funciona?',this.formulario.value);
  }

}
