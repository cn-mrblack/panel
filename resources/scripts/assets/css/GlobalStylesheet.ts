import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
    body {
        ${tw`font-sans bg-gray-900 text-gray-200`};
        letter-spacing: 0.015em;
        background-image: radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 20%),
                          radial-gradient(circle at 80% 80%, rgba(34, 211, 238, 0.1) 0%, transparent 30%);
    }

    h1, h2, h3, h4, h5, h6 {
        ${tw`font-medium tracking-normal font-header`};
    }

    p {
        ${tw`text-gray-200 leading-snug font-sans`};
    }

    form {
        ${tw`m-0`};
    }

    textarea, select, input, button, button:focus, button:focus-visible {
        ${tw`outline-none`};
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield !important;
    }

    /* Scroll Bar Style - 现代化设计 */
    ::-webkit-scrollbar {
        background: none;
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(34, 211, 238, 0.6));
        border: 2px solid rgba(15, 23, 42, 0.8);
    }

    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(34, 211, 238, 0.8));
    }

    ::-webkit-scrollbar-track-piece {
        margin: 4px 0;
    }

    ::-webkit-scrollbar-thumb:horizontal {
        border-radius: 5px;
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }

    /* 动画类 */
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .animate-fade-in {
        animation: fadeIn 0.6s ease-out forwards;
    }

    .animate-slide-in {
        animation: slideIn 0.5s ease-out forwards;
    }

    /* 玻璃态效果 */
    .glass {
        background: rgba(15, 23, 42, 0.7);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(148, 163, 184, 0.2);
    }

    .glass-light {
        background: rgba(15, 23, 42, 0.5);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(148, 163, 184, 0.15);
    }

    /* 渐变文字 */
    .text-gradient {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%);
    }

    /* 按钮悬停效果 */
    .btn-hover {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .btn-hover:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    }
`;
