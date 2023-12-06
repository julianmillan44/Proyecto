import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Genero, Pelicula } from 'src/app/interfaces/peliculas.interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit, AfterViewInit {
@Input() peliculas?:Pelicula[];
myswiper?:Swiper;
pelicula:Pelicula[]=[];

  constructor(private router: Router){}
  ngAfterViewInit(): void {

    this.myswiper = new Swiper('.swiper', {
      loop:true
    });
    
  }

  ngOnInit(): void {
    
  }

  onSliderPrev(){
    this.myswiper?.slidePrev(); //Funcion que nos permite mover el slider hacia el lado anterior
  }

  onSliderNext(){
    this.myswiper?.slideNext(); //Funcion que nos permite mover el slider hacia el lado siguiente
  }

  onMovieclick(pelicula: Pelicula){
    this.router.navigate(['/pelicula', pelicula.id])
  }
}
