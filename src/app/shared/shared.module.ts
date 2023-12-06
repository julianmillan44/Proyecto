import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from "../pipes/pipes.module";
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { PeliculasPosterComponent } from './peliculas-poster/peliculas-poster.component';
import { RepartoSlideShowComponent } from './reparto-slide-show/reparto-slide-show.component';





@NgModule({
    declarations: [
        NavbarComponent,
        SlideShowComponent,
        PeliculasPosterComponent,
        RepartoSlideShowComponent
    ],
    exports: [
        NavbarComponent,
        SlideShowComponent,
        PeliculasPosterComponent,
        RepartoSlideShowComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        PipesModule,
        NgbRatingModule,
        NgbPopoverModule,
        FormsModule
        
    ]
})
export class SharedModule { }
