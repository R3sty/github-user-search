import { HTMLAttributes } from 'react'
interface AvatarConfig {
    avatarUrl: string
}

type AvatarProps = HTMLAttributes<HTMLDivElement> & AvatarConfig

export const Avatar = ({ className, avatarUrl }: AvatarProps) => {
    const backgroundImage = avatarUrl;
    return (
        <div
            style={{ backgroundImage: `url('${backgroundImage}')` }}
            className={`row-span-3 rounded-full bg-cover bg-center bg-no-repeat tablet:h-row-span-3 mr-12 h-[70px] w-[70px] tablet:h-[117px] tablet:w-[117px] desktop:ml-8 desktop:mt-4 desktop:row-span-6 ${className}`}>
        </div>
    )
    
}