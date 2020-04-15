import {TargetGroupI} from './target-group-interface';

export interface BoxI {
    id: number;
    title: string;
    description?: string;
    img?: string;
    medicamentsId?: number[];
    targetGroups?: TargetGroupI[];
}
export interface NewBoxI extends BoxI {
    newImg?: File;
}
