import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TableauComponent } from './tableau/tableau.component';
import { PortalComponent } from './portal/portal.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
    { path: 'principal', component: PrincipalComponent },
    { path: 'nosotros', component: NosotrosComponent},
    { path: 'servicios', component:  ServiciosComponent },
    { path: 'tableau', component: TableauComponent },
    { path: 'portal', component: PortalComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contacto', component: ContactoComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'principal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
