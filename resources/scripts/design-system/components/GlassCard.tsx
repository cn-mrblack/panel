/**
 * 玻璃态卡片组件
 */

import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/macro';
import tw from 'twin.macro';

interface GlassCardProps {
  className?: string;
  isHoverable?: boolean;
  isPrimary?: boolean;
  isCyan?: boolean;
  hasGlow?: boolean;
}

const StyledGlassCard = styled.div<GlassCardProps>`
  ${tw`rounded-lg p-4 relative overflow-hidden`};
  ${({ isPrimary }) => (isPrimary ? tw`bg-purple-500/10 border-purple-500/20` : tw`bg-gray-800/50 border-gray-700/50`)};
  ${({ isCyan }) => isCyan && tw`bg-cyan-500/10 border-cyan-500/20`};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid;

  ${({ hasGlow }) =>
    hasGlow &&
    `
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
  `};

  ${({ isHoverable }) =>
    isHoverable &&
    `
    transition-all duration-300 ease-in-out;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      border-color: ${({ isPrimary }) => (isPrimary ? 'rgba(139, 92, 246, 0.4)' : 'rgba(148, 163, 184, 0.4)')};
    }
  `};

  // 渐变边框效果
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    padding: 1px;
    background: ${({ isPrimary, isCyan }) =>
      isPrimary
        ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(34, 211, 238, 0.3) 100%)'
        : isCyan
        ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)'
        : 'linear-gradient(135deg, rgba(148, 163, 184, 0.2) 0%, rgba(107, 114, 128, 0.2) 100%)'};
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

const GlassCard: React.FC<PropsWithChildren<GlassCardProps>> = ({
  children,
  className,
  isHoverable = false,
  isPrimary = false,
  isCyan = false,
  hasGlow = false,
}) => {
  return (
    <StyledGlassCard
      className={className}
      isHoverable={isHoverable}
      isPrimary={isPrimary}
      isCyan={isCyan}
      hasGlow={hasGlow}
    >
      {children}
    </StyledGlassCard>
  );
};

export default GlassCard;
