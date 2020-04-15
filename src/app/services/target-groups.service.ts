import {Injectable} from '@angular/core';
import {ImpactTypeI} from '../interfaces/impact-type-interface';
import {TargetGroupI} from '../interfaces/target-group-interface';

@Injectable({
    providedIn: 'root'
})
export class TargetGroupsService {
    targetGroups: TargetGroupI[] = [
        {
            id: 1,
            title: 'От головы'
        },
        {
            id: 2,
            title: 'От горла'
        },
        {
            id: 3,
            title: 'От живота'
        },
        {
            id: 4,
            title: 'От аллергии'
        },
        {
            id: 5,
            title: 'Ожоги, порезы'
        },
        {
            id: 5,
            title: 'От кашля'
        },
    ];

    constructor() {
    }

    getTargetGroups(): ImpactTypeI[] {
        return this.targetGroups;
    }

    addTargetGroup(title: string): void {
        const newImpactType: ImpactTypeI = {
            id: new Date().getTime(),
            title
        };
        this.targetGroups.unshift(newImpactType);
    }

    deleteTargetGroup(targetGroup: ImpactTypeI): void {
        this.targetGroups = [...this.targetGroups.filter(element => (element.id !== targetGroup.id))];
    }
}
