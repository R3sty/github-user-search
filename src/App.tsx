import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <h1 className="text-pink-500">App works!</h1>
      <h2 className="text-slate-400">Update deployment?</h2>
      <h2 className="text-slate-400">how about this one?</h2>
    </div>
  )
}

export default App
