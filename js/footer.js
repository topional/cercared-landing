class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class='main-footer'>
        <div class='footer-container'>
          
          <!-- Logo pulling asset from images folder -->
          <div class='footer-logo'>
            <img src='assets/images/logo.png' alt='CercaRed Logo' class='logo-image'>
          </div>
          
          <!-- Navigation Links -->
          <nav class='footer-nav'>
            <a href='#official-sources' class='footer-link'>Fuentes oficiales</a>
            <a href='#terms' class='footer-link'>Términos</a>
            <a href='#privacy' class='footer-link'>Privacidad</a>
            <a href='#contact' class='footer-link'>Contacto</a>
          </nav>
        </div>
      </footer>
    `;
  }
}

customElements.define('main-footer', AppFooter);