import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {

  @Input() elemento: any;

  mostrar: boolean = true
  eliminar(elemento: any) {
    this.elemento = []
    this.mostrar = false
  }
}
