import './components/StyleSheets/About.css';
import pandas from './components/images/pandas.svg';
import CSS from './components/images/CSS.png';
import HTML from './components/images/html.png';
import JS from './components/images/js.png';
import numpy from './components/images/numpy.svg';
import python from './components/images/python.png';
import r from './components/images/r.svg';
import n from './components/images/node.png';

function About() {
	return (
		<>
			<div className="Aboutmaincontainer">
				<div className="detail_container">
					<div className="photo">
						<div className="aboutcontainer">
							<h1 className="aboutheading">Overview</h1>
							<p>
								{' '}
								Hello. My name is Georgy Elias Roy. A motivated and passionate
								computer science graduate actively looking out for
								opportunities. I Have a distinction in Computer Science and
								Engineering from India and a masters in Data Science from the
								University of Essex. Currently i am actively looking out for
								opportunities as i can work full time in the United Kingdom.
							</p>

							<p className="contacts">
								Email Address:
								<a href="mailto:georgyroy007@gmail.com">
									georgyroy007@gmail.com
								</a>
								&nbsp; Mobile Number:
								<a href="tel:+447867087296">+447867087296</a>
							</p>
						</div>
						<div className="photocontainer"></div>
					</div>
				</div>
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
							the world of computers and gained knowledge in app development and
							web development.
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
							Graduated from University of Essex in the year 2023 with a masters
							in data science. Gained valuable nowledge in Data Modelling, Data
							Visualisation, Machine Learning etc.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
