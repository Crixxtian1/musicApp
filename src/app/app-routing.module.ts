import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'instrumentos',
    loadChildren: () => import('./instrumentos/instrumentos.module').then( m => m.InstrumentosPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastroprof',
    loadChildren: () => import('./cadatroprof/cadatroprof.module').then( m => m.CadatroprofPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'esqueceusenha',
    loadChildren: () => import('./esqueceusenha/esqueceusenha.module').then( m => m.EsqueceusenhaPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },

  {
    path: 'adicionarconta',
    loadChildren: () => import('./adicionarconta/adicionarconta.module').then( m => m.AdicionarcontaPageModule)
  },
  {
    path: 'suaconta',
    loadChildren: () => import('./suaconta/suaconta.module').then( m => m.SuacontaPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'tabelasdecadastro',
    loadChildren: () => import('./tabelasdecadastro/tabelasdecadastro.module').then( m => m.TabelasdecadastroPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
