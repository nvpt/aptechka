import {Injectable} from '@angular/core';
import {BoxI} from '../interfaces/box-interface';
import {Observable, of} from 'rxjs';
import {MedicamentI} from '../interfaces/medicament-interface';

@Injectable({
    providedIn: 'root'
})
export class BoxesService {
    boxes: BoxI[] = [
        {
            id: 1,
            title: 'Основное',
            description: 'Зелёная коробка',
            img: '../../../assets/img/boxes/green-box.jpg',
            imgData: null,
            targetGroups: [
                {
                    id: 1,
                    title: 'От головы'
                },
                {
                    id: 3,
                    title: 'От живота'
                }
            ],
            medicamentsIds: [1, 4]
        },
        {
            id: 2,
            title: 'При простуде',
            description: 'Коричневая коробка из-под обуви',
            img: '../../../assets/img/boxes/head-stomach.jpg',
            imgData: null,

            targetGroups: [
                {
                    id: 2,
                    title: 'От горла'
                }
            ],
            medicamentsIds: [6]
        },
        {
            id: 3,
            title: 'От аллергии',
            description: 'Без коробки, в моем одтеле',
            img: '../../../assets/img/boxes/allergy.jpg',
            imgData: null,

            targetGroups: [
                {
                    id: 4,
                    title: 'От аллергии'
                }
            ],
            medicamentsIds: [2]
        },
        {
            id: 4,
            title: 'Скорая помощь',
            description: 'Коробка из-под прибора',
            img: '../../../assets/img/boxes/rest.jpg',
            imgData: null,

            targetGroups: [
                {
                    id: 5,
                    title: 'Ожоги, порезы'
                }
            ],
            medicamentsIds: [3, 5]
        }
    ];

    constructor() {}

    getBoxes(): BoxI[] {
        return this.boxes;
    }

    getBoxById(id: number): Observable<BoxI> {
        return of(this.boxes.find((box) => box.id === Number(id)));
    }

    addBox(box: BoxI): Observable<void> {
        this.boxes.unshift(box);
        return of(null);
    }

    updateBox(box: BoxI): Observable<void> {
        this.boxes.forEach((boxItem, i) => {
            if (boxItem.id === box.id) {
                this.boxes[i] = {
                    ...boxItem,
                    ...box
                };
            }
        });
        return of(null);
    }

    deleteBox(deletedBox): void {
        this.boxes = [...this.boxes.filter((box: BoxI) => box.id !== deletedBox.id)];
    }

    replaceMedicament(medicament: MedicamentI, box: BoxI): void {
        this.boxes.forEach((boxItem) => {
            if (boxItem.id === box.id) {
                boxItem.medicamentsIds.unshift(medicament.id);
            } else {
                boxItem.medicamentsIds = [...boxItem.medicamentsIds.filter((id) => id !== medicament.id)];
            }
        });
    }
}
