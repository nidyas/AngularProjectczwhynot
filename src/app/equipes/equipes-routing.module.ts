import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipesComponent } from './equipes.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';

const routes: Routes = [{ path: '', component: EquipesComponent },


{ path: 'add', component:FormEquipeComponent },
{path:'updateEqp/:idEquipe', component: FormEquipeComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipesRoutingModule { }
