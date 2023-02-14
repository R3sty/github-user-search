export const Nav = () => {
    return (
        <div className="flex flex-cols-2 justify-between mt-4 mx-6 bg-lightGrey tablet:w-full desktop:w-full">
            <h1 className="text-black text-xxl">devfinder</h1>
            <div className="flex ">
                <div className="text-xs pr-2 pt-2 text-bluishGrey hover:text-black">DARK</div>
                <div className="pt-2 px-2 hover:text-black"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z" fill="#697C9A" fill-rule="nonzero"/></svg></div>
            </div>
        </div>
    )
};