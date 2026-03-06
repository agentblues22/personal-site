import './components/StyleSheets/About.css';
import pandas from './components/images/pandas.svg';
import CSS from './components/images/CSS.png';
import HTML from './components/images/html.png';
import JS from './components/images/js.png';
import numpy from './components/images/numpy.svg';
import python from './components/images/python.png';
import r from './components/images/r.svg';
import n from './components/images/node.png';
import docker from './components/images/docker.512x369.png';
import sql from './components/images/—Pngtree—sql file document icon_4189765.png';
import bi from './components/images/powerbi.385x512.png';
import vscode from './components/images/microsoft_visual_studio_code_icon_137397.png';
import pytorch from './components/images/pytorch.427x512.png';
import tensorflow from './components/images/tensorflow.457x512.png';
import git from './components/images/github-11-64.png';
import project1 from './components/images/project1img.jpg';
import project2 from './components/images/project2img.jpg';
import Projects from './components/Projects';
import Projectpage from './Projectpage';

function About() {
	return (
		<div className="centrified">
			<div className="Skills">
				<div className="Skillcontainer">Skills</div>

				<div className="Skillitem">
					<div className="cnt">
						<img className="skill" src={JS}></img>
					</div>
				</div>
				<div className="Skillitem">
					<div className="cnt">
						<img className="skill" src={HTML}></img>
					</div>
				</div>
				<div className="Skillitem">
					<div className="cnt">
						<img className="skill" src={CSS}></img>
					</div>
				</div>
				<div className="Skillitem">
					<div className="cnt">
						<img className="skill" src={python}></img>
					</div>
				</div>
				<div className="Skillitem">
					<div className="cnt">
						<img className="skill" src={pandas}></img>
					</div>
				</div>
				<div className="Skillitem">
					<div className="cnt">
						<img className="skill" src={numpy}></img>
					</div>
				</div>
				<div className="Skillitem">
					<div className="cnt">
						<img className="skill" src={r}></img>
					</div>
				</div>
				<div className="Skillitem">
					<div className="cnt">
						<img className="skill" src={n}></img>
					</div>
				</div>
				<div className="Skillitem">
					<div className="cnt">
						<img className="skill" src={sql}></img>
					</div>
				</div>
				<div className="Skillitem">
					<div className="cnt">
						<img className="skill" src={bi}></img>
					</div>
				</div>
				<div className="Skillitem">
					<div className="cnt">
						<img className="skill" src={tensorflow}></img>
					</div>
				</div>
				<div className="Skillitem">
					<div className="cnt">
						<img className="skill" src={pytorch}></img>
					</div>
				</div>
				<div className="Skillitem">
					<div className="cnt">
						<img className="skill" src={vscode}></img>
					</div>
				</div>
				<div className="Skillitem">
					<div className="cnt">
						<img className="skill" src={docker}></img>
					</div>
				</div>
				<div className="Skillitem">
					<div className="cnt">
						<img className="skill" src={git}></img>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
