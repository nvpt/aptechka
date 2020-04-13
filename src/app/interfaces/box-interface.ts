import {MedicamentI} from './medicament-interface';
//todo *** in progress
export interface BoxI {
    title: string;
    place?: string;
    description?: string;
    img?: string;
    groups?: string[];
    medicaments?: MedicamentI[];
    total?: number;
    onTheVerge?: number;
    overdue?: number;
    alert?: number;
}
