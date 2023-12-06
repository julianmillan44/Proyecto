import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre, PeliculaDetalles } from 'src/app/interfaces/pelicula.interface';
import { PeliculasService } from 'src/app/servicio/peliculas.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Cast } from 'src/app/interfaces/reparto.interface';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula?: PeliculaDetalles;
  genero?: Genre;
  reparto: Cast[]=[];

  constructor(private peliculasSvc: PeliculasService, private activatedRoute: ActivatedRoute, private router: Router, private config: NgbRatingConfig){
    config.max=10;
    config.readonly =  true;
  }

  ngOnInit() {
      const {id} = this.activatedRoute.snapshot.params;

      this.peliculasSvc.getPeliculasDetalle(id).subscribe(pelicula =>{

       if(!pelicula){

        this.router.navigateByUrl('/');
        return;
       }

       this.pelicula=pelicula;

      });

      this.peliculasSvc.getReparto(id).subscribe(reparto =>{
 
        this.reparto=reparto;
 
       });

      
  }


}
