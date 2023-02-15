import { useState, useEffect } from 'react'
import { Nav } from './components/Nav'
import { Search } from './components/Search'
import { ProfileCard } from './components/ProfileCard'
import { defaultData } from './lib/defaultData'
import { DefaultData } from './types/DefaultData'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [searchData, setSearchData] = useState<DefaultData>(defaultData)
  const handleSetSearchData = (searchData: DefaultData) => setSearchData(searchData)

  useEffect(() => {
    if (theme === "dark")
    {
      document.documentElement.classList.add("dark");
    } else
    {
      document.documentElement.classList.remove("dark")
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  };

  return (
    <div className="bg-lightGrey dark:bg-blackDm h-full w-full desktop:w-full desktop:h-full">
      <div className="font-spaceMono tablet:w-[573px] tablet:h-screen tablet:mx-auto tablet:flex tablet:flex-col tablet:align-middle tablet:justify-center desktop:flex desktop:flex-col desktop:align-middle desktop:justify-center desktop:w-[730px] desktop:mx-auto">
        <Nav handleThemeSwitch={handleThemeSwitch} theme={theme}  />
      <Search handleSetSearchData={handleSetSearchData} />
        <ProfileCard {...searchData} />
      </div>
      </div>
  )
}
export default App
