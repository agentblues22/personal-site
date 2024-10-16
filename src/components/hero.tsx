import { Link } from 'react-router-dom';
import image from './images/hero.jpg';
import '../fonts/BrunoAce-Regular.ttf';
import './StyleSheets/hero.css';

function Hero() {
	return (
		<div className="background_img">
			<div className="corrector">
				<div className="herobackground">
					<div className="typewriter">
						<h1>GEORGY ELIAS ROY.</h1>
					</div>
					<div className="body_content">
						Hello. My name is Georgy Elias Roy. A motivated and passionate
						computer science graduate actively looking out for opportunities. I
						Have a distinction in Computer Science and Engineering from India
						and a masters in Data Science from the University of Essex.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
