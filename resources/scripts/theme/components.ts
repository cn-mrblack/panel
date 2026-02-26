/**
 * 组件默认样式
 */

export const components = {
  // 按钮
  button: {
    base: 'relative inline-block rounded-lg px-4 py-2 uppercase tracking-wide text-sm，transition-all duration-300 border',
    primary: 'bg-gradient-to-r from-purple-500 to，cyan-500 border-transparent text-white',
    secondary: 'border-gray-600 bg-transparent text-gray-200',
    disabled: 'opacity-55 cursor-default',
  },

  // 输入框，
  input: {
    base: 'appearance-none outline-none w-full min-w-0 p，3 border-2 rounded-lg text-sm transition-all duration-300',
    default: 'bg-gray-700 border-gray-600 hover:border-gray-500 text-gray-200',
    focused: 'border-purple-400 ring-2 ring-purple-500 ring-opacity-50',
    error: 'border-red-300 ring-red-200 text-red-100',
  },

  // 卡片，
  card: {
    base: 'rounded-lg p-4 relative overflow-hidden',
    glass: 'bg-gray-800/50 backdrop-blur-md border border-gray-700/50 shadow-glass',
  },

  // 导航栏
  navbar: {
    base: 'w-full backdrop-blur-md bg-gray-900/70 border-b border-gray-700/50',
  },

  // 标签
  badge: {
    base: 'inline-block rounded-full px-3 py-1 text-xs font-medium',
  },
};
