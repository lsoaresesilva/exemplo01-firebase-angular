import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList }
  from 'angularfire2/database';
import { Observable } from "rxjs/Observable";
import { Pessoa } from "../models/pessoa";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  pessoaDB: AngularFireList<Pessoa>;
  pessoa$: Observable<Pessoa[]>;
  title = 'app';
  pessoa:Pessoa;

  constructor(fireDb:AngularFireDatabase){
    this.pessoaDB = fireDb.list<Pessoa>('maoe');
    
    this.pessoaDB.snapshotChanges().subscribe(res=>{
     
      let pessoas:Pessoa[] = [];
      for(let i =0; i < res.length;i++){
        let key = res[i].key;
        let data = res[i].payload.val();
        data.key = key;
        let pessoa = new Pessoa();
        pessoa.build(data);
        pessoas.push(pessoa);
        
        
      }

      this.pessoa$ = Observable.create(observer=>{
          
          observer.next(pessoas);
          observer.complete();
          
        });
    });
    this.pessoa = new Pessoa();
  }

  salvar(){
    this.pessoaDB.push(this.pessoa);
  } 

  atualizar(pessoa:Pessoa){
    this.pessoaDB.update(pessoa.key, pessoa);
  }

  apagar(pessoa:Pessoa){
    this.pessoaDB.remove(pessoa.key);
  }

}
