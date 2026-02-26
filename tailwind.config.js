const colors = require('tailwindcss/colors');

// 自定义灰色调色板 - 深色主题优化
const gray = {
  50: 'hsl(210, 40%, 98%)',
  100: 'hsl(210, 40%, 96%)',
  200: 'hsl(210, 40%, 90%)',
  300: 'hsl(210, 27%, 70%)',
  400: 'hsl(210, 22%, 49%)',
  500: 'hsl(210, 16%, 40%)',
  600: 'hsl(210, 14%, 33%)',
  700: 'hsl(210, 11%, 25%)',
  800: 'hsl(210, 10%, 18%)',
  900: 'hsl(210, 14%, 12%)',
};

// 极光紫蓝色调色板
const purple = {
  50: 'hsl(266, 97%, 95%)',
  100: 'hsl(266, 95%, 89%)',
  200: 'hsl(266, 94%, 78%)',
  300: 'hsl(266, 93%, 65%)',
  400: 'hsl(266, 91%, 51%)',
  500: 'hsl(266, 92%, 45%)',
  600: 'hsl(266, 90%, 38%)',
  700: 'hsl(266, 89%, 31%)',
  800: 'hsl(266, 87%, 26%)',
  900: 'hsl(266, 84%, 22%)',
};

const cyan = {
  50: 'hsl(188, 97%, 95%)',
  100: 'hsl(188, 95%, 89%)',
  200: 'hsl(188, 94%, 78%)',
  300: 'hsl(188, 93%, 65%)',
  400: 'hsl(188, 91%, 51%)',
  500: 'hsl(188, 92%, 45%)',
  600: 'hsl(188, 90%, 38%)',
  700: 'hsl(188, 89%, 31%)',
  800: 'hsl(188, 87%, 26%)',
  900: 'hsl(188, 84%, 22%)',
};

module.exports = {
  content: [
    './resources/scripts/**/*.{js,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', '"IBM Plex Sans"', '"Roboto"', 'system-ui', 'sans-serif'],
        header: ['"Inter"', '"IBM Plex Sans"', '"Roboto"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        black: '#131a20',
        // 主色调 - 紫色渐变
        primary: purple,
        purple: purple,
        cyan: cyan,
        gray: gray,
        neutral: gray,
        // 语义化色彩
        success: colors.emerald,
        error: colors.red,
        warning: colors.amber,
        // 极光渐变色彩
        aurora: {
          purple: '#8B5CF6',
          blue: '#22D3EE',
          pink: '#EC4899',
          indigo: '#6366F1',
          cyan: '#06B6D4',
          violet: '#A78BFA',
        },
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      transitionDuration: {
        250: '250ms',
        300: '300ms',
        500: '500ms',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'ease-in-out-expo': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        // 玻璃态阴影
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-light': '0 4px 16px 0 rgba(31, 38, 135, 0.2)',
        // 发光效果
        glow: '0 0 15px rgba(139, 92, 246, 0.5)',
        'glow-cyan': '0 0 15px rgba(34, 211, 238, 0.5)',
        'glow-purple': '0 0 15px rgba(139, 92, 246, 0.5)',
      },
      backgroundImage: {
        'gradient-aurora': 'linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%)',
        'gradient-aurora-dark': 'linear-gradient(135deg, #6D28D9 0%, #0891B2 100%)',
        'gradient-purple-cyan': 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
        'gradient-pink-blue': 'linear-gradient(135deg, #EC4899 0%, #3B82F6 100%)',
        'gradient-violet-indigo': 'linear-gradient(135deg, #A78BFA 0%, #6366F1 100%)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
