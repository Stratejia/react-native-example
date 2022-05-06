const sizes = {
  xxs: '10px',
  xs: '12px',
  s: '14px',
  m: '16px',
  l: '24px',
  xl: '36px',
  xxl: '48px',
};

const weights = {
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  bolder: '800',
};

// https://material.io/design/color/text-legibility.html#text-backgrounds
const emphasis = {
  high: 0.87,
  medium: 0.6,
  disabled: 0.38,
};

const fonts = { sizes, weights, emphasis };

export default fonts;
