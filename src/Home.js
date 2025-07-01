import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";





const Home = () => (

<div className="home-page">
    <Carousel fade interval={1000}>
      <Carousel.Item>
        <img
          className="d-block w-100 fullscreen-section"
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Nature View"
        />
        <Carousel.Caption>
          <h3>Explore Nature</h3>
          <p>Discover the world's beauty with stunning landscapes.</p>

        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 fullscreen-section"
          src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
          alt="Workplace"
        />
        <Carousel.Caption>
          <h3>Work Smarter</h3>
          <p>Design your productivity workspace for maximum efficiency.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 fullscreen-section"
          src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1200&q=80"
          alt="Technology"
        />
        <Carousel.Caption>
          <h3>Tech Innovation</h3>
          <p>Stay ahead with the latest in tech and design trends.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Home;
