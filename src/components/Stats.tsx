interface Props {
    stats: string
    data: number
}

export const Stats = ({ stats, data}: Props) => {
    return (
        <div>
            <div className="text-[11px] text-bluishGrey dark:text-whiteDm">{stats}</div>
            <div className="mt-px dark:text-whiteDm">{data}</div>
        </div>
    )
}