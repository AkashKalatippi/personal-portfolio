import { Container } from "react-bootstrap";

export const Education = () => {

  const education = [
    { institute: "Acharya Institute of Technology", degree: "Master of Computer Applications (MCA)", year: "2025 – 2027", status: "Currently Pursuing" },
    { institute: "KLE Society’s Shri Shivayogi Murughendra Swamiji BCA College", degree: "Bachelor of Computer Applications (BCA)", year: "2022 – 2025" },
    { institute: "Sai Niketan PU Science College", degree: "PUC – Science", year: "2020 – 2022" },
    { institute: "Swami Vivekanand International Public School (CBSE)", degree: "Schooling", year: "2009 – 2020" }
  ];

  return (
    <section className="edu-galaxy" id="education">
      <Container>
        <h2 className="skill-title">Education</h2>

        <div className="edu-grid">
          {education.map((edu, i) => (
            <div className="edu-card" key={i}>
              <h4>{edu.institute}</h4>
              <h6>{edu.degree}</h6>
              <span>{edu.year}</span>
              {edu.status && <p>{edu.status}</p>}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
