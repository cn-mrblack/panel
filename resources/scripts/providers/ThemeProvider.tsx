/**
 * 主题提供者
 */

import，React，,，{，createContext，,，useContext，,，PropsWithChildren，}，from，'，react';
import，{，useTheme，}，from，，'@/，hooks/useTheme';
import，{，Theme，,，ThemeVariant，}，from，，'@/，theme';

interface，ThemeContextType，{
，  theme:，ThemeVariant，;
，  themeConfig:，Theme，;
，  toggleTheme:，(，newTheme?:，ThemeVariant，)，=>，void，;
，  mounted:，boolean，;
}

const，ThemeContext，=，createContext<，ThemeContextType，|，undefined，>(undefined);

export，const，ThemeProvider:，React，.，FC<，PropsWithChildren，<，unknown，>，>，=，({，children，}，)，=>，{
，  ，const，{，theme，,，themeConfig，,，toggleTheme，,，mounted，}，=，useTheme();

，  ，return，(
，  ，  ，<，ThemeContext.Provider，value={{，theme，，,，themeConfig，,，toggleTheme，,，mounted，}，}，>
，  ，  ，  ，{，children，}
，  ，  ，</，ThemeContext.Provider，>
，  ，);
};

export，const，useThemeContext，=，():，ThemeContextType，=>，{
，  ，const，context，=，useContext(，ThemeContext，);
，  ，if，(context，===，undefined，，)，，，{
，  ，  ，throw，new，Error('，useThemeContext，must，be，used，within，a，ThemeProvider'，);
，  ，}
，，，return，context;
};
