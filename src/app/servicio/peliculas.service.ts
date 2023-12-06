import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {map, tap, catchError} from 'rxjs/operators';
import { Genero, Pelicula, PeliculasResponse } from '../interfaces/peliculas.interfaces';
import { Genre, PeliculaDetalles } from '../interfaces/pelicula.interface';
import { Cast, Reparto } from '../interfaces/reparto.interface';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private serverURL: String='https://api.themoviedb.org/3';
  private peliculaPage = 1;
  cargando = false;

  private httpOptions ={
    headers:{
      'Accept': 'aplication/json',
    }
  }

  constructor(private http:HttpClient) {}

  get params(){
    return{
      api_key:'605d870f982c661624dbb937b18ab3cf',
      language:'es-ES',
      page:this.peliculaPage.toString()
    }
  }


getPeliculas():Observable<Pelicula[]>{

  if(this.cargando){
    return of([]); //El of emite una cantidad de variables de un valor
  }

  this.cargando = true;
  console.log('Ver peliculas cargadas')

  return this.http.get<PeliculasResponse>(`${this.serverURL}/movie/now_playing`, {params:this.params}).pipe(

    map((res)=>res.results),
    tap(()=>{
      this.peliculaPage+=1  //El 1 es porque que solo estaremos en la pagina 1 que esta declarado en la variable Peliculapage
      this.cargando = false;
    })
  )

  
}

getPeliculasDetalle(id: string){
  return this.http.get<PeliculaDetalles>(`${this.serverURL}/movie/${id}`, {
    params:this.params
  }).pipe(
    catchError(err => of(null))
  );
    
    
  
}
getReparto(id: string): Observable<Cast[]>{
  return this.http.get<Reparto>(`${this.serverURL}/movie/${id}/credits`, {
    params:this.params
  }).pipe(
    map(res=>res.cast),
    catchError(err => of([]))
  )
}


resetPeliculaPage(){
  this.peliculaPage = 1;
}

async getGenero(): Promise<Genre[]>{

  const prefix = '/genre/movie/list';
  const request = `${this.serverURL}/${prefix}`;

  return new Promise(resolve =>{
    this.http.get<Genre[]>(request, this.httpOptions)
    .subscribe(data =>{
      console.log(data);
      resolve(data)
    })
  })

}

buscarPeliculas(texto:string):Observable<Pelicula[]>{
  //https://api.themoviedb.org/3/search/movie?api_key=605d870f982c661624dbb937b18ab3cf&&Language=es-ES&query=avengers&page=1&

  const params = {...this.params, page:1, query:texto};

  return this.http.get<PeliculasResponse>(`${this.serverURL}/search/movie`, {
    params
  }).pipe(

    map( res => res.results)
  );
   
}


}
