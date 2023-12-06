import { Component, Input, OnInit } from '@angular/core';
import { Genero, Pelicula } from 'src/app/interfaces/peliculas.interfaces';
import {NgbRatingConfig, NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-peliculas-poster',
  templateUrl: './peliculas-poster.component.html',
  styleUrls: ['./peliculas-poster.component.css'],
  
})

export class PeliculasPosterComponent implements OnInit {

 
  @Input() peliculas:Pelicula[]=[];
  
  constructor(config: NgbRatingConfig, private router: Router) {
    // customize default values of ratings used by this component tree
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit() {
    console.log(this.peliculas, )
  }

  onMovieClick(pelicula:Pelicula){


    this.router.navigate(['/pelicula', pelicula.id]);
    

  }

  

}