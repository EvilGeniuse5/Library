import HeroSection from './sections/HeroSection';
import DetailSection from './sections/DetailSection';
import WelcomeTitle from './sections/WelcomeTitle';

function App() {
	return (
		<div className='App pb-5'>
			<WelcomeTitle />
			<HeroSection />
			<DetailSection />
			{/* <img src="/img/empty.jpg" alt="img" className="pixel-perfect" /> */}
		</div>
	);
}

export default App;
