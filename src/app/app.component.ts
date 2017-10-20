import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Pessoa } from "../models/pessoa";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { PessoaInterface } from "../models/pessoaInterface";
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  pessoaDB: AngularFirestoreCollection<PessoaInterface>;
  pessoa$: Observable<PessoaInterface[]>;
  meuForm:FormGroup;
  pessoa:PessoaInterface;


  constructor(fireDb:AngularFirestore, formBuilder:FormBuilder){
    this.meuForm = formBuilder.group({
      nome: new FormControl()
    });
    this.pessoaDB = fireDb.collection<Pessoa>('maoe');

    this.pessoa$ = this.pessoaDB.snapshotChanges().map(res=>{
      return res.map(action => {
        const data = action.payload.doc.data() as PessoaInterface;
        const id = action.payload.doc.id;
        return { id, ...data };
      })
    });
    
  }

  salvar(form){
    this.pessoa = {nome:form.nome};
    this.pessoaDB.add(this.pessoa);
  } 

  atualizar(pessoa:PessoaInterface){
    this.pessoaDB.doc(pessoa.id).update(pessoa);
  }

  apagar(pessoa:Pessoa){
    //this.pessoaDB.remove(pessoa.key);
  }

}
