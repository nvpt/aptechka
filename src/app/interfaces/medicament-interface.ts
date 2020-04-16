import {ImpactTypeI} from './impact-type-interface';
import {TargetGroupI} from './target-group-interface';

export interface MedicamentI {
    id: number;
    title: string;
    issueDate: Date | string;
    expiryDate: Date | string;
    impactTypes?: ImpactTypeI[];
    boxId?: number;
    targetGroups?: TargetGroupI[];
}
