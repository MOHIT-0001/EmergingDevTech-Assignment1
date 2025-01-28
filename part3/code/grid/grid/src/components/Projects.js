import React from 'react';

const Projects = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#ebf6fa', margin: 0, padding: 0 }}>
      <header style={{ backgroundColor: '#001F3F', color: '#fff', padding: '10px 20px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center' }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Mohit's Portfolio</div>
      </header>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Projects</h2>
      <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>

        <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '15px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)' }}>
          <div style={{ fontWeight: 600, marginBottom: '20px' }}>Curastor Healthcare Solutions</div>
          <div>Deliver high quality code and supports peers in quality checks such that design requirements are met.
            Leveraged React hooks to simplify component logic, improving readability and reducing re-renders by 30%.
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '15px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)' }}>
          <div style={{ fontWeight: 600, marginBottom: '20px' }}>Service-based websites</div>
          <div>Implemented figma designs with MUI, Tailwind, and Bootstrap, improving UI responsiveness by 30%.
            Implemented React, Redux, and ES6 fixes, increasing user satisfaction by 20%.
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '15px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)' }}>
          <div style={{ fontWeight: 600, marginBottom: '20px' }}>University Applications</div>
          <div>Implemented client UI modifications and API changes as specified.
            Optimised code, reducing loading times by 40% and codebase size by 25%.
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '15px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)' }}>
          <div style={{ fontWeight: 600, marginBottom: '20px' }}>Restaurant Application</div>
          <div>Developed the application from scratch, adhering to a well-defined architecture throughout the process.</div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
