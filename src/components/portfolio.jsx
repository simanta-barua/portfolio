import React from "react";
import Slider from "./slider";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">My Recent Projects</h3>
                <p className="subtitle-a">Here my some recent project</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div>
            <Slider />
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
