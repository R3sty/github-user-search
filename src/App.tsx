import { useState } from 'react'
import { Nav } from './components/Nav'
import { Search } from './components/Search'
import { ProfileCard } from './components/ProfileCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-lightGrey">
    <div className="font-spaceMono tablet:w-[573px] tablet:h-screen tablet:mx-auto tablet:flex tablet:flex-col tablet:align-middle tablet:justify-center desktop:flex desktop:flex-col desktop:align-middle desktop:justify-center desktop:w-[730px] desktop:mx-auto">
     <Nav/>
      <Search />
      <ProfileCard/>
      </div>
      </div>
  )
}
export default App
