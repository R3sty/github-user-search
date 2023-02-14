import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { userSearch } from '../hooks/userSearch';

export const Search = ({ handleSetSearchData }: any) => {
    const [searchValue, setSearchValue] = useState('')
    const searchRef = useRef(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const { gitUserData, handleSubmit, showNoResults } = userSearch({ searchValue })
    
    useEffect(() => {
        if(!gitUserData !== undefined) handleSetSearchData(gitUserData)
    }, [gitUserData])

    return (
        <div className="mx-6 mt-4 tablet:w-full desktop:w-full">
            <form className="rounded-xl h-16 bg-white shadow-md items-center flex flex-row" onSubmit={handleSubmit} >
                <div className="p-4 flex flex-1">
                    <svg className="h-6 w-6" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" fill="#0079ff" /></svg>
           
                <input
                    ref={searchRef}
                    onChange={handleChange}
                        className="ml-[9px] flex-1 truncate text-xs font-light caret-[#0079FF] outline-none placeholder:text-bluishGrey desktop:text-s"
                    placeholder={"Search Github username..."}
                    type="text"
                    />
                </div>
                {showNoResults && <span className='hidden pr-[14px] text-sm font-bold text-[#F74646] md:block'>No results</span>}
                    <button className="rounded-[10px] bg-blue px-3 mr-2 pt-[12.5px] pb-[13.5px] text-sm text-white transition-colors hover:bg-[#60ABFF] tablet:my-[9.5px] tablet:mx-[10px] tablet:px-[23px] desktop:text-[1rem]" type="submit">Search</button>
                </form>
        </div>
    )
};