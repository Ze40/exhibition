import { cva } from '../styled-system/css';

export const title = cva({
  base: {
    fontSize: 'title',
    color: 'font',
    fontWeight: '600',
  },
  variants: {
    size: {
      sub: {
        fontSize: 'subtitle',
        fontWeight: '500',
      },
    },
  },
});
