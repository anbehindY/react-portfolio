import './App.css';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaXTwitter, FaLinkedin, FaGithubAlt, FaMedium } from 'react-icons/fa6';
import { SiWellfound } from 'react-icons/si';
import Profile from './assets/profile.png'

function App() {
	return (
		<>
			<section className='min-h-screen bg-white px-10'>
				<nav className='py-10 mb-12 flex justify-between'>
					<h1 className='text-3xl text-slate-700 font-semibold'>Hello there 👋</h1>
					<ul className='flex items-center'>
						<li>
							<BsFillMoonStarsFill />
						</li>
						<li>
							<a
								href='#'
								className='bg-gradient-to-br from-slate-400 to-sky-800 text-white px-4 py-2 rounded-md ml-8'
							>
								Resume
							</a>
						</li>
					</ul>
				</nav>
				<div className='text-center p-10'>
					<h2 className='text-slate-600 text-5xl font-black'>Alfie Yang</h2>
					<h3 className='text-2xl py-4'>Full-stack web developer</h3>
					<p className='py-4'>
						Specialized in React and Ruby on Rails, offering business solutions
						for your enterprise
					</p>
				</div>
				<div className='text-4xl flex gap-8 justify-center text-sky-900'>
					<FaGithubAlt />
					<FaLinkedin />
					<FaXTwitter />
					<FaMedium />
					<SiWellfound />
				</div>
				<div className='relative bg-gradient-to-tr from-slate-500 to-sky-800 rounded-full w-80 h-80 mt-20 mx-auto object-contain overflow-hidden'>
					<img src={Profile} alt='Picture of the author' className='object-cover'/>
				</div>
			</section>
		</>
	);
}

export default App;
