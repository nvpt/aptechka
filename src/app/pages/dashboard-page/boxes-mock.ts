import {BoxI} from '../../interfaces/box-interface';

export const boxesMock: BoxI[] = [
    {
        title: 'Перебрать',
        place: 'Шкаф в зале',
        description: 'Зелёная коробка',
        medicaments: [1,2,3,4,5,6,7,8],
        img: '../../../assets/img/boxes/green-box.jpg',
        groups: ['Частое']
    },
    {
        title: 'Голова-живот',
        place: 'Шкаф в зале',
        description: 'Коричневая коробка из-под обуви',
        medicaments: [1,2,3,4],
        img: '../../../assets/img/boxes/head-stomach.jpg',
        groups: ['Голова', 'Живот'],
    },
    {
        title: 'Остальное',
        place: 'Шкаф на кухне',
        description: 'Коробка из-под прибора',
        medicaments: [],
        img: '../../../assets/img/boxes/rest.jpg',
        groups: ['Редкое']
    },
];