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
						A passionate programmer, Data Science graduate and avid computer
						science enthusiast looking for work. click on the button below to
						learn more about me!
						<div className="learn_btn">
							{' '}
							<Link to="/about" className="LinkHero">
								More!
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
