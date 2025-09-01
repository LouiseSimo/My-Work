import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../shared/shared-imports';
import { MATERIALS_IMPORTS } from '../../../../shared/materials-imports';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FlatListService } from '../../../../shared/services/flat-list-service';
import { IFlat } from '../../../../shared/models/flat';

@Component({
  standalone: true,
  selector: 'app-flat-edit',
  imports: [
    ReactiveFormsModule,
    SHARED_IMPORTS,
    MATERIALS_IMPORTS
  ],
  templateUrl: './flat-edit.html',
  // styleUrl: './flat-edit.css'
})
export class FlatEdit {

  flatForm!: FormGroup;
  flat!:IFlat;
  pageTitle!:string


  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,//service that will help us capture the curent route extract the value we need from it 
    private flatListService: FlatListService
  ) { }

  ngOnInit(): void {
    // flatForm est l'instance du model de notre formulaire constitué des differents champs qu'il contiendra ainsi que leur validators 
    //NB tous les champs dont les valeurs auront besoin d'être enregistré doivent enregistrer la valeur de leur formControlName dans ce modele 

    this.flatForm = this.fb.group({
      flatName: ['', Validators.required],
      price: [' ',Validators.required],
      description: [''],
      isFree: ['false'],
    });


    //Capture de l'Identifiant de l'appartement qui arrive and correspondingly l'affichage
    // Nb: cette partie de code s'execute directement au chargement de la page d'edition d'un flat.
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;

      console.log('received flat id ', id)
      this.getSelectedFlat(id);
      // la fonction getSelectedFlat() se charge de recuperer un flat à partir de son Id qui a ete capture a l'aide du service 
    

    })
  }

  public saveFlat() {
    console.log("Element submitted ")
    console.log(this.flatForm.value)

    // if (this.flatForm.valid) {
    //   const updatedFlat: IFlat = {
    //     ...this.flatForm.value,
    //     id: this.flatId,
    //   };
    // console.log('Updated Flat:', updatedFlat);
    //   // TODO: Send updatedFlat to your backend service
  }

  public getSelectedFlat(id: number) {
    this.flatListService.getFlatById(id).subscribe((flat) => {
      console.log('Flat values correspondind to the received id', flat);
      console.table(flat)
      
      this.displayFlat(flat as IFlat);
    })
  }

  //displayFlat permet d'afficher le flat reçu dans la page d'edition. 
  public displayFlat(flat:IFlat):void{
    this.flat = flat;
    if(this.flat.id ===0){
      this.pageTitle = 'Create a new flat';
    }else{
      this.pageTitle ='Modify Flat '+this.flat.flatName;
    }
    //patchValue permet de donner les valeurs aux inputs d'un formulaire en passant par leur FormContolName
    this.flatForm.patchValue({
     flatName: this.flat.flatName,
     price: this.flat.price,
     description: this.flat.description
     
    });
  }

  public deleteFlat() { }

}
