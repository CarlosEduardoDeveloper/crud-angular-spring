import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Cursos } from '../model/cursos'
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

private readonly API = '/assets/cursos.json';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Cursos[]>(this.API)
    .pipe(
      first(),
      //delay(2000),
      tap(listaDeCursos => console.log(listaDeCursos))
    );
  }
}
