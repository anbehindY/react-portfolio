import './App.css';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaXTwitter, FaLinkedin, FaGithubAlt, FaMedium } from 'react-icons/fa6';
import { SiWellfound } from 'react-icons/si';
import Profile from './assets/profile.png'

function App() {
	return (
		<>
			<section className='min-h-screen bg-white px-10 pb-10' id='intro'>
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
					<p className='py-4 text-lg max-w-xl mx-auto text-left'>
						Specialized in React and Ruby on Rails, offering business solutions
						for a variety of enterprises.
            Let me assure you that with my collaboration, you will reach your business goals much faster than you ever imagined.
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

			<section>
				<div>
					<h2 className='px-4 text-3xl font-bold text-slate-700'>About me</h2>
					<p className='px-6 py-4'>
					Hello, my name is Yan Min Thwin, you can also call me Alfie. I'm a full-stack developer proficient in HTML, CSS, Tailwind, JavaScript, React, Redux, and Ruby on Rails. Previously, I was a medical student studying at the University of Medicine (1) in Myanmar. During the COVID-19 pandemic, all the universities were shut down, and since then I started to learn programming and decided to switch my career completely.
I’m currently pair-programming with remote professionals from all over the world through the Microverse program. I recently built a website for a local clinic where patients can view the list of doctors with their details, and where patients can make a reservation for their needs. I really enjoy building beautiful websites with efficient features and I believe these kinds of websites will bring the audience wherever we want to.
					</p>
				</div>
			</section>
		</>
	);
}

export default App;
