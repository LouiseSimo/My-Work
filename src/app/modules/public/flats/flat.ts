import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/shared-imports';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'flats-layout',
  template: `
    
    <div class=" ">
          <router-outlet></router-outlet>
    </div>
  `,
  imports: [
    SHARED_IMPORTS,
    RouterOutlet,
    RouterModule

  ],
})
export class FlatsLayout { }