import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/reparto.interface';
import Swiper from 'swiper';

@Component({
  selector: 'app-reparto-slide-show',
  templateUrl: './reparto-slide-show.component.html',
  styleUrls: ['./reparto-slide-show.component.css']
})
export class RepartoSlideShowComponent implements OnInit, AfterViewInit{
  @Input() reparto?:Cast[];

  actores:Cast[]=[];

  constructor() {}
  ngAfterViewInit() {
    swiper:Swiper;
    const swiper = new Swiper('.swiper', {
      slidesPerView: 5.3, 
      freeMode:true,
      spaceBetween:15
    })
  }

  ngOnInit(): void {
      
  }
  

}
