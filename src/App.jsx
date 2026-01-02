import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="wrapper">
      <header className="hero-header">
        <div className="header-container">
          {/* Photo Section */}
          <div className="photo-container">
            {photo ? (
              <img 
                src={photo} 
                alt="Profile" 
                className="profile-photo"
              />
            ) : (
              <div className="photo-placeholder">
                Professional Photo
              </div>
            )}
            <div className="upload-hint">
              Click to upload photo
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                cursor: 'pointer'
              }}
            />
          </div>

          {/* Header Content */}
          <div className="header-content">
            <h1>K.C. AJITH KUMAR</h1>
            <p className="header-subtitle">
              Senior Manager – Spare Parts (Stores) & International Sales
            </p>
            <div className="contact-row">
              <div className="contact-item">+91 9207854405</div>
              <div className="contact-item">ajithsreedu@yahoo.co.in</div>
              <div className="contact-item">India / GCC Experience</div>
            </div>
          </div>
        </div>
      </header>

      <main className="main-wrapper">
        <section className="cv-section">
          <div className="section-label"><h2>Overview</h2></div>
          <div className="section-content">
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: 0, color: '#4a5568' }}>
              Qualified and talented professional with 24 years of experience in the Automobile Spare parts field. 
              Dedicated to utilizing strong organizational and communication skills in challenging, creative environments.
            </p>
          </div>
        </section>

        <section className="cv-section">
          <div className="section-label"><h2>Experience</h2></div>
          <div className="section-content">
            <div className="experience-item">
              <h3 className="job-role">Manager – Spare Parts (Stores)</h3>
              <span className="company-details">Popular Mega Motors (P) Ltd. | July 2016 to Present</span>
              <ul className="bullet-list">
                <li>Managing 23 branch service stores within the state for spares ordering</li>
                <li>Arranging critical spares from other dealers for TATA Motors Ltd</li>
                <li>Daily review of breakdown vehicles and status updates</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3 className="job-role">Senior Sales Officer – Exports</h3>
              <span className="company-details">Global Trading Centre Fzco. (Dubai) | 2012</span>
              <ul className="bullet-list">
                <li>Responsible for CAT & Komatsu spare parts sales (Mannai Corporation)</li>
                <li>Vast exposure to GCCI, Middle East, and IRAN market scenarios</li>
                <li>Expertise in UAE re-export documentation and Customs Duty Drawback</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <div className="section-label"><h2>Systems</h2></div>
          <div className="section-content">
            <div className="skills-grid">
              <div className="skill-tag">SAP</div>
              <div className="skill-tag">CRMDMS</div>
              <div className="skill-tag">AS 400</div>
              <div className="skill-tag">INTEGRA</div>
              <div className="skill-tag">SIS (CAT)</div>
              <div className="skill-tag">Link One</div>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <div className="section-label"><h2>Education</h2></div>
          <div className="section-content">
            <div className="education-grid">
              <div className="education-item">
                <strong>B.Com Graduate</strong>
                <p>Pt. Ravi Shankar Shukla University</p>
              </div>
              <div className="education-item">
                <strong>Languages</strong>
                <p>English, Hindi, Malayalam, Arabic (Starting)</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="navy-footer">
        <div className="footer-content">
          <p>K.C. AJITH KUMAR | Passport: C8201832</p>
          <p className="footer-disclaimer">
            Information provided is true and accurate to the best of my knowledge
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;