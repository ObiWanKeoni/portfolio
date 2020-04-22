import * as React from "react";
import assets from "../libs/assets";
import Orbital from "./common/spinner";
import { VideoScroll } from "react-video-scroll";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: 0,
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  onScroll = (props) => {
    console.log(props.currentFrame);
    this.setState({ frame: props.currentFrame });
  };

  componentDidMount() {
    fetch("https://api.github.com/users/KeoniGarner/repos?sort=updated")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.slice(0, 6),
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    const img = assets("./images/picture.JPG");
    const logoWhite = assets("./images/logo-white.png");
    // const video = assets("./videos/Reveal.mp4");
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Orbital />;
    } else {
      return (
        <div>
          <div id="information" className="container h-100 align-items-center">
            <img id="logo" src={logoWhite} alt="Bug Squash" height="50px" />
            <div className="row h-100 align-items-center">
              <div className="col" />
              <div className="col-md-12 col-lg-8 mx-auto align-items-center text-center">
                <div id="picture" className="mx-auto">
                  <img src={img} alt="Keoni Garner" />
                </div>
                <h1>Keoni Garner</h1>
                <h6>Software Engineer</h6>
                <p>Location: Bakersfield, CA</p>
                <p>Phone: +1 (661) 858-8470</p>
                <p>Email: keoni_garner@yahoo.com</p>
              </div>
              <div className="col" />
            </div>
          </div>

          <div id="about" className="h-100">
            <div className="row h-100">
              <div className="col-md-4 col-sm-1 col-xs-1"></div>
              <div className="col-md-8 col-sm-11 col-xs-11 portfolio-container">
                <p className="welcome-p">Software Engineer,</p>
                <p className="welcome-p">Clean Code,</p>
                <p className="welcome-p">and the Oxford Comma.</p>
              </div>
            </div>
          </div>

          <div id="portfolio">
            <div className="container h-100">
              {/* <VideoScroll
                playbackRate={1000}
                className="video"
                onScroll={this.onScroll}
              >
                <video
                  tabIndex="0"
                  autobuffer="autobuffer"
                  preload="preload"
                  playsInline
                  className="video"
                >
                  <source type="video/mp4" src={video} />
                </video>
              </VideoScroll> */}
              <div className="row h-100">
                <div className="col-md-4 col-sm-0 col-xs-0" />
                <div className="col-md-8 col-sm-12 col-xs-12 portfolio-container">
                  <div id="resume">
                    <h1>RESUME</h1>
                    <hr />
                    <h4>EXPERIENCE</h4>
                    <p>
                      <strong>Avadine </strong>| Bakersfield, CA / Remote August
                      2018 - Present
                    </p>
                    <p>Senior Software Engineer</p>
                    <p>
                      Developed software projects using Python and Java to
                      provide a view of industrial processes for operators.
                      Learned embedded systems protocols to connect devices to
                      the aforementioned software projects. Scripted in C# to
                      provide additional functionality to the analytics screens
                      used by executive leadership.
                    </p>
                    <ul>
                      <li>
                        Mentored a team of 4-6 developers across multiple
                        simultaneous software projects.
                      </li>
                      <li>
                        Conducted 30/60/90% review meetings with operators.
                      </li>
                      <li>
                        Improved existing processes by implementing UI/UX
                        guidelines and drastically improving performance and
                        quality of data collection.
                      </li>
                      <li>Managed a subsection of total company clients.</li>
                      <li>
                        Implemented LEAN processes, version control, test-driven
                        development, and peer reviews.
                      </li>
                    </ul>
                    <p>
                      <strong>Freelance </strong>| Bakersfield, CA / Remote
                      November 2016 - August 2018
                    </p>
                    <p>Software Engineer</p>
                    <p>
                      Worked part-time for Taft College to develop custom
                      software projects in C# and Python and to mentor the C++
                      instructor on modern software tools and techniques. On my
                      off time, I worked on projects for clients on
                      Freelancer.com - creating websites, games, and
                      applications.
                    </p>
                    <ul>
                      <li>
                        Developed an enterprise-level software application to
                        automate tedious tasks - Allowed Taft College to
                        maintain their accredited status.
                      </li>
                      <li>
                        Created an Automatic Grading program in Python to assist
                        the C++ instructor with checking the outputs of a
                        project.&nbsp;
                      </li>
                    </ul>
                    <hr />
                    <h4>NOTABLE PROJECTS</h4>
                    <div className="portfolio-item-container">
                      {items.map((repo) => {
                        return (
                          <div className="card portfolio-item">
                            <div className="card-body">
                              <a href={repo.html_url}>
                                <h6 className="card-title">{repo.name}</h6>
                              </a>
                              <p className="card-body">{repo.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <hr />
                    <h4>EDUCATION</h4>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <p>
                              <strong>Taft College (2015 - 2017)</strong>
                            </p>
                            <p>Associate&rsquo;s | Business Administration</p>
                          </td>
                          <td>
                            <p> </p>
                          </td>
                          <td>
                            <p>
                              <strong>Coding Dojo Bootcamp (2017)</strong>
                            </p>
                            <p>Python Black Belt Certification</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                    <h4>HOBBIES</h4>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <ul>
                              <li>Game Development</li>
                              <li>Creative Writing</li>
                              <li>Collaborative Board Games</li>
                            </ul>
                          </td>
                          <td>
                            <ul>
                              <li>Dancing&nbsp;</li>
                              <li>Music</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
