import './StyleSheets/Footer.css';
import git from './images/github-11-64.png';
import linkedin from './images/linkedin-3-64.png';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className="MainContainer">
			<div className="Linkontainer">
				<ul className="Footcontainer">
					<li className="Footitems">
						<Link className="Link" to="/">
							Home
						</Link>
					</li>
					<li className="Footitems">
						<Link className="Link" to="/about">
							About
						</Link>
					</li>
					<li className="Footitems">
						<Link className="Link" to="/projects">
							Projects
						</Link>
					</li>
				</ul>
			</div>
			<div className="SocialContainer">
				<a href="https://github.com/agentblues22">
					<div>
						<img className="socialimage" src={git}></img>
					</div>
				</a>
				<a href="https://www.linkedin.com/in/georgy-elias-roy-183470148/">
					<div>
						<img className="socialimage" src={linkedin}></img>
					</div>
				</a>
			</div>
		</div>
	);
}
export default Footer;
