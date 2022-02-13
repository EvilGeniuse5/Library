import React from 'react';
import HeroSection from './sections/HeroSection';
import LibraryDetails from './sections/LibraryDetails';
import WelcomeTitle from './sections/WelcomeTitle';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<WelcomeTitle />
			<HeroSection />
			<LibraryDetails />
			{/* <img src='/img/library.jpg' alt='img' className='pixel-perfect' /> */}
		</React.Fragment>
	);
};

export default App;
