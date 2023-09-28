import './App.css'
import {BsFillMoonStarsFill} from 'react-icons/bs';

function App() {

  return (
    <>
      <section className='min-h-screen bg-white px-10'>
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-3xl text-slate-700 font-sans'>Alfie Yang</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill /></li>
              <li><a href='#' className='bg-gradient-to-r from-gray-500 to-slate-700 text-white px-4 py-2 rounded-md ml-8'>Resume</a></li>
            </ul>
          </nav>
      </section>
    </>
  )
}

export default App
