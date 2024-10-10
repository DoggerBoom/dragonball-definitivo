import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../planets.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent  implements OnInit{

  planet: any = {}

  constructor(
    private servicio: PlanetsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPlanet();
  }

  getPlanet() {
    this.servicio.obtenerPlaneta(this.route.snapshot.paramMap.get('id')).subscribe((res: any) => {
      this.planet = res;
    });

  }
}
