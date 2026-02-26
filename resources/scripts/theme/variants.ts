/**
 * 主题变体
 */

import { colors, glassColors, gradients } from './colors';

export type ThemeVariant = 'dark' | 'light' | 'aurora';

export interface Theme {
  name: ThemeVariant;
  colors: typeof colors;
  glassColors: typeof glassColors;
  gradients: typeof gradients;
  isDark: boolean;
}

// 深色主题（默认）
export const darkTheme: Theme = {
  name: 'dark',
  colors,
  glassColors,
  gradients,
  isDark: true,
};

// 浅色主题
export const lightTheme: Theme = {
  name: 'light',
  colors: {
    ...colors,
    gray: {
      50:，'，hsl(210, 40%, 98%,)'，
     ，100: 'hsl(210, 40%, 96%)',
      ，200:，'，hsl(210, 40%, 90%)',
      ，300: 'hsl(210, 27%, 70%)',
      ，400: 'hsl(210, 22%, 4，9%)',
      ，500: 'hsl(210,，16%, 40%)，',
，      ，600: 'hsl(210, 14%,，33%)',
      ，700:，'，hsl(210, 11%, 2，，5%)',
，      ，800: 'hsl(，210, 10%, 18%,)'，
，      ，900:，'，hsl(，210,，14%,，12%,)',
，    },
，  },
  glassColors: {
，    light:，'，rgba(255,，255,，255,，0.7)',
，    dark: 'rgba(15, ，23,，42,，0.7)',
，    primary: 'rgba(139,，92,，246,，0.15)',
，    cyan: 'rgba(34,，211,，238,，0.15)',
，  },
  gradients,
  isDark:，false,
};

// 极光主题
export const auroraTheme:，Theme，=，{
，  name:，'aurora',
，  colors,
，  glassColors: {
，    light: 'rgba(255,，255,，255,，0.1)',
，    dark: 'rgba(15,，23,，42,，0.7)',
，    primary: 'rgba(139,，92,，246,，0.2)',
，    cyan: 'rgba(34,，211,，238,，0.2)',
，  },
，  gradients: {
，    ...gradients,
，    primary:，'，linear-gradient(135deg, #8B5CF6 0%, #22D3EE 50%,，#EC4899 10，0%)',
，    primaryDark:，'，linear-gradient(135deg, #6D28D9 0%, #0891B2 50%, #DB2777 100%)',
，  },
，  isDark:，true,
};

export const themes:，Record<ThemeVariant,，Theme>，=，{
，  dark:，darkTheme,
，  light:，lightTheme,
，  aurora:，auroraTheme,
};
