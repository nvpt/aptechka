import {BoxI} from '../../interfaces/box-interface';

export const boxesMock: BoxI[] = [
    {
        id: 1,
        title: 'Основное',
        description: 'Зелёная коробка',
        img: '../../../assets/img/boxes/green-box.jpg',
        targetGroups: [
            {
                id: 1,
                title: "От головы"
            },
            {
                id: 3,
                title: "От живота"
            }
        ],


        total: 12,
        onTheVerge: 3,
        overdue: 1,
    },
    {
        id: 2,
        title: 'При простуте',
        description: 'Коричневая коробка из-под обуви',
        img: '../../../assets/img/boxes/head-stomach.jpg',
        targetGroups: [
            {
                id: 2,
                title: "От горла"
            },
        ],

        total: 4,
        onTheVerge: 1,
    },
    {
        id: 3,
        title: 'От аллергии',
        description: 'Без коробки, в моем одтеле',
        img: '../../../assets/img/boxes/allergy.jpg',
        targetGroups: [
            {
                id: 4,
                title: "От аллергии"
            },
        ],

        total: 5,
        onTheVerge: 0,
    },
    {
        id: 4,
        title: 'Скорая помощь',
        description: 'Коробка из-под прибора',
        img: '../../../assets/img/boxes/rest.jpg',
        targetGroups: [
            {
                id: 5,
                title: "Ожоги, порезы"
            },
        ],

        total: 0,
    },
];