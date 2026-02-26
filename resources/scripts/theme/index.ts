/**
 * 主题系统入口文件
 */

import { colors } from './colors';
import { typography } from './typography';
import { shadows } from './shadows';
import { spacing } from './spacing';
import { components } from './components';
import { themes, ThemeVariant, Theme } from './variants';
import { breakpoints, breakpoint } from './breakpoints';

export {
    colors,
    typography,
    shadows,
    spacing,
    components,
    themes,
    breakpoints,
    breakpoint,
};

export type {
    ThemeVariant,
    Theme,
};

// 默认主题
export const DEFAULT_THEME: ThemeVariant = 'dark';

// 主题存储键
export const THEME_STORAGE_KEY: string = 'pterodactyl:theme';
