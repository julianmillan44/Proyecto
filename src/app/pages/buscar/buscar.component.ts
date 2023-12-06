import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Pelicula } from 'src/app/interfaces/peliculas.interfaces';
import { PeliculasService } from 'src/app/servicio/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
   texto:string = '';
   peliculas:Pelicula[]=[];
  noExiste?:boolean;

  constructor(private activatedRoute: ActivatedRoute, private peliculasSvc: PeliculasService){}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params =>{
        
        this.texto = params['texto'];

        this.peliculasSvc.buscarPeliculas(this.texto).subscribe(peliculas =>{

          if(peliculas.length>0){
            this.peliculas = peliculas;
            this.noExiste = false;
          }else{
            this.noExiste = true;
          }

          
        })
      })
  }

}
