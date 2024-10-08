import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-transformations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transformations.component.html',
  styleUrl: './transformations.component.css'
})
export class TransformationsComponent implements OnInit {
character: any = {};

  constructor(
    private servicio: CharactersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getTransformations();
  }

  getTransformations() {
    this.servicio.obtenerPersonaje(this.route.snapshot.paramMap.get('id')).subscribe((res: any) => {
      this.character = res;
    });

  }

}


