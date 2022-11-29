import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes=[{ path: 'Equipes', loadChildren: () => import('./equipes/equipes.module').then(m => m.EquipesModule) },

{ path: 'Reclamation', loadChildren: () => import('./reclamation/reclamation.module').then(m => m.ReclamationModule) }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
