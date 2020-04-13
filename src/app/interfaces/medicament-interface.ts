export interface MedicamentI {
    title: string;
    issueDate: Date | string;
    expiryDate: Date | string;
    placeId?: number;
    impactTypesId?: number[];
    targetGroupsId?: number[];
}
