import React from "react";
import "./About.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

interface AboutSection {
  id: number;
  image: string;
  title: string;
  content: string;
}

const aboutSections: AboutSection[] = [
  {
    id: 1,
    image: "/images/about5.png",
    title: "Our Vision",
    // content: "We aim to provide quality toys for children of all ages, inspiring creativity and joy."
    content:"At Kiddokart, we are passionate about providing high-quality toys that inspire creativity, learning, and fun for children of all ages. Our mission is to create a joyful shopping experience for parents and caregivers while offering a wide selection of safe and engaging toys."
  },
  {
    id: 2,
    image: "/images/about4.png",
    title: "Our Mission",
    // content: "To make shopping for kids easy, fun, and safe, with toys that bring learning and play together."
    content:" Our goal is to bring a wide range of safe, high-quality, and exciting toys for kids of all ages. From action toys and educational games to soft toys and toy vehicles, we carefully select products that make playtime enjoyable and meaningful."
  },
  {
    id: 3,
    image: "/images/about1.png",
    title: "Our Values",
    content: "We value quality, safety, and customer satisfaction above everything else."
  },
  {
    id: 4,
    image: "/images/about2.png",
    title: "Our Team",
    content: "A passionate team working hard to bring smiles to children’s faces everywhere."
  },
  {
    id: 5,
    image: "/images/about3.jpg",
    title: "Our Promise",
    content: "We promise to deliver toys that are not only fun but also educational and safe."
  }
];

const About: React.FC = () => {
  return (
    <>

    <Header />
    <div className="container about-block">
        {aboutSections.map((section, index) => (
          <div
            key={section.id}
            className={`about-section ${index % 2 === 0 ? "left-image" : "right-image"}`}
          >
            <div className="about-image">
              <img src={section.image} alt={section.title} />
            </div>
            <div className="about-content">
              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>
     <Footer/>
    </>
  );
};

export default About;