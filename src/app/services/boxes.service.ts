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
            img: './assets/img/boxes/gr-box.jpg',
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
            medicaments: [
                {
                    id: 1,
                    title: 'Анальгин'
                },
                {
                    id: 4,
                    title: 'Доктор Мом'
                },
            ]
        },
        {
            id: 2,
            title: 'При простуде',
            description: 'В зале, в шкафу, средняя полка',
            img: './assets/img/boxes/rest.jpg',
            imgData: null,

            targetGroups: [
                {
                    id: 2,
                    title: 'От горла'
                }
            ],
            medicaments: [
                {
                    id: 6,
                    title: 'Димедрол'
                },
            ]
        },
        {
            id: 3,
            title: 'От аллергии',
            description: 'На шкафу в прихожей',
            img: './assets/img/boxes/big-box.jpg',
            imgData: null,

            targetGroups: [
                {
                    id: 4,
                    title: 'От аллергии'
                }
            ],
            medicaments: [
                {
                    id: 2,
                    title: 'Цетрин'
                },
            ]
        },
        {
            id: 4,
            title: 'Скорая помощь',
            description: 'На кухне в шкафу',
            img: './assets/img/boxes/new.jpg',
            imgData: null,

            targetGroups: [
                {
                    id: 5,
                    title: 'Ожоги, порезы'
                }
            ],
            medicaments: [
                {
                    id: 3,
                    title: 'Зелёнка'
                },
                {
                    id: 5,
                    title: 'Йод'
                },
            ]
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

    deleteBox(boxId: number): Observable<number> {
        this.boxes = [...this.boxes.filter((box: BoxI) => box.id !== boxId)];
        return of(boxId)
    }

    replaceMedicament(medicament: MedicamentI, box: BoxI): void {
        this.boxes.forEach((boxItem) => {
            if (boxItem.id === box.id) {
                boxItem.medicaments.unshift({id: medicament.id, title: medicament.title});
            } else {
                boxItem.medicaments = [...boxItem.medicaments.filter((med) => med.id !== medicament.id)];
            }
        });
    }
}
