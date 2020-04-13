import {MedicamentI} from '../../interfaces/medicament-interface';

export const medicamentsMock: MedicamentI[] = [
    {
        id: 1,
        title: "Анальгин",
        issueDate: "Mon Apr 13 2018 22:30:16 GMT+0300 (Moscow Standard Time)",
        expiryDate: "Mon Apr 13 2021 22:30:16 GMT+0300 (Moscow Standard Time)",
        boxId: 1,
        impactTypes: [
            {
                id: 1,
                title: 'Обезболивающее'
            }
        ],
        targetGroups: [
            {
                id: 2,
                title: "От горла"
            },
            {
                id: 3,
                title: "От живота"
            }
        ]
    },
    {
        id: 2,
        title: "Цетрин",
        issueDate: "Mon Apr 13 2017 22:30:16 GMT+0300 (Moscow Standard Time)",
        expiryDate: "Mon Apr 13 2019 22:30:16 GMT+0300 (Moscow Standard Time)",
        boxId: 3,
        impactTypes: [
            {
                id: 5,
                title: 'Антигистаминное'
            }
        ],
        targetGroups: [
            {
                id: 4,
                title: "От аллергии"
            }
        ]
    },
    {
        id: 3,
        title: "Зеленка",
        issueDate: "Mon Apr 13 2017 22:30:16 GMT+0300 (Moscow Standard Time)",
        expiryDate: "Mon Apr 23 2020 22:30:16 GMT+0300 (Moscow Standard Time)",
        boxId: 2,
        impactTypes: [
            {
                id: 3,
                title: 'Антисептик'
            },
            {
                id: 6,
                title: 'Перевязочные'
            }
        ],
        targetGroups: [
            {
                id: 5,
                title: "Ожоги, порезы"
            }
        ]
    },
    {
        id: 4,
        title: "Доктор Мом",
        issueDate: "Mon Apr 13 2020 22:30:16 GMT+0300 (Moscow Standard Time)",
        expiryDate: "Mon Apr 13 2024 22:30:16 GMT+0300 (Moscow Standard Time)",
        boxId: 1,
        impactTypes: [
            {
                id: 7,
                title: 'Отхаркивающее'
            }
        ],
        targetGroups: [
            {
                id: 2,
                title: "От горла"
            },
            {
                id: 5,
                title: "От кашля"
            }
        ]
    },
    {
        id: 5,
        title: "Йод",
        issueDate: "Mon Apr 13 2015 22:30:16 GMT+0300 (Moscow Standard Time)",
        expiryDate: "Mon Apr 16 2020 22:30:16 GMT+0300 (Moscow Standard Time)",
        boxId: 2,
        impactTypes: [
            {
                id: 3,
                title: 'Антисептик'
            },
            {
                id: 6,
                title: 'Перевязочные'
            }
        ],
        targetGroups: [
            {
                id: 5,
                title: "Ожоги, порезы"
            }
        ]
    },
]