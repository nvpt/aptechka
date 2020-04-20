import {ImpactTypeI} from './impact-type-interface';
import {TargetGroupI} from './target-group-interface';

export interface MedicamentI {
    id: number;
    title: string;
    description?: string;
    issueDate: Date | string;
    expiryDate: Date | string;
    img?: string;
    imgData?: File;
    impactTypes?: ImpactTypeI[];
    targetGroups?: TargetGroupI[];
    boxId?: number;
}
