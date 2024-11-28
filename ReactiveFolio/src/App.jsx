import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// const [count, setCount] = useState(0)

return (
	
	<>
		<nav>
			<a href className="text-3xl font-bold underline">
				Home
			</a>
			<a href className="text-3xl font-bold underline">
				About
			</a>
			<a href className="text-3xl font-bold underline">
				Projects
			</a>
		{/* Maybe put the buttons here and keep hidden? */}
		</nav>
		<main>
			<section>
				<img src={viteLogo} className="logo" alt="Vite logo" />
				<h1>
					Gregor Ruta
				</h1>
				<p>
					Summary: I am very good boy, please hire me, I have approximate knowledge of many things. I can frontend backend, sometimes I can lift heavy things.
				</p>
				<article>
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</article>
				<article>
					<button> Hire </button>
					<button> Resume </button>
				</article>
			</section>
			<section>
				<h1>
					About
				</h1>

				<h2>
					Education
				</h2>
				<ul>
					<li>Baldur's Gate University</li>
					<li>Candlekeep Academy</li>
				</ul>
				<h2>
					Work
				</h2>
				<ul>
					<li>Cloakwood Forest</li>
					<li>Feldepost Inn</li>
					<li>Nashkel Mines</li>
				</ul>
				<h2>
					Skills
				</h2>
				<article>
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</article>
			</section>
			<section>
				<h1>
					Projects
				</h1>
					<article>
					<h2>
						Nice Project
					</h2>
					<ul>
						<li>Place: London</li>
						<li>Space: Sqaure meters</li>
					</ul>
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</article>
			</section>
		</main>
	</>

	// <>
	//   <div>
	//     <a href="https://vite.dev" target="_blank">
	//       <img src={viteLogo} className="logo" alt="Vite logo" />
	//     </a>
	//     <a href="https://react.dev" target="_blank">
	//       <img src={reactLogo} className="logo react" alt="React logo" />
	//     </a>
	//   </div>
	//   <h1>Vite + React</h1>
	//   <div className="card">
	//     <button onClick={() => setCount((count) => count + 1)}>
	//       count is {count}
	//     </button>
	//     <p>
	//       Edit <code>src/App.jsx</code> and save to test HMR
	//     </p>
	//   </div>
	//   <p className="read-the-docs">
	//     Click on the Vite and React logos to learn more
	//   </p>
	// </>
)
}

export default App
