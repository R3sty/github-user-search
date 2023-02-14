import { useState } from 'react'
import { Nav } from './components/Nav'
import { Search } from './components/Search'
import { ProfileCard } from './components/ProfileCard'
import { defaultData } from './lib/defaultData'
import { DefaultData } from './types/DefaultData'

function App() {
  const [searchData, setSearchData] = useState<DefaultData>(defaultData)
  const handleSetSearchData = (searchData: DefaultData) => setSearchData(searchData)

  return (
    <div className="bg-lightGrey h-full w-full desktop:w-full desktop:h-full">
      <div className="font-spaceMono tablet:w-[573px] tablet:h-screen tablet:mx-auto tablet:flex tablet:flex-col tablet:align-middle tablet:justify-center desktop:flex desktop:flex-col desktop:align-middle desktop:justify-center desktop:w-[730px] desktop:mx-auto">
      <Nav />
      <Search handleSetSearchData={handleSetSearchData} />
        <ProfileCard {...searchData} />
      </div>
      </div>
  )
}
export default App
