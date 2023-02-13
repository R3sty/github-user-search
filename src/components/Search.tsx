export const Search = () => {
    return (
        <div className="mx-6 mt-4">
            <form className="rounded-xl h-16 bg-white shadow-md items-center flex flex-row" >
                <div className="p-4">
                    <svg className="h-6 w-6" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" fill="#0079ff" /></svg>
                </div>
                <div className="p-4">
                    <input className="text-xs" placeholder="Search Github username..."></input>
                </div>
                <div className="">
                    <button className="bg-blue h-12 w-20 rounded-lg text-white text-xs" type="submit">Search</button>
                    </div>
                </form>
        </div>
    )
};