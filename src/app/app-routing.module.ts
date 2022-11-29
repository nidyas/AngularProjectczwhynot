import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes=[{ path: 'Equipes', loadChildren: () => import('./equipes/equipes.module').then(m => m.EquipesModule) }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
