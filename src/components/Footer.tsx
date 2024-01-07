import './StyleSheets/Footer.css';
import git from './images/github-11-64.png';
import linkedin from './images/linkedin-3-64.png';

function Footer() {
	return (
		<div className="MainContainer">
			<div className="Linkontainer">
				<ul className="Footcontainer">
					<li className="Footitems">
						<a className="Link" href="/">
							Home
						</a>
					</li>
					<li className="Footitems">
						<a className="Link" href="/about">
							About
						</a>
					</li>
					<li className="Footitems">
						<a className="Link" href="/projects">
							Projects
						</a>
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
