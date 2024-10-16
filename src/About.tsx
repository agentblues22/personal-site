import './components/StyleSheets/About.css';
import pandas from './components/images/pandas.svg';
import CSS from './components/images/CSS.png';
import HTML from './components/images/html.png';
import JS from './components/images/js.png';
import numpy from './components/images/numpy.svg';
import python from './components/images/python.png';
import r from './components/images/r.svg';
import n from './components/images/node.png';
import project1 from './components/images/project1img.jpg';
import project2 from './components/images/project2img.jpg';
import Projects from './components/Projects';
import Projectpage from './Projectpage';

function About() {
	return (
		<>
			<div className="Aboutmaincontainer">
				<div className="Skillcontainer">
					<h1 className="aboutheading">skills:</h1>
					<div className="Skillitem">
						<img className="skill" src={JS}></img>
						<img className="skill" src={HTML}></img>
						<img className="skill" src={CSS}></img>
						<img className="skill" src={python}></img>
						<img className="skill" src={pandas}></img>
						<img className="skill" src={numpy}></img>
						<img className="skill" src={r}></img>
						<img className="skill" src={n}></img>
					</div>
					<h1 className="aboutheading">projects:</h1>
					<div className="projectdiv">
						<Projectpage></Projectpage>
					</div>
				</div>
				<div className="Educontainer">
					<h1 className="aboutheading">Education:</h1>
					<div className="poonjar">
						<div className="Poonjarabout">
							<h2 className="colname">College of Engineering,Poonjar</h2>
							<p>
								<b>Batch:</b> 2016-2020
							</p>
							<p>
								Graduated from College of Engineering, Poonjar in the year 2020
								with B.tech IN Computer Science and Engineering. Got introduced
								the world of computers and gained knowledge in app development
								and web development.
							</p>
						</div>
						<div className="Poonjarpic"></div>
					</div>
					<div className="essex">
						<div className="Essexpic"></div>
						<div className="Essexabout">
							<h2 className="colname">University of Essex</h2>
							<p>
								<b>Batch:</b> 2022-2023
							</p>
							<p>
								Graduated from University of Essex in the year 2023 with a
								masters in data science. Gained valuable knowledge in Data
								Modelling, Data Visualisation, Machine Learning etc.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
