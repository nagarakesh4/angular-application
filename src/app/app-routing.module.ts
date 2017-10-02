import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
    RouterModule.forRoot([ //forRoot - register the routing service provider
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} //usually a 404 page for wild card routes
    ])
  ],
  exports: [ RouterModule ]  // so that RouterModule can be used anywhere which imports this module
})
export class AppRoutingModule {}
