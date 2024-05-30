import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListaComponent } from '../lista/lista.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, ListaComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  mForm = this.fb.group({
    ciudad: ["", [Validators.required]],
    pais: ["", [Validators.required]],
    mes: ["", [Validators.required]]
  })
  constructor(private fb: FormBuilder) {
  }

  cities: any[] = [];

  enviar(city: any) {
    this.cities.push(city)
    console.log(this.cities)
    this.mForm.reset()
    let myCity = city
    myCity.id = window.crypto.randomUUID()
  }
}
