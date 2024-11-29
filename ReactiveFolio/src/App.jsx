import viteLogo from '/vite.svg'
import './App.css'

function App() {
// const [count, setCount] = useState(0)

return (
	
	<>
		<nav class="navbar">
			<a href className="text-base text-stone-100">
				Home
			</a>
			<a href className="text-base text-stone-100">
				About
			</a>
			<a href className="text-base text-stone-100">
				Projects
			</a>
		{/* Maybe put the buttons here and keep hidden? */}
		</nav>
		<main>
			<section>
				<img src="profilePic.png" className="mx-auto size-6/12" alt="Gregor's profile picture"  />
				<h1 class="paragraphs">
					Gregor Ruta
				</h1>
				<p className="text-justify my-5 mx-auto leading-5">
				I am a full-stack C#/.NET developer based in Stockholm, Sweden, with a background in construction project management. I specialize in .NET framework, utilizing my experience with Entity Framework, and Azure. I am curious, driven, and versatile with other programming languages, such as Python and C/C++, which I have applied in data management and computer vision projects.
				</p>
				<article class = "social">
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</article>
				<article class = "buttons">
					<button> Hire </button>
					<button> Resume </button>
				</article>
			</section>
			<section>
				<h1 class="paragraphs">
					About
				</h1>

				<h2 class="subparagraphs" Name="text-left text-sky-600 text-xl font-semibold my-3">
					Education
				</h2>
				<ul class="lists">
					<li>Baldur's Gate University</li>
					<li>Candlekeep Academy</li>
				</ul>
				<h2 class="subparagraphs">
					Work
				</h2>
				<ul class="lists">
					<li>Cloakwood Forest</li>
					<li>Feldepost Inn</li>
					<li>Nashkel Mines</li>
				</ul>
				<h2 class="subparagraphs">
					Skills
				</h2>
				<article class="skills">
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
				<h1 class = "paragraphs">
					Projects
				</h1>
					<article>
					<h2 class="subparagraphs">
						Nice Project
					</h2>
					<ul class="lists">
						<li>Place: London</li>
						<li>Space: Sqaure meters</li>
					</ul>
					<article class ="project-portfolio">
						<img src="images.jpg" alt="an illustration for Nice Project" class="portfolio-picture"/>
						<img src="images.jpg" alt="an illustration for Nice Project" class="portfolio-picture"/>
						<img src="images.jpg" alt="an illustration for Nice Project" class="portfolio-picture"/>
					</article>
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
