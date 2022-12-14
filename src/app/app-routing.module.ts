import { ErrorPageComponent } from './error-page/error-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { Server1Component } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ]
  },
  // {
  //   path: 'servers', canActivate: [AuthGuard], component: ServersComponent, children: [
  //     { path: ':id', component: Server1Component },
  //     { path: ':id/edit', component: EditServerComponent },
  //   ]
  // },
  {
    path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
      { path: ':id', component: Server1Component, resolve: { server: ServerResolver } },
      { path: ':id/edit', component: EditServerComponent, canActivate: [AuthGuard] },
    ]
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found...!!!' } },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
]

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
