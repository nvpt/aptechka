import {Injectable} from '@angular/core';
import {MedicamentI} from '../interfaces/medicament-interface';
import {Observable, of} from 'rxjs';
import {BoxesService} from './boxes.service';

@Injectable({
    providedIn: 'root'
})
export class MedicamentsService {
    medicaments: MedicamentI[] = [
        {
            id: 1,
            title: 'Анальгин',
            issueDate: 'Mon Apr 13 2018 22:30:16 GMT+0300 (Moscow Standard Time)',
            expiryDate: 'Mon Apr 13 2021 22:30:16 GMT+0300 (Moscow Standard Time)',
            boxId: 1,
            impactTypes: [
                {
                    id: 1,
                    title: 'Обезболивающее'
                }
            ],
            targetGroups: [
                {
                    id: 2,
                    title: 'От горла'
                },
                {
                    id: 3,
                    title: 'От живота'
                }
            ]
        },
        {
            id: 2,
            title: 'Цетрин',
            issueDate: 'Mon Apr 13 2017 22:30:16 GMT+0300 (Moscow Standard Time)',
            expiryDate: 'Mon Apr 13 2019 22:30:16 GMT+0300 (Moscow Standard Time)',
            boxId: 3,
            impactTypes: [
                {
                    id: 5,
                    title: 'Антигистаминное'
                }
            ],
            targetGroups: [
                {
                    id: 4,
                    title: 'От аллергии'
                }
            ]
        },
        {
            id: 3,
            title: 'Зелёнка',
            issueDate: 'Mon Apr 13 2017 22:30:16 GMT+0300 (Moscow Standard Time)',
            expiryDate: 'Mon Apr 23 2020 22:30:16 GMT+0300 (Moscow Standard Time)',
            boxId: 4,
            impactTypes: [
                {
                    id: 3,
                    title: 'Антисептик'
                },
                {
                    id: 6,
                    title: 'Перевязочные'
                }
            ],
            targetGroups: [
                {
                    id: 5,
                    title: 'Ожоги, порезы'
                }
            ]
        },
        {
            id: 4,
            title: 'Доктор Мом',
            issueDate: 'Mon Apr 13 2020 22:30:16 GMT+0300 (Moscow Standard Time)',
            expiryDate: 'Mon Apr 13 2024 22:30:16 GMT+0300 (Moscow Standard Time)',
            boxId: 2,
            impactTypes: [
                {
                    id: 7,
                    title: 'Отхаркивающее'
                }
            ],
            targetGroups: [
                {
                    id: 2,
                    title: 'От горла'
                },
                {
                    id: 6,
                    title: 'От кашля'
                }
            ]
        },
        {
            id: 5,
            title: 'Йод',
            issueDate: 'Mon Apr 13 2015 22:30:16 GMT+0300 (Moscow Standard Time)',
            expiryDate: 'Mon Apr 16 2020 22:30:16 GMT+0300 (Moscow Standard Time)',
            boxId: 4,
            impactTypes: [
                {
                    id: 3,
                    title: 'Антисептик'
                },
                {
                    id: 6,
                    title: 'Перевязочные'
                }
            ],
            targetGroups: [
                {
                    id: 5,
                    title: 'Ожоги, порезы'
                }
            ]
        },
        {
            id: 6,
            title: 'Димедрол',
            issueDate: 'Mon Jun 09 2017 22:30:16 GMT+0300 (Moscow Standard Time)',
            expiryDate: 'Mon Apr 16 2022 22:30:16 GMT+0300 (Moscow Standard Time)',
            boxId: 4,
            impactTypes: [
                {
                    id: 1,
                    title: 'Обезболивающее'
                }
            ],
            targetGroups: [
                {
                    id: 7,
                    title: 'От сердца'
                }
            ]
        }
    ];

    constructor(private boxesService: BoxesService) {}

    getMedicamentById(id: number): Observable<MedicamentI> {
        return of(this.medicaments.find((medicament) => medicament.id === Number(id)));
    }

    addMedicament(medicament: MedicamentI): Observable<void> {
        this.medicaments.unshift(medicament);
        return of(null);
    }

    deleteMedicament(medId: number): Observable<void> {
        this.medicaments = [...this.medicaments.filter((medicament: MedicamentI) => medicament.id !== medId)];
        this.boxesService.boxes.forEach((box) => {
            box.medicaments = [...box.medicaments.filter((med) => med.id !== medId)];
        });
        return of(null);
    }

    updateMedicament(medicament: MedicamentI): Observable<void> {
        this.medicaments.forEach((medicamentItem, i) => {
            if (medicamentItem.id === medicament.id) {
                this.medicaments[i] = {
                    ...medicamentItem,
                    ...medicament
                };
            }
        });
        return of(null);
    }
}
