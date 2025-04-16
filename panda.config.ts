import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        base: '0px',
        xs: '440px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
      tokens: {
        colors: {
          primary: { value: '#C2E1F8' },
          font: { value: '#201B50' },
        },
      },
      semanticTokens: {
        sizes: {
          container: {
            value: {
              base: '360px',
              xs: '430px',
              sm: '610px',
              md: '740px',
              lg: '954px',
              xl: '1080px',
              '2xl': '1240px',
              '3xl': '1640px',
            },
          },
          logo: {
            value: {
              base: '50px',
              sm: '70px',
              md: '80px',
              lg: '100px',
              xl: '120px',
              '2xl': '140px',
              '3xl': '160px',
            },
          },
        },
        fontSizes: {
          title: {
            value: {
              base: '16px',
              xs: '16px',
              sm: '24px',
              md: '30px',
              lg: '34px',
              xl: '40px',
              '2xl': '45px',
              '3xl': '50px',
            },
          },
          subtitle: {
            value: {
              base: '12px',
              sm: '18px',
              md: '20px',
              lg: '24px',
              xl: '28px',
              '2xl': '32px',
              '3xl': '36px',
            },
          },
          small: {
            value: {
              base: '8px',
              sm: '10px',
              md: '11px',
              lg: '12px',
              xl: '14px',
              '2xl': '16px',
              '3xl': '18px',
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: '/src/styled-system',
});
