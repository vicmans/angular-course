import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { adminGuard } from './guards/admin.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserResolverService } from './services/user-resolver.service';
import { provideHttpClient, withInterceptors, withRequestsMadeViaParent } from '@angular/common/http';
import { Page404Component } from './pages/404/404.component';
import { tokenInterceptor } from './shared/token.interceptor';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'products',
        loadChildren: () => import('./product.routes').then(m => m.PRODUCT_ROUTES),
    },
    {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(c => c.ProfileComponent),
        // Imported guard
        canActivate: [authGuardGuard],
        // Inline guard
        canDeactivate: [() => confirm('You are leaving Profile, Are you sure?')],
        providers: [
            provideHttpClient(
                // Interceptor in child route
                withInterceptors([tokenInterceptor]),
                withRequestsMadeViaParent()
            ),
        ]
    },
    {
        path: 'dashboard',
        canMatch: [adminGuard],
        // loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
        component: DashboardComponent,
        resolve: {
            users: UserResolverService
        },
        providers: [UserResolverService]
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent),
    },
    {
        path: '**',
        component: Page404Component,
    },
];
