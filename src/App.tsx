import React from 'react';
import HeroSection from './sections/HeroSection';
import LibraryDetails from './sections/LibraryDetails';
import WelcomeTitle from './sections/WelcomeTitle';

const App: React.FC = () => {
	return (
		<div className='App pb-5'>
			<WelcomeTitle />
			<HeroSection />
			<LibraryDetails />
			{/* <img src='/img/library.jpg' alt='img' className='pixel-perfect' /> */}
		</div>
	);
};

export default App;
