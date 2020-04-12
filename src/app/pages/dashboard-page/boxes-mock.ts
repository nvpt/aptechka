import {BoxI} from '../../interfaces/box-interface';

export const boxesMock: BoxI[] = [
    {
        title: 'Перебрать',
        place: 'Шкаф в зале',
        description: 'Зелёная коробка',
        total: 12,
        onTheVerge: 3,
        overdue: 1,
        img: '../../../assets/img/boxes/green-box.jpg',
        groups: ['Частое']
    },
    {
        title: 'Голова-живот',
        place: 'Шкаф в зале',
        description: 'Коричневая коробка из-под обуви',
        total: 4,
        onTheVerge: 1,
        img: '../../../assets/img/boxes/head-stomach.jpg',
        groups: ['Голова', 'Живот'],
    },
    {
        title: 'Остальное',
        place: 'Шкаф на кухне',
        description: 'Коробка из-под прибора',
        total: 0,
        img: '../../../assets/img/boxes/rest.jpg',
        groups: ['Редкое']
    },
];