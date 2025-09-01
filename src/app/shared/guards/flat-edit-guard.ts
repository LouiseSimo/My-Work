import { CanDeactivateFn } from '@angular/router';
import { FlatEdit } from '../../modules/public/flats/flat-edit/flat-edit';

export const flatEditGuard: CanDeactivateFn<FlatEdit> = (component:FlatEdit) => {

  if(component.flatForm.dirty){
    const flatName=component.flatForm.get('flatName')?.value || 'New Flat';
    return confirm('Do you want to cancel the changes mades on'+flatName)
  }
  return true;
};
