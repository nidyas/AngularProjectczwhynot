import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from'../../environments/environment'
import { Equipes } from 'src/model/Equipes';

@Injectable({
  providedIn: 'root'
})
export class EquipesService {
  public uri= environment.uri

  constructor(private http:HttpClient) { }
  getAllEquipes(){
      return this.http.get<Equipes[]>(this.uri+'Eqp')
  }
  deleteEquipebyId(id:number){
      return this.http.delete(this.uri+'delEqp/'+id);
  }
  addEquipe(e:Equipes){
    return this.http.post(this.uri+'addEquipe',e)
  }
  getEquipebyid(id:number){
    return this.http.get<Equipes>(this.uri+'getbyid/'+id)

  }
  updateEquipe(e:Equipes){
    return this.http.put(this.uri+'putEquipe/'+e.idEquipe,e)
  }
}
