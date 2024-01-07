import '../src/components/StyleSheets/Projectspage.css';
import photo1 from './components/images/project1img.jpg';
import photo2 from './components/images/project2img.jpg';

function Projectpage() {
	const projects = [
		{
			name: 'Project 1',
			photoLink: photo1,
			content:
				'A website designed to check COVID-19 Vaccines across kerala. The website is now unfortunately defunct due to the discontinuation of the free API provided by the Indian Govwrnment',
			link: 'https://vaccineavailability.netlify.app/',
		},
		{
			name: 'Project 2',
			photoLink: photo2,
			content:
				'A website designed for a residency in Thrissur District of Kerala. The website provided only has the frontend side of the website. it contains several elements that are purely made out of base CSS> the website is done on NEXT.js Platform.',
			link: 'https://kuku-residency-test.netlify.app/',
		},
	];

	return (
		<div className="projectpage">
			{projects.map((project) => (
				<div key={project.name} className="projectpagecontainer">
					<div className="projectpictureframe">
						<img src={project.photoLink} className="projectpictureframe" />
					</div>
					<div className="project_body_writeup">
						<div className="project_body_text">{project.content}</div>
						<div className="projectbuttoncontainer">
							<a href={project.link}>
								<div className="learn_btnp">to site!</div>
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Projectpage;
