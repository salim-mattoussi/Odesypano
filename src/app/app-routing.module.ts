import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AprocheComponent } from './aproche/aproche.component';
import { ContactComponent } from './contact/contact.component';
import { CreationComponent } from './creation/creation.component';
import { DomaineComponent } from './domaine/domaine.component';
import { HistoriqueComponent } from './historique/historique.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OutilGesComponent } from './outil-ges/outil-ges.component';

const routes: Routes = [
  {path:"about", component:AboutComponent},
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"detaitC",component:CreationComponent},
  {path:"historique",component:HistoriqueComponent},
  {path:"domaine",component:DomaineComponent},
  {path:"Approche",component:AprocheComponent},
  {path:"outile",component:OutilGesComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
