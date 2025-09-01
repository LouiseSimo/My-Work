import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SHARED_IMPORTS } from './shared/shared-imports';
import { MATERIALS_IMPORTS } from './shared/materials-imports';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SHARED_IMPORTS,
    MATERIALS_IMPORTS

  ],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
  protected title = 'Renting Management';
  menuItems = [
    { label: 'Home', route: '/home' },
    { label: 'Flat list', route: '/flats' },
    { label: 'Add a flat ', route: ['/flats', '0', 'edit'] },
   
  ];
}
