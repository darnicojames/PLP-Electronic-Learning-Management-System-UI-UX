/**
 * Shared Components for PLP ELMS
 */

const components = {
  navbar: `
    <nav class="navbar">
      <a href="home.html" class="logo-container">
        <img src="https://api.builder.io/api/v1/image/assets/TEMP/dd3db7f4df3a24814cb1e712ad58474ebac6e0f9" alt="PLP Logo" class="logo-img">
        <span class="brand-name">PLP ELMS</span>
      </a>
      <ul class="nav-links">
        <li><a href="home.html" data-page="home">Home</a></li>
        <li><a href="program.html" data-page="program">Program</a></li>
        <li><a href="subject.html" data-page="subject">Subject</a></li>
        <li><a href="research.html" data-page="research">Research</a></li>
        <li><a href="about.html" data-page="about">About</a></li>
      </ul>
      <div class="auth-buttons">
        <a href="login-student.html" class="btn btn-outline">Login</a>
        <a href="index.html" class="btn btn-primary">Sign Up</a>
      </div>
    </nav>
  `,
  footer: `
    <footer>
      <div class="footer-grid">
        <div class="footer-col">
          <div class="logo-container" style="margin-bottom: 20px;">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/dd3db7f4df3a24814cb1e712ad58474ebac6e0f9" alt="PLP Logo" class="logo-img" style="filter: brightness(0) invert(1);">
            <span class="brand-name" style="color: white;">PLP ELMS</span>
          </div>
          <p style="color: #888; font-size: 14px;">Dedicated to providing quality digital education to the citizens of Pasig City. Empowering the youth through technology and innovation.</p>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="program.html">Academic Programs</a></li>
            <li><a href="research.html">Research Center</a></li>
            <li><a href="about.html">About Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Technical Support</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact Us</h4>
          <p style="color: #888; font-size: 14px; margin-bottom: 10px;">📍 Alcalde Jose St, Kapasigan, Pasig, Metro Manila</p>
          <p style="color: #888; font-size: 14px; margin-bottom: 10px;">📧 info@plpasig.edu.ph</p>
          <p style="color: #888; font-size: 14px;">📞 (02) 8643 9431</p>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; 2026 Pamantasan ng Lungsod ng Pasig. All rights reserved.
      </div>
    </footer>
  `
};

function initSharedComponents() {
  const header = document.getElementById('header-component');
  const footer = document.getElementById('footer-component');
  
  if (header) {
    header.innerHTML = components.navbar;
    // Set active link
    const currentPage = header.getAttribute('data-active');
    if (currentPage) {
      const activeLink = header.querySelector(`[data-page="${currentPage}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  }
  
  if (footer) {
    footer.innerHTML = components.footer;
  }
}

document.addEventListener('DOMContentLoaded', initSharedComponents);
