import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters/characters.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { race } from 'rxjs';
import { log } from 'node:console';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {

  characters: any[] = [];

  limit: number = 1;

  filtro: any;

  constructor(private servicio: CharactersService, private fb: FormBuilder) {
    this.filtro = this.fb.group({
      limit: ['58'],
      affiliation: [''],
    })
  }
  ngOnInit(): void {
    this.cargardatos();
  }

  cargardatos() {
    this.servicio.obtenerdatos(this.filtro.value).subscribe((res: any) => {
      this.characters = this.filtro.value.affiliation? res : res.items;
    })
  }

  filtrar() {
        this.cargardatos();
    this.enviar();
  }

  enviar() {
    this.servicio.enviardatos(this.filtro.value).subscribe((res: any) => {
      console.log(res);
    });
  }

  mostrarPersonaje(id: number) {
    this.servicio.obtenerPersonaje(id).subscribe((res: any) => {
      console.log(res);
    });
  }

}

