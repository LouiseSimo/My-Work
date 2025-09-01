import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IFlat } from '../../../../shared/models/flat';
import { Observable } from 'rxjs';
import { FlatListService } from '../../../../shared/services/flat-list-service';
import { SHARED_IMPORTS } from '../../../../shared/shared-imports';
import { MATERIALS_IMPORTS } from '../../../../shared/materials-imports';



// import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-flat-list',
  standalone: true,
  // Note: The imports array is used to import Angular Material modules.
  imports: [
    FormsModule,
    SHARED_IMPORTS,
    MATERIALS_IMPORTS
  

  ],

  changeDetection: ChangeDetectionStrategy.OnPush,


  templateUrl: './flat-list.html',
  //styleUrl: './flat-list.css'
})
export class FlatList implements OnInit {
  public title = "Flat list ";
  public errorMsg!: string

  constructor(private flatListService: FlatListService) { }

  public flatList: IFlat[] = []
  public flatList$!: Observable<IFlat[]> 
  public isFree !: boolean;

  // _flatFilter is a private attribute only accessible via its get and set function  
  private _flatFilter: string = '';


  public filteredFlats: IFlat[] = [];


  public price = 135.12;

  ngOnInit() {
    this.isFree = true
    this.flatFilter = ""
    this.flatList$ = this.flatListService.getFlats()
    // this.flatListService.getFlats().subscribe({
    //   next: (flatList) => {
    //     this.flatList = flatList;
    //     console.log("flatList onInit " + this.flatList)
    //   },
    //   error: err => this.errorMsg = err
    // })


    this.filteredFlats = this.flatList
  }

  public get flatFilter(): string {
    return this._flatFilter;
  }

  public set flatFilter(criteria: string) {
    this._flatFilter = criteria;
    //this.filteredFlats = this.flatFilter? this.filterFlats(this.flatFilter):this.flatList;
    //this.flatFilter? plushaut represente le flatFilter defini avec la fonction get
  }


  public showFree(): void {

    // for (let flat of this.flatList){
    //   this.isFree=!this.isFree;
    // }
    this.isFree = !this.isFree;

  }

  private filterFlats(criteria: string): IFlat[] {
    criteria = criteria.toLowerCase();
    const list = this.flatList.filter(
      (flat: IFlat) => flat.flatName.toLocaleLowerCase().indexOf(criteria) != -1
    );
    return list;
  }
}
