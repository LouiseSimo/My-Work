import { Routes } from '@angular/router';

import { FlatList } from './flat-list/flat-list';
import { FlatDetails } from './flat-details/flat-details';
import { FlatDetailGuard } from '../../../shared/guards/flat-details-guard';
import { FlatsLayout } from './flat';
import { FlatEdit } from './flat-edit/flat-edit';
import { flatEditGuard } from '../../../shared/guards/flat-edit-guard';


export const FlatsRoutes: Routes = [
  {
    path: '',
    component: FlatsLayout, // Acts like a wrapper for flats pages
    children: [
      { path: '', redirectTo: 'flats-list', pathMatch: 'full' },
      { path: 'flats-list', component: FlatList },
      { path: 'flat-details', component: FlatDetails },
      {
        path: ':id', component: FlatDetails,
        canActivate: [FlatDetailGuard]
      },
      {
        path: ':id/edit', component: FlatEdit,
        canDeactivate: [flatEditGuard]
      },
    ]
  },


];