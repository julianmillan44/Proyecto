import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Genre } from 'src/app/interfaces/pelicula.interface';
import { Pelicula } from 'src/app/interfaces/peliculas.interfaces';
import { PeliculasService } from 'src/app/servicio/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  pelicula:Pelicula[]=[];
  peliculasSlideShow: Pelicula[] = [];
  generos: Genre[]=[];

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    const posicion = (document.documentElement.scrollTop || document.body.scrollTop)*1300;
    const maximo = (document.documentElement.scrollHeight || document.body.scrollHeight);

   if (posicion > maximo){
    this.peliculasSvc.getPeliculas().subscribe(peliculas=>{
      this.pelicula.push(...peliculas);
    })
   }
  }

  constructor(private peliculasSvc:PeliculasService){}

  ngOnDestroy() {
    this.peliculasSvc.resetPeliculaPage();
  }
  
  
  ngOnInit(): void {
      this.peliculasSvc.getPeliculas().subscribe(async peliculas=>{
        this.peliculasSlideShow = peliculas;
        this.pelicula= peliculas;
        this.generos = await this.peliculasSvc.getGenero();
        console.log(this.generos);
      })
  }
}
