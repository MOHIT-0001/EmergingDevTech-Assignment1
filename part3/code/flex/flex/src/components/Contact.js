import React from 'react';

const Contact = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#ebf6fa', margin: 0, padding: 0 }}>
      <header style={{ backgroundColor: '#001F3F', color: '#fff', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Mohit's Portfolio</div>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '15px', textAlign: 'center', width: '200px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p>Email: <a href="mailto:punimohit.13@gmail.com" style={{ color: '#001F3F', textDecoration: 'none', fontWeight: 'bold' }}>punimohit.13@gmail.com</a></p>
        </div>
        <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '15px', textAlign: 'center', width: '200px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p>GitHub: <a href="https://github.com/MOHIT-0001" target="_blank" rel="noopener noreferrer" style={{ color: '#001F3F', textDecoration: 'none', fontWeight: 'bold' }}>github.com/MOHIT-0001</a></p>
        </div>
        <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '15px', textAlign: 'center', width: '200px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p>Phone: 437-297-7734</p>
        </div>
        <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '15px', textAlign: 'center', width: '200px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/mohit-punia/" target="_blank" rel="noopener noreferrer" style={{ color: '#001F3F', textDecoration: 'none', fontWeight: 'bold' }}>linkedin.com/in/mohit-punia/</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
