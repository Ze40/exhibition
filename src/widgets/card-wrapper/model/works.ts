export interface IWork {
  id: number;
  img?: string; // остается опциональным
  name: string;
}

export const worksList: IWork[] = [
  {
    id: 1,
    name: 'huiiii',
    img: '/assets/works/1bfBe00fckI.jpg', // предполагается, что изображения в public/assets/works/
  },
  {
    id: 2,
    name: 'huiiiiiiiiiiiiiii',
    // img не обязателен
  },
];
