import {MedicamentI} from './medicament-interface';
import {TargetGroupI} from './target-group-interface';
import {PlaceI} from './place-interface';
//todo *** in progress
export interface BoxI {
    title: string;
    place?: PlaceI;
    description?: string;
    img?: string;
    targetGroups?: TargetGroupI[];

    medicamentsId?: number[];
    total?: number;
    onTheVerge?: number;
    overdue?: number;
    alert?: number;
}
export interface NewBoxI extends BoxI {
    newImg?: File;
}
