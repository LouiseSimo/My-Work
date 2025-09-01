
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { IFlat } from '../models/flat';



export class FlatData implements InMemoryDbService {

    createDb(): Record<string, IFlat[]> {
        const flats: IFlat[] = [
            {
                id: 1,
                flatName: "F11111 without the api",
                description: "this is the F1 flat description",
                price: 900.00,
                imageUrl: "/img/hotel-room.jpg",
                isFree: true
            },
            {
                id: 2,
                flatName: "F2",
                description: "this is the F2 flat description",
                price: 800.00,
                imageUrl: "/img/hotel-room.jpg",
                isFree: false,
                // createdDate: "12/10/1999"
            },
            {
                id: 3,
                flatName: "F3",
                description: "this is the F3 flat description",
                price: 100000,
                imageUrl: "/img/the-interior.jpg",
                isFree: false
            },
            {
                id: 4,
                flatName: "F4",
                description: "this is the F4 flat description",
                price: 60000,
                imageUrl: "/img/window.jpg",
                isFree: true
            },
            {
                id: 4,
                flatName: "F4 with old id type ",
                description: "this is the F4 flat description",
                price: 60000,
                imageUrl: "/img/window.jpg",
                isFree: true
            }
        ]
        return {flats}
    }
}



