import { Routes } from '@angular/router';
import { DeferableComponent } from './deferable/deferable.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { HomeComponent } from './home/home.component';
import { TemplatesComponent } from './templates/templates.component';

export const routes: Routes = [{
    path: 'defer',
    component: DeferableComponent,
},
{
    path: 'componentes',
    component: ControlFlowComponent,
},
{
    path: 'templates',
    component: TemplatesComponent,
},
{
    path: '',
    component: HomeComponent,
}];
