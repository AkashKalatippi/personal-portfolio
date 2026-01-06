import cprogramming from "../assets/img/cprograming.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import python from "../assets/img/python.png";
import excel from "../assets/img/excel.png";
import powerbi from "../assets/img/powerbi.png";
import mysql from "../assets/img/mysql.png";
import aws from "../assets/img/aws.png";
import java from "../assets/img/java.png";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>“Here’s a Comprehensive Snapshot of My Technical Expertise, Spanning Cloud Computing, Programming, Web Development, Databases, and Data Analytics, Demonstrating My Ability to Build Robust, Scalable, and Data-Driven Solutions Across Multiple Platforms and Technologies.”</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
  <img src={html} alt="HTML" />
  <h5>HTML</h5>
</div>

<div className="item">
  <img src={mysql} alt="MySQL" />
  <h5>MySQL</h5>
</div>

<div className="item">
  <img src={css} alt="CSS" />
  <h5>CSS</h5>
</div>


<div className="item">
  <img src={java} alt="Java" />
  <h5>Java</h5>
</div>

<div className="item">
  <img src={python} alt="Python" />
  <h5>Python</h5>
</div>

<div className="item">
  <img src={excel} alt="Excel" />
  <h5>Excel</h5>
</div>

<div className="item">
  <img src={powerbi} alt="Power BI" />
  <h5>Power BI</h5>
</div>

<div className="item">
  <img src={aws} alt="AWS" />
  <h5>AWS Cloud</h5>
</div>

<div className="item">
  <img src={cprogramming} alt="C Programming" />
  <h5>C Programming</h5>
</div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
