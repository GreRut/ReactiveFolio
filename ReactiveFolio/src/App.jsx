import viteLogo from '/vite.svg'
import './App.css'

function App() {
// const [count, setCount] = useState(0)

return (
	
	<>
		<div class = "big-webpage">
		<nav class="navbar">
			<a href class="navi-links">
				Home
			</a>
			<a href class="navi-links">
				About
			</a>
			<a href class="navi-links">
				Projects
			</a>
			<section class = "social-menu">
				<img src="/ReactiveFolio/github.svg" class="icon" alt="github logo" />
				<img src="/ReactiveFolio/linkedin.svg" class="icon" alt="linkedin logo" />
				<img src="/ReactiveFolio/instagram.svg" class="icon" alt="instagram logo" />
				<img src="/ReactiveFolio/behance.svg" class="icon" alt="behance logo" />
			</section>
		</nav>
		<main>
			<section class="landing">
				<section class ="profile-pic">
				<img src="/ReactiveFolio/profilePic.png"  alt="Gregor's profile picture"  />
				</section>
				<section>
				<h1 class="paragraphs">
					Gregor Ruta
				</h1>
				<p  class="lead">
				I am a full-stack C#/.NET developer based in Stockholm, Sweden, with a background in construction project management. I specialize in .NET framework, utilizing my experience with Entity Framework, and Azure. I am curious, driven, and versatile with other programming languages, such as Python and C/C++, which I have applied in data management and computer vision projects.
				</p>
				</section>
				<article class = "social">
					<img src="/ReactiveFolio/github.svg" class="icon" alt="github logo" />
					<img src="/ReactiveFolio/linkedin.svg" class="icon" alt="linkedin logo" />
					<img src="/ReactiveFolio/instagram.svg" class="icon"alt="instagram logo" />
					<img src="/ReactiveFolio/behance.svg"  class="icon" alt="behance logo" />
				</article>
				<article class = "buttons">
					<button> Hire </button>
					<button> Resume </button>
				</article>
			</section>
			<section class = "CV">
				<article>
					<h1 class="paragraphs">
						About
					</h1>
				</article>
				<article>

				</article>
				<article>
				<h2 class="subparagraphs">
					Education
				</h2>
				<ul class="lists">
					<li>Baldur's Gate University</li>
					<li>Candlekeep Academy</li>
				</ul>
				</article>
				<article>
					<h2 class="subparagraphs">
						Work
					</h2>
					<ul class="lists">
						<li>Cloakwood Forest</li>
						<li>Feldepost Inn</li>
						<li>Nashkel Mines</li>
					</ul>
				</article>
				<article>
					<h2 class="subparagraphs">
						Skills
					</h2>
					<article class="skills">
						<img src="/ReactiveFolio/dotnet.svg" class="icon" alt="dotnet logo" />
						<img src="/ReactiveFolio/c.svg" class="icon" alt="C logo" />
						<img src="/ReactiveFolio/python.svg" class="icon" alt="Python logo" />
						<img src="/ReactiveFolio/javascript.svg" class="icon" alt="javascript logo" />
						<img src={viteLogo} class="icon" alt="Vite logo" />
						<img src={viteLogo} class="icon" alt="Vite logo" />
						<img src={viteLogo} class="icon" alt="Vite logo" />
						<img src={viteLogo} class="icon" alt="Vite logo" />
						<img src={viteLogo} class="icon" alt="Vite logo" />
						<img src={viteLogo} class="icon" alt="Vite logo" />
						<img src={viteLogo} class="icon" alt="Vite logo" />
						<img src={viteLogo} class="icon" alt="Vite logo" />
					</article>
				</article>
			</section>
			<section class ="portfolio">
				<article>
					<h1 class = "paragraphs">
						Projects
					</h1>
				</article>
				<article>

				</article>
					<article>
					<h2 class="subparagraphs">
						Nice Project
					</h2>
					<ul class="lists">
						<li>Place: London</li>
						<li>Space: Sqaure meters</li>
					</ul>
				</article>
				<article class ="project-portfolio">
					<img src="images.jpg" alt="an illustration for Nice Project" class="portfolio-picture"/>
				</article>
				<article class ="project-portfolio">
					<img src="images.jpg" alt="an illustration for Nice Project" class="portfolio-picture"/>
				</article>
				<article class ="project-portfolio">
					<img src="images.jpg" alt="an illustration for Nice Project" class="portfolio-picture"/>
				</article>
			</section>
		</main>
		</div>
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
