import {MedicamentI} from '../../interfaces/medicament-interface';

export const medicamentsMock: MedicamentI[] = [
    {
        title: "Анальгин",
        issueDate: "",
        expiryDate: "",
        impactTypesId: [2],
        placeId: 1,
        targetGroupsId: [1,2,5]
    },
    {
        title: "Цетрин",
        issueDate: "",
        expiryDate: "",
        impactTypesId: [3],
        placeId: 2,
        targetGroupsId: [1,2,5]
    },
    {
        title: "Зеленка",
        issueDate: "",
        expiryDate: "",
        impactTypesId: [1, 2],
        placeId: 3,
        targetGroupsId: [2,4]
    },
    {
        title: "Доктор Мом",
        issueDate: "",
        expiryDate: "",
        impactTypesId: [1],
        placeId: 1,
        targetGroupsId: [5]
    }
]