import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { EquipesService } from 'src/app/services/equipes.service';
import { Equipes } from 'src/model/Equipes';

@Component({
  selector: 'app-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.css']
})
export class FormEquipeComponent implements OnInit {

  public Equipe:Equipes;
  public action:String;

  constructor(private EquipeService:EquipesService,private route:Router,private currentroute:ActivatedRoute) { }

  ngOnInit(): void {
    let id =this.currentroute.snapshot.params['idEquipe'];
    if(id!=null){
      this.EquipeService.getEquipebyid(id).subscribe(
       
        (data:Equipes)=>{this.Equipe=data}
      );
      //update
      this.action='update';
    }else{
      //add
      this.Equipe=new Equipes()
      this.action='ADD';
    }


  }



  saveEquipe(){
    if(this.action=='update'){
      this.EquipeService.updateEquipe(this.Equipe).subscribe(
        ()=>this.route.navigate(['/Equipes']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}}
      )

    }else{
    this.EquipeService.addEquipe(this.Equipe).subscribe(
      ()=>this.route.navigate(['/Equipes']),
      ()=>{console.log('error'),
      ()=>{console.log('complete')}}
    )
    }
  }

}
