import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CursosService } from './../services/cursos.service';
import { Cursos } from './../model/cursos';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  listaDeCursos$: Observable<Cursos[]>;
  displayedColumns = ['nome', 'categoria'];

  constructor(
    private CursosService: CursosService,
    public dialog: MatDialog
    ) {
    /* this.listaDeCursos = []; */
    this.listaDeCursos$ = this.CursosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([])
      })
    ) ;
   }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
