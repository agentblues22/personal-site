import './components/StyleSheets/About.css';

function About() {
	return (
		<div className="Aboutmaincontainer">
			<div className="detail_container">
				<div className="photo">
					<div className="aboutcontainer">
						<h1 className="aboutheading">Overview</h1>
						<p>
							{' '}
							Hello. My name is Georgy Elias Roy. A motivated and passionate
							computer science graduate actively looking out for opportunities.
							I Have a distinction in Computer Science and Engineering from
							India and a masters in Data Science from the University of Essex.
							Currently i am actively looking out for opportunities as i can
							work full time in the United Kingdom.
						</p>

						<p className="contacts">
							Email Address:
							<a href="mailto:georgyroy007@gmail.com">georgyroy007@gmail.com</a>
							&nbsp; Mobile Number:
							<a href="tel:+447867087296">+447867087296</a>
						</p>
					</div>
					<div className="photocontainer"></div>
				</div>
				<div className="maininfo">
					<div>
						<h2 className="aboutheading">Education</h2>
						<p>
							<h2 className="aboutsubheading">
								college of engineering, Poonjar
							</h2>
							<br />
							Bachelors in Computer Science (2016-2020)
							<br />
						</p>

						<p>
							<h2 className="aboutsubheading">
								University of Essex, Colchester
							</h2>
							<br />
							Masters in Data Science (2022-2023)
							<br />
						</p>

						<h2 className="aboutheading">Experience</h2>
						<ul>
							<li>
								Worked as a freelance developer for 2 years primarily building
								websites for clients using JavaScript technologies like Node,
								React, NEXT, and Express
							</li>
							<li>
								Worked in Kokoro Colchester as back of the house staff. Gained
								experience working in a fast and volatile environment.
							</li>
							<li>
								Worked in Talbooth restaurant for 2 months as a front of the
								house staff, gaining experience in working as a team and
								improving communication skills by interacting with customers.
							</li>
						</ul>

						<h2 className="aboutheading">Skills</h2>
						<h3 className="aboutheading">Hard skills</h3>
						<ul>
							<li>
								Python - Excellent proficiency in python. Good knowledge of
								python libraries like pandas, NumPy, Scikit learn, seaborn,
								tensorflow, and Scipy.
							</li>
							<li>
								JavaScript - Excellent proficiency in JavaScript. Worked on
								several projects that use JavaScript and associated frameworks
								like Node, React, NEXT, MongoDB, and Express.
							</li>
							<li>
								SQL - Excellent knowledge in SQL. Can easily create tables,
								databases, and integrate them with several programming
								languages.
							</li>
							<li>
								Data Modelling - Has very good skills in data modelling. Knows
								concepts like feature selection, predictive imputation, and
								hyperparameter tuning.
							</li>
							<li>
								Machine Learning - Excellent in-depth knowledge about machine
								learning algorithms like Naïve Bayes, Random Forest, ARIMA,
								SARIMAX, AdaBoost, etc.
							</li>
							<li>
								Natural Language Processing - Knows how to implement techniques
								like vectorization, stop word elimination, and labeling.
							</li>
							<li>
								MS Word - Excellent proficiency in using Microsoft Word. Can
								easily handle how to add tables, graphs, and charts, which could
								be really good for analytics work.
							</li>
							<li>
								MS Excel - Moderate proficiency in MS Excel. Can enter, search
								through, and sort queries in MS Excel. Knows how to program
								basic things in MS Excel.
							</li>
							<li>
								MS PowerPoint - Excellent proficiency in PowerPoint. Can
								integrate charts, graphs, and images in PowerPoint to make very
								impressive slides.
							</li>
						</ul>

						<h3 className="aboutheading">Soft skills</h3>
						<ul>
							<li>
								Communication skills – Had an 8.0 IELTS score and very
								proficient in the English language. Know how to interact and
								collaborate in a team environment.
							</li>
							<li>
								Adaptability - Can adapt to any situation, be it a busy office
								hour or an unrealistic deadline. Can learn new technologies very
								fast for the betterment of the firm.
							</li>
							<li>
								Self-Driven Learning - Motivated to learn anything by myself. If
								something is very challenging, I won’t hesitate to ask for help
								from my colleagues.
							</li>
						</ul>

						<h2 className="aboutheading">Projects</h2>
						<ul>
							<li>
								JavaScript based Hotel booking site. The site is mostly a dummy
								frontend site with some elements working like the contacts page.
								The site is fully developed using NEXT.js platform and hosted on
								netlify. Most of the CSS is purely hand written rather than
								using a framework. Link to the project is provided{' '}
								<a
									href="https://kuku-residency-test.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									here
								</a>
								.
							</li>
							<li>
								JavaScript based Web app that shows the vaccine availability in
								Kerala, India. The Web app makes use of the free government
								Arogya Setu API. Please note that the web app will cease to work
								once the API discontinues. Link to the Web app is provided{' '}
								<a
									href="https://vaccineavailability.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									here
								</a>
								.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
