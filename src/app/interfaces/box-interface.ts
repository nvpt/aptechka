import {TargetGroupI} from './target-group-interface';

export interface BoxI {
    id: number;
    title: string;
    description?: string;
    img?: string;
    medicamentsIds?: number[];
    targetGroups?: TargetGroupI[];
}
export interface NewBoxI extends BoxI {
    imgData?: File;
}
