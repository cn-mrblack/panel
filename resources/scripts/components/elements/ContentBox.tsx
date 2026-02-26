import React, { PropsWithChildren } from 'react';
import FlashMessageRender from '@/components/FlashMessageRender';
import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
import tw from 'twin.macro';
import GlassCard from '@/design-system/components/GlassCard';

type Props = Readonly<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        title?: string;
        borderColor?: string;
        showFlashes?: string | boolean;
        showLoadingOverlay?: boolean;
    }
>;

const ContentBox = ({ title, borderColor, showFlashes, showLoadingOverlay, children, ...props }: PropsWithChildren<Props>) => (
    <div {...props}>
        {title && <h2 css={tw`text-gray-300 mb-4 px-4 text-2xl`}>{title}</h2>}
        {showFlashes && (
            <FlashMessageRender byKey={typeof showFlashes === 'string' ? showFlashes : undefined} css={tw`mb-4`} />
        )}
        <GlassCard isHoverable className={title ? '' : 'mt-0'}>
            <SpinnerOverlay visible={showLoadingOverlay || false} />
            {children}
        </GlassCard>
    </div>
);

export default ContentBox;
