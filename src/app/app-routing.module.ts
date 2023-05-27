import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountModule } from './account/account.module';
import { canActivate } from './core/guards/auth.guard';
import { PortalModule } from './portal/portal.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => AccountModule) },
  { path: 'portal', 
    canActivate: [canActivate],
    loadChildren: () => import('./portal/portal.module').then(m => PortalModule) 
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
