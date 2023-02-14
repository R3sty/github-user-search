import classnames from 'classnames'
import type { AnchorHTMLAttributes } from 'react'

interface Props {
    content: string
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement | HTMLSpanElement> & Props

export const Links = ({ content, href, children}: LinkProps) => {
    return href !== null ? (
        <a
        className={classnames('flex items-center gap-4 text-xs text-bluishGrey', {
            'opacity-20': content === 'Not Available',
        })}
        href={href}
    >
        <span className='h-5 w-5'>{children}</span>
        <span className='truncate'>{content}</span>
    </a>
) : (
    <span
        className={classnames('flex items-center gap-4 text-xs text-bluishGrey', {
            'opacity-20': content === 'Not available',
        })}
    >
        <span className='h-5 w-5'>{children}</span>
        <span className='truncate'>{content}</span>
    </span>
)
}