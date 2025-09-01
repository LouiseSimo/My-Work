import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// export class FlatDetailGuard implements CanActivate {

//   constructor(private router: Router) { }


//   canActivate(route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {

//     console.log('route activable: ', route); console.log(route)
//     console.log('Route being accessed:', route);
//     console.log('Full URL:', state.url); // 👈 this is the snapped route
//     console.log('Route parameters:', route.params);
//     console.log('Route data:', route.data);
//     return true;
//     const id = +route.url[1].path;

//     if (isNaN(id) || id <= 0 || id >=5){
//       alert('Flat inconnu, veillez retourner en zone securisée parce que ici vous etes en danger');
//       this?.router.navigate(['/flats']);
//       return false;
//   }

//   return true;
//     }
// };


export const FlatDetailGuard: CanActivateFn = (route,
  state): boolean => {
  console.log('route activable: ', route);
  const router = inject(Router); // inject est utilisee pour l'injection des dependances, apparement ce n'est pas permis d'utiliser le constructuer avec cette approach

  // const id = +route.url[1].path;
  const id = Number(route.paramMap.get('id'));

  if (id !== null) {
    if (isNaN(id) || id <= 0 || id >= 5) {
    alert('Flat inconnu, veillez retourner en zone securisée parce que ici vous etes en danger');
    router.navigate(['/flats']);
    return false;

  }
    return true; // Si l'id est valide, on autorise l'accès
  }



  return true;
};