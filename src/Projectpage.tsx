import '../src/components/StyleSheets/Projectspage.css';
import photo1 from './components/images/project1img.jpg';
import photo2 from './components/images/project2img.jpg';
import photo3 from './components/images/photo3.jfif';
import photo4 from './components/images/photo4.jfif';
import photo5 from './components/images/photo5.jfif';

function Projectpage() {
	const projects = [
		{
			name: 'UK GDP Analysis',
			photoLink: photo5,
			content:
				' A comprehensive analysis of UK GDP. Many important multivariate and univariate analysis has been done on raw GDP data. Important metrics and patterns that directly contribute to UK GDP has been found.',
			link: 'https://www.kaggle.com/code/georgy007/uk-gdp-analysis',
			Skills: 'Python,Pandas,Numpy,ScikitLearn',
		},
		{
			name: 'Breast Cancer Analysis',
			photoLink: photo4,
			content:
				'Analysis of Breast cancer using the BreakHIS dataset. Standard data transformation techniques like scaling,rotation and flattening has been applied using tensorflow. The result has been analysed through both deep learning models and machine learning models . Deep learning models proven to deduce much more information from image data.',
			link: 'https://www.kaggle.com/code/georgy007/breast-cancer-analysis',
			Skills: 'Python, Pandas, Tensorflow, ScikitLearn',
		},
		{
			name: 'AI powered stock market dashboard',
			photoLink: photo3,
			content:
				' AI powered stockmarket dashboard that visualises stock data. It is equipped with an AI agent that will answer basic FAQs about the metrics in general. The AI agent is powered by a phi-2 model.',
			link: 'https://github.com/agentblues22/Frontend_stock',
			Skills: 'Ollama, Fast API,phi-2,React,Plotly',
		},
		{
			name: 'Vaccine availabilty Webapp',
			photoLink: photo1,
			content:
				'A website designed to check COVID-19 Vaccines across Kerala. The website is now unfortunately defunct due to the discontinuation of the free API provided by the Indian Government',
			link: 'https://vaccineavailability.netlify.app/',
			Skills: 'React,Node,HTML,CSS',
		},
		{
			name: 'Hotel Booking Site',
			photoLink: photo2,
			content:
				'A website designed for a residency in Thrissur District of Kerala. The website provided only has the frontend side of the website. it contains several elements that are purely made out of base CSS. The website is done on NEXT.js Platform.',
			link: 'https://kuku-residency-test.netlify.app/',
			Skills: 'NEXT.js,Node,HTML,CSS',
		},
	];

	return (
		<div className="projectsback">
			<div className="projectpage">
				{projects.map((project) => (
					<div key={project.name} className="projectpagecontainer">
						<div className="projectpictureframe">
							<img src={project.photoLink} className="projectpictureframe" />
						</div>
						<div className="project_body_writeup">
							<div className="project_heading">{project.name}</div>
							<div className="project_body_text">{project.content}</div>
							<div className="Skillset">
								<b>Tools Used:</b>
								{project.Skills}
							</div>
							<div className="projectbuttoncontainer">
								<a href={project.link}>
									<div className="learn_btnp">to site!</div>
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projectpage;
