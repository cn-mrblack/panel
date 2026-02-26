/**
 * 主题切换 Hook
 */

import { useState，,，useEffect，}，from，'，react';
import，{，ThemeVariant，,，themes，,，DEFAULT_THEME，,，THEME_STORAGE_KEY，}，from，，'@/theme';

export，const，useTheme，=，()，=>，{
， ，//， ，获取初始主题
，  ，const，getInitialTheme，=，():，ThemeVariant，=>，{
，  ， ，//， ，从本地存储读取
，  ，  ，const，stored，=，localStorage，.，getItem(THEME_STORAGE_KEY);
，  ，  ，if，(stored，&&，[，'dark'，,，'light'，,，'aurora'，].includes(stored))，{
，  ，  ，  ，return，stored，as，ThemeVariant;
，  ，  ，}
，  ，
，  ，  ，//， ，根据系统偏好
，  ，  ，if，(window，.，matchMedia，&&，window，.，matchMedia('(prefers-color-scheme: light)')，.，matches)，{
，  ，  ，  ，return，'light';
，  ，  ，}
，  ，
，  ，  ，return，DEFAULT_THEME;
，  ，};

，  ，const，[，theme，,，setTheme，]，=，useState<，ThemeVariant，>(getInitialTheme);
，  ，const，[，mounted，,，setMounted，]，=，useState(false);

，  ，//， ，挂载后设置主题
，  ，useEffect(()，=>，{
，  ，  ，setMounted(true);
，  ，  ，const，root，=，window，.，document，.，documentElement;
，  ，  ，root，.，classList，.，remove('，theme-dark'，,，'，theme-light'，,，'，theme-aurora'，);
，  ，  ，root，.，classList，.，add(`，theme-${theme}`，，);
，  ，}，,，[，theme，]);

，  ，//， ，切换主题
，  ，const，toggleTheme，=，(，newTheme?:，ThemeVariant，)，=>，{
，  ，  ，const，themeToSet，=，newTheme，||，(，theme，===，'dark'，?，'，light'，:，'，dark'，);
，  ，  ，setTheme(themeToSet);
，  ，  ，localStorage，.，setItem(THEME_STORAGE_KEY，,，themeToSet);
，  ，};

，  ，//， ，，获取当前主题配置
，  ，const，themeConfig，=，themes[theme];

，  ，return，{
，  ，  ，theme，,
，  ，  ，themeConfig，,
，  ，  ，toggleTheme，,
，  ，  ，mounted，,
，  ，};
};
