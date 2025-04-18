export interface IWork {
  id: number;
  img?: string[] | string; // остается опциональным
  name: string;
  authors: string[];
}

const src = '/assets/works/';

export const worksList: IWork[] = [
  {
    id: 1,
    name: 'Программирование с использованием модели акторов на платформе Akka: концепции, паттерны и примеры реализации',
    authors: [
      'Шиян В.И.',
      'Вишняков Д.И.',
      'Власов С.М.',
      'Костров А.А.',
      'Тузовский Е.Е.',
      'Щербаков М.И.',
    ],
    img: `${src}2.png`,
  },
  {
    id: 2,
    name: 'Fragile Reflection',
    authors: ['Базилевский Даниил', 'Нагалевский Артём'],
    img: [
      `${src}6-1.png`,
      `${src}6-2.png`,
      `${src}6-3.png`,
      `${src}6-4.png`,
      `${src}6-5.png`,
      `${src}6-6.png`,
      `${src}6-7.png`,
    ],
  },
  {
    id: 3,
    name: 'Искусственные иммунные системы в криптоанализе и решении диофантовых уравнений: новый подход к защите информации',
    img: `${src}1.png`,
    authors: [
      'Шиян В.И.',
      'Аносова Ю.А.',
      'Дворников Н.О.',
      'Кокоровец М.Е.',
      'Кривошей Ю.Д.',
      'Самусев Д.С.',
      ' Щербина М.С.',
    ],
  },
  {
    id: 4,
    name: 'Мобильное приложение для проекта «Агрегатор цитат преподавателей КубГУ»',
    authors: ['Эзри Артём', 'Команда подгруппы 46/1'],
    img: [
      `${src}4-1.png`,
      `${src}4-2.png`,
      `${src}4-3.png`,
      `${src}4-4.jpg`,
      `${src}4-5.jpg`,
      `${src}4-6.png`,
    ],
  },
  {
    id: 5,
    name: 'Акторная модель в языке программирования Elixir: основы и применение',
    authors: [
      'Шиян В.И.',
      'Кузнецов А.М.',
      'Литвиненко П.Н.',
      'Полтавская А.А.',
      'Прохоров М.А.',
      'Степуленко К.А.',
      'Токарева Д.С.',
    ],
    img: `${src}3.png`,
  },
  {
    id: 6,
    name: 'Разработка системы реагирования на отклонение от установленных цен в магазинах Донецкой Народной Республики',
    authors: ['Н.Р. Гордиевский', 'Е.М. Лаштабега', 'Н.М. Сеидова'],
    img: [`${src}7-1.jpg`, `${src}7-2.jpg`, `${src}7-3.jpg`, `${src}7-4.jpg`, `${src}7-5.jpg`],
  },
  {
    id: 7,
    name: 'Реализация алгоритма переноса стилей изображений с использованием Keras и TensorFlow',
    authors: ['Мирошниченко А.Н.', 'Шиян В.И.'],
    img: `${src}5.png`,
  },
];
