import './App.css'

function App() {

  return (
    <div>
      <nav className=' flex-1 bg-slate-300 p-4 sticky ' >
        <div className="logo ">
          <img className='w-36 ml-8 ' src="/images/swiftholidayslogo.png" alt="logo" />
        </div>
      
        <ul className='flex gap-14 justify-end mr-6 '>
          <li>Home </li>
          <li> Company Profile</li>
          <li>Our Service </li>
          <li> Bus</li>
          <li> Contant Us</li>

        </ul>

      </nav>
      
      
    </div>

  )
}

export default App


