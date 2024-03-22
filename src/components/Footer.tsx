import './StyleSheets/Footer.css';
import git from './images/github-11-64.png';
import linkedin from './images/linkedin-3-64.png';
import { Link } from 'react-router-dom';
import facebook from './images/facebook-4-512.png';
import instagram from './images/instagram-3-512.png';

function Footer() {
	return (
		<div className="MainContainer">
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
				<a href="https://www.facebook.com/profile.php?id=100003098367885">
					<div>
						<img className="socialimage" src={facebook}></img>
					</div>
				</a>
				<a href="https://www.instagram.com/georgyroy/?igsh=Z2VwdTBtejlnbjV5">
					<div>
						<img className="socialimage" src={instagram}></img>
					</div>
				</a>
			</div>
		</div>
	);
}
export default Footer;
