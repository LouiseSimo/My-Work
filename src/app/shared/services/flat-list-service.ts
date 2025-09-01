import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { IFlat } from '../models/flat';


@Injectable({
  providedIn: 'root'
})
export class FlatListService {


  private readonly FLAT_API_URL = '/api/flats.json'; // route vers le fichier json
  // private readonly FLAT_API_URL = '../api/flats.data'; // route vers la fake database using inmemoryApp


  constructor(private http: HttpClient) { }

   private getDefaultFlat():IFlat{
      return{
        id: 0,
        flatName: "",
        description: " ",
        price: null,
        imageUrl:"",
        isFree:false,
        // createdDate: new Date(),
      }
    }


  public getFlats(): Observable<IFlat[]> {
    
    return this.http.get<IFlat[]>(this.FLAT_API_URL).pipe(
      tap(flats => console.log("liste des flats recus de l'api :", flats)),
      // tap est comme le console.log des observables, son but ici est de recuperer tout element de type observable ainsi console.log pourra le recuperer pour l'afficher en console
      catchError((error) => this.handleError(error))//catchError est une fonction qui s'appelle sur l'observable que va retourner la fonction get pour 
      //verifier si elle contient des erreurs.Si c'est le cas, il les recupere et les traite à l'aide de la fonction handleError.
    )

  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      errorMessage = 'An error occurred:', error.error
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    errorMessage = `Backend returned code ${error.status}, body was: `, error.error;

    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.' + '/n' + errorMessage));
  }


  public getFlatById(id:number):Observable<IFlat| undefined>{
    if( id === 0){
      return of (this.getDefaultFlat())
    }

    return this.getFlats().pipe(
      map( flats =>flats.find(flat=>flat.id ===id ))
    )
      // const url= this.FLAT_API_URL +'/'+ id;
      // if(id === 0){
      //   return of(this.getDefaultFlat())// of permet de transformer le valeur qu'il a en paramètre en un flux de donnee(observable)
      // }
      // return this.http.get<IFlat>(url).pipe(
      //   tap(flat=>console.log("Flat recu de l'api à partir de son id:",flat)),
      //   catchError(this.handleError)// comment s'explique cette facon d'appeller handleError sans lui passer ses parametres?
      // );
    }

}


