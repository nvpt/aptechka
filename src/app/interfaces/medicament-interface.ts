import {ImpactTypeI} from './impact-type-interface';
import {TargetGroupI} from './target-group-interface';

export interface MedicamentI {
    id: number;
    title: string;
    issueDate: Date | string;
    expiryDate: Date | string;
    boxId: number;
    impactTypes?: ImpactTypeI[];
    targetGroups?: TargetGroupI[];
}
