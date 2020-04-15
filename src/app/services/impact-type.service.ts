import {Injectable} from '@angular/core';
import {ImpactTypeI} from '../interfaces/impact-type-interface';

@Injectable({
    providedIn: 'root'
})
export class ImpactTypeService {
    impactTypes: ImpactTypeI[] = [
        {
            id: 1,
            title: 'Обезболивающее'
        },
        {
            id: 2,
            title: 'Слабительное'
        },
        {
            id: 3,
            title: 'Антисептик'
        },
        {
            id: 4,
            title: 'Успокоительное'
        },
        {
            id: 5,
            title: 'Антигистаминное'
        },
        {
            id: 6,
            title: 'Перевязочные'
        },
        {
            id: 7,
            title: 'Отхаркивающее'
        }
    ];

    constructor() {
    }

    getImpactTypes(): ImpactTypeI[] {
        return this.impactTypes;
    }

    addImpactType(title: string): void {
        const newImpactType: ImpactTypeI = {
            id: new Date().getTime(),
            title
        };
        this.impactTypes.unshift(newImpactType);
    }

    deleteImpactType(impactType: ImpactTypeI): void {
        console.log('55 >>> impactType: ', impactType);
        let res = [...this.impactTypes.filter(element => (element.id !== impactType.id))];
        console.log('57 >>> res: ', res);
        
        this.impactTypes = [...this.impactTypes.filter(element => (element.id !== impactType.id))];
    }
}
