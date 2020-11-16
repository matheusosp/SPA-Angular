import { AlunoService } from './../alunos/aluno.service';
import { PageEvent } from '@angular/material/paginator';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit{
  constructor(private alunoService: AlunoService){
  }
  // MatPaginator Inputs
  length = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  ngOnInit(): void {  
    this.qtdlist()
  }

  qtdlist(): void{
      this.alunoService.qtd().subscribe({
          next: alunos =>{
              this.length = alunos.length;
          },
          error: err => console.log("Error", err)
      });
  }

  // MatPaginator Output
  pageEvent: PageEvent;
}
