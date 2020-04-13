export interface MedicamentI {
    title: string;
    issueDate: Date | string;
    expiryDate: Date | string;
    placeId?: number;
    impactTypeId?: number;
    targetGroupsId?: number[];
}
