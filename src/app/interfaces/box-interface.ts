import {TargetGroupI} from './target-group-interface';

export interface BoxI {
    id: number;
    title: string;
    description?: string;
    img?: string;
    imgData?: File;
    medicaments?: {
        id: number;
        title: string;
    }[];
    targetGroups?: TargetGroupI[];
}
