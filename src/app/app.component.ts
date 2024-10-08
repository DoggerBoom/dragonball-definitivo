import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from "./characters/characters.component";
import { HeaderComponent } from "./header/header.component";
import { PlanetsComponent } from "./planets/planets.component";
import { TransformationsComponent } from "./characters/transformations/transformations.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule, CharactersComponent, HeaderComponent, PlanetsComponent, TransformationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  private readonly baseURL='http://localhost:4200/characters'

  constructor(
    private readonly http: HttpClient
  ){}
  ngOnInit(): void {
    this.http.get('baseURL');
  }
  
}

//iamgenes, id, metodo onclickicon