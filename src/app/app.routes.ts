import { Routes } from '@angular/router';
import { Home } from './modules/public/home/home';

export const routes: Routes = [
    {
        path: 'flats',
        loadChildren: () => import('./modules/public/flats/flats.routes')
            .then((m) => m.FlatsRoutes)
    },

    { path: '', redirectTo: 'flats', pathMatch: 'full' },
    { path: 'home', component: Home },

    
    // {
    //     path: 'flats',
    //     loadComponent: () => import('./modules/public/flats/flat')
    //         .then(c => c.FlatsLayout)
    // },


    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
