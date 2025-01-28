import React from 'react';

const Home = () => {
  return (
    <div>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ebf6fa;
          }

          .intro-box {
            width: 100%;
            height: 25vh;
            background-color: #F8F9FA;
            display: grid;
            place-items: center;
          }

          .intro-box h1 {
            color: black;
            margin: 0;
            font-size: 36px;
            font-weight: bold;
          }

          .intro-box p {
            margin: 10px 0 0 0;
            font-size: 18px;
            color: black;
          }

          .content {
            display: grid;
            place-items: center;
            min-height: 100vh;
            padding: 20px;
          }

          h2 {
            color: #333;
            margin-bottom: 20px;
          }

          .experience-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
          }

          .experience-card {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s;
          }

          .education-card {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s;
            width: 70%;
            margin: 30px auto 0;
          }

          .experience-card:hover {
            transform: scale(1.05);
          }

          .experience h3 {
            color: #333;
          }

          .experience p {
            color: #555;
            font-size: 14px;
            line-height: 1.6;
          }

          .education {
            margin-top: 30px;
            text-align: center;
          }

          @media (max-width: 768px) {
            .experience-container {
              grid-template-columns: 1fr;
              gap: 15px;
            }

            .education-card {
              width: 90%;
            }

            .intro-box h1 {
              font-size: 28px;
            }

            .intro-box p {
              font-size: 16px;
            }

            h2 {
              font-size: 24px;
            }

            .experience-card {
              padding: 15px;
            }
          }

          @media (max-width: 480px) {
            .intro-box h1 {
              font-size: 24px;
            }

            .intro-box p {
              font-size: 14px;
            }

            h2 {
              font-size: 20px;
            }

            .experience-card {
              padding: 10px;
            }
          }
        `}
      </style>

      <div className="intro-box">
        <h1>Mohit</h1>
        <p>React Developer | Next Developer | Node Developer | MERN Developer</p>
      </div>

      <div className="content">
        <h2>Experience</h2>
        <div className="experience-container">
          <div className="experience-card">
            <h3>Vourie Technology Solutions - 2 Years</h3>
            <div style={{ fontWeight: 600, marginBottom: '20px' }}>Technologies</div>
            <div>React Native, NextJS, Expo, NodeJS, ExpressJS, MongoDB, REST APIs, Tailwind CSS, Bootstrap, TypeScript, Git, Bitbucket, Agile Development Practices</div>
            <p>Multi-customer web development: Built and updated websites and applications for 10+ customers using the latest practices in ReactJS, React Native, NextJS, Expo, ExpressJS, MongoDB.</p>
            <p>Advanced ReactJS, ExpressJS practices: Utilized React hooks, state management, event handling, ExpressJS routing and REST API development, reducing code complexity by 25% and increasing team productivity by 15%.</p>
            <p>Git version control and collaboration: Utilized Git for version control and collaborated on projects using Bitbucket, ensuring efficient code management and seamless team integration.</p>
          </div>
          <div className="experience-card">
            <h3>UE Developer - 1.5 Years</h3>
            <div style={{ fontWeight: 600, marginBottom: '20px' }}>Technologies</div>
            <div>HTML, CSS, ReactJS, Redux, Figma, VS Code, GitHub, JavaScript, Responsive Design, Component Libraries, MUI (Material-UI), JSON, AJAX, Cross-Browser Compatibility</div>
            <p>Team collaboration: Teamed with 10+ members to upgrade 40+ customer websites to meet industry norms.</p>
            <p>Efficient component library development: Designed and developed a reusable component library for future use, resulting in a 40% reduction in development time for new projects.</p>
            <p>Figma design implementation: Implemented new Figma designs into websites using best practices in HTML5, CSS3, and ReactJS, React Native, NextJS ensuring responsive, accessible, and high-performance applications.</p>
          </div>
        </div>

        <h2 style={{ marginTop: '30px' }}>Education</h2>
        <div className="education-card">
          <div className="education">
            <p>PG Diploma (Computer Software & Database Development) - Loyalist College, Toronto</p>
            <p>BSc in Mathematics - NorthCap University, Gurugram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
