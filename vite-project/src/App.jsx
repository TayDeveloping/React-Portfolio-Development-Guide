import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import './main.css';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                {/* About Me Section */}
                <section id="about">
                    <h2>About Me</h2>
                    <img src="/path/to/your/avatar.jpg" alt="Your Avatar" />
                    <p>Your bio goes here. Add a brief description of yourself, your skills, and your experience.</p>
                </section>

                {/* Portfolio Section */}
                <section id="portfolio">
                    <h2>Portfolio</h2>
                    <div className="projects">
                        <Project 
                            title="Project Title 1"
                            image="/path/to/project1-screenshot.jpg"
                            deployedLink="https://link-to-your-deployed-app.com"
                            githubLink="https://github.com/your-username/repo-name"
                        />
                        <Project 
                            title="Project Title 2"
                            image="/path/to/project2-screenshot.jpg"
                            deployedLink="https://link-to-your-deployed-app.com"
                            githubLink="https://github.com/your-username/repo-name"
                        />
                        <Project 
                            title="Project Title 3"
                            image="/path/to/project3-screenshot.jpg"
                            deployedLink="https://link-to-your-deployed-app.com"
                            githubLink="https://github.com/your-username/repo-name"
                        />
                        <Project 
                            title="Project Title 4"
                            image="/path/to/project4-screenshot.jpg"
                            deployedLink="https://link-to-your-deployed-app.com"
                            githubLink="https://github.com/your-username/repo-name"
                        />
                        <Project 
                            title="Project Title 5"
                            image="/path/to/project5-screenshot.jpg"
                            deployedLink="https://link-to-your-deployed-app.com"
                            githubLink="https://github.com/your-username/repo-name"
                        />
                        <Project 
                            title="Project Title 6"
                            image="/path/to/project6-screenshot.jpg"
                            deployedLink="https://link-to-your-deployed-app.com"
                            githubLink="https://github.com/your-username/repo-name"
                        />
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact">
                    <h2>Contact Me</h2>
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" required />
                        <button type="submit">Send</button>
                    </form>
                </section>

                {/* Resume Section */}
                <section id="resume">
                    <h2>Resume</h2>
                    <a href="/path/to/your/resume.pdf" download>Download My Resume</a>
                    <h3>Proficiencies</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;