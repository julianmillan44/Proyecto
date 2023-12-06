import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from "../pipes/pipes.module";
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    declarations: [
        HomeComponent,
        PeliculaComponent,
        BuscarComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PipesModule,
        NgbRatingModule
    ]
})
export class PagesModule { }
