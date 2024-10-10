import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PlanetsService } from './planets.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css'
})
export class PlanetsComponent {

  planets: any[] = [];

  filtro: any;


  constructor(private servicio: PlanetsService, private fb: FormBuilder) {
    this.filtro = this.fb.group({
      isDestroyed:[''],
    })
  }

  ngOnInit(): void {
    this.cargardatos();
  }

  cargardatos() {
    this.servicio.obtenerdatos(this.filtro.value).subscribe((res: any) => {
    // this.planets = this.filtro.value.isDestroyed ? res: res.items;
    this.planets = res;
    })
  }

  enviar() {
    this.servicio.enviardatos(this.filtro.value).subscribe((res: any) => {
      console.log(res);
    });
  }

  filtrar() {
    this.cargardatos();
    this.enviar()
  }

  mostrarPlaneta(id: number) {
    this.servicio.obtenerPlaneta(id).subscribe((res: any) => {
      console.log(res);
    })
  }



}
