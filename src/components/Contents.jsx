import React, { useRef, useState, useEffect } from "react";
import { HiBars4 } from "react-icons/hi2";
// ${fadeIn ? 'fade-in-x' : ''}`} <- Fade In Command

function Contents() 
{
  const cardsContainerRef = useRef(null); // Gets Card Container
  const [fadeIn, setFadeIn] = useState(false); // Gets Fade

  function TitleClick() {
    const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;

    if (cardsContainerRef.current) {
      cardsContainerRef.current.style.backgroundColor = color;
    }
  }

  function LearnMore1() {
    alert(
      "A creation where I made various different shapes, as well as switching between different audio files while using Python. \n\nThe shapes here were made by the turtle movement, and it changes color throughout the different shapes too. I did end up using some royalty free audio for this project. \n\nYeah, I don't know what these shapes look like either."
    );
  }

  function LearnMore2() {
    alert(
      "Another Python Project. \n\nSimilarly to the previous project, I made the turtle form shapes to resemble a house landscape, along with some other decorations that were added to clear up some of the empty space. \n\nThis has used circles for the majority of the drawing, mainly at the near bottom to help it feel more colorful, or to make it look like a paint palette or colored rocks."
    );
  }

  function LearnMore3() {
    alert(
      "This project is a game made in Unity. \n\nThis was one of the first Unity project I ended up making, so its gameplay is identical to that of Flappy Bird. This project does use button and collision triggers, a score system, and a particle system to pass by the scene to vision clouds passing by."
    );
  }

  function SendMessage(e) {
    e.preventDefault();
    alert("Message Sent! Thank you for contacting.");
  }

  useEffect(() => 
  {
    setFadeIn(true);
  }, []);

  return (
    <>
    <div className="about-container">
      <div className={`container-fluid p-lg-2 bg-primary text-white text-center fw-bold ${fadeIn ? 'fade-in-0' : ''}`} style={{ width: "50%" }}>
        <h1>My Portfolio</h1>
      </div>

      {/* About Me */}
      <div className={`about-container mt-5 ${fadeIn ? 'fade-in-0' : ''}`} style={{ width: "100%" }}>
          <div className="about-container p-lg-0.2 bg-danger text-white text-center fw-bold" style={{ width: "100%" }}>
            <h2>About Me</h2>
          </div>

          <div className="text-center">
            <p>
              Hello. My name is Matt. <br /> 
              While studying entertainment in multimedia computing, I've created projects that have been often related towards development and programming.  <br />
              I am still studying, so a lot of the works I ended up creating were mostly made for school projects.<br /> 
              Down below is some of the projects and works that I created.<br />
            </p>
          </div>
        </div>
       <br />


      {/* Projects */}
      <div className={`my-2 border-warning ${fadeIn ? 'fade-in-1' : ''}`}>
        <h2 className="text-center card bg-success text-white">Projects</h2>
      </div>

       <div className={`cards-container ${fadeIn ? 'fade-in-1' : ''}`} ref={cardsContainerRef}>
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <div className="card text-center mx-auto" style={{ width: "18rem" }}>
              <div className="card-img-container">
                <img className="card-img-top" src="/assets/P1.png" alt="Card image cap"/>
                <div className="overlay">Python</div>
              </div>


              <div className="card-body">
                <h5 className="card-title" onClick={TitleClick}>
                  Forming Different Shapes
                </h5>
                <p className="card-text">A Python creation made for a project.</p>
                <button className="btn btn-primary" onClick={LearnMore1}>
                  Learn More
                </button>
              </div>
            </div>
          </div>


          <div className="col-sm-4">
            <div className="card text-center mx-auto" style={{ width: "18rem"}}>
              <div className="card-img-container">
                <img className="card-img-top" src="/assets/P2.png" alt="Card image cap" />
                <div className="overlay">Python</div>
              </div>


              <div className="card-body">
                <h5 className="card-title" onClick={TitleClick}>
                  House Landscape
                </h5>
                <p className="card-text">A Python creation made for a project.</p>
                <button className="btn btn-primary" onClick={LearnMore2}>
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card text-center mx-auto" style={{ width: "18rem" }}>
              <div className="card-img-container">
                <img className="card-img-top" src="/assets/P3.png" alt="Card image cap" />
                <div className="overlay">Unity</div>
              </div> 

              <div className="card-body">
                <h5 className="card-title" onClick={TitleClick}>
                  Prototype Flapping Bird
                </h5>
                <p className="card-text">A Unity game uploaded for a project.</p>
                <button className="btn btn-primary" onClick={LearnMore3}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={`container mt-5 ${fadeIn ? 'fade-in-2' : ''}`}>
          <div className="card border-info mb-3" style={{ paddingBottom: 50 }}> 
            <h2 className="text-center bg-secondary text-white">Contact Me</h2><br></br>
            <form onSubmit={SendMessage}>
              <div className="mx-auto">
                <label htmlFor="name" className="form-label card text-center fw-bold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control border-warning"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mx-auto" style={{ paddingTop: 40 }}>
                <label htmlFor="email" className="form-label card text-center fw-bold">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control border-warning"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mx-auto" style={{ paddingTop: 40 }}>
                <label htmlFor="message" className="form-label card text-center fw-bold">
                  Your Message
                </label>
                <textarea
                  className="form-control border-warning"
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Enter your message"
                  required
                />
              </div>

              <div className="text-center fw-bold" style={{ paddingTop: 40 }}>
                <button type="submit" className="btn btn-primary border-success">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Contents;