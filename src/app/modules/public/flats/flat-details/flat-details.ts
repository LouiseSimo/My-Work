import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core'

import { SHARED_IMPORTS } from '../../../../shared/shared-imports';
import { MATERIALS_IMPORTS } from '../../../../shared/materials-imports';
import { FlatListService } from '../../../../shared/services/flat-list-service';
import { IFlat } from '../../../../shared/models/flat';

@Component({
  selector: 'app-flat-details',
  standalone: true,
  imports: [
    SHARED_IMPORTS,
    MATERIALS_IMPORTS
  ],
  templateUrl: './flat-details.html',
  //styleUrl: './flat-details.css'
})
export class FlatDetails implements OnInit {
 public flat :IFlat | undefined;

  constructor(private route: ActivatedRoute, // le service qui va nous aider à capturer la route et prendre la valeur dont on a besoin
    private flatListService: FlatListService,
    private router: Router) { }


  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    console.log("received id from the Url:", id);

    this.flatListService.getFlats().subscribe((flatList: IFlat[]) => {
      this.flat = flatList.find(flat => flat.id == id);
      console.log("flat à afficher dans ce component", this.flat)
    })
  }
}
