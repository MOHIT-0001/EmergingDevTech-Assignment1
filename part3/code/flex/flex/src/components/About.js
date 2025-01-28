import React from 'react';
import myImage from '../images/image.png'; // Adjust path based on your folder structure


const About = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#ebf6fa' }}>
      <h2 style={{ fontWeight: '600', fontSize: '30px', textAlign: 'center' }}>About Me</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        textAlign: 'left',
        padding: '20px',
        gap: '20px'
      }}>
        <div style={{
          flexShrink: 0,
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}>
      <img src={myImage} alt="Image Description"  style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
          }}  />
       
        </div>
        <div style={{ maxWidth: '600px' }}>
          <p>
            Hi, I’m Mohit Punia, a Full Stack Developer currently pursuing an Ontario College Graduate Certificate in
            Computer Software & Database Development at Loyalist College, Toronto. I have 3+ years of experience in web
            and mobile application development, specializing in ReactJS, React Native, NextJS, Expo, NodeJS, and
            MongoDB. I’ve worked on diverse projects, including healthcare solutions, service-based websites, and
            university applications, delivering optimized, user-friendly solutions. My expertise lies in collaborating
            with teams, implementing Figma designs, and creating efficient, reusable components. I’m passionate about
            crafting innovative solutions and continuously improving my skills in dynamic environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
