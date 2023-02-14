interface Props {
    stats: string
    data: number
}

export const Stats = ({ stats, data}: Props) => {
    return (
        <div>
            <div className="text-[11px] text-bluishGrey">{stats}</div>
            <div className="mt-px">{data}</div>
        </div>
    )
}