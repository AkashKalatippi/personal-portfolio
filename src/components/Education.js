import { Container } from "react-bootstrap";
import { useEffect, useRef } from "react";

export const Education = () => {
  const cardsRef = useRef([]);

  const education = [
    {
      institute: "Acharya Institute of Technology",
      degree: "Master of Computer Applications (MCA)",
      year: "2025 – 2027",
      status: "Currently Pursuing",
    },
    {
      institute:
        "KLE Society’s Shri Shivayogi Murughendra Swamiji BCA College",
      degree: "Bachelor of Computer Applications (BCA)",
      year: "2022 – 2025",
    },
    {
      institute: "Sai Niketan PU Science College",
      degree: "PUC – Science",
      year: "2020 – 2022",
    },
    {
      institute: "Swami Vivekanand International Public School (CBSE)",
      degree: "Schooling",
      year: "2009 – 2020",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="edu-galaxy" id="education">
      {/* Galaxy background */}
      <div className="stars"></div>
      <div className="twinkling"></div>

      <Container>
        <h2 className="skill-title">Education</h2>

        <div className="edu-grid">
          {education.map((edu, i) => (
            <div
              className="edu-card fade-up"
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <span className="edu-year">{edu.year}</span>
              <h4>{edu.institute}</h4>
              <h6>{edu.degree}</h6>
              {edu.status && (
                <p className="edu-status">{edu.status}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
