//Si modifican acá y se modificará en todas las paginas que tengan footer, esto es para el footer
class SpecialFooter extends HTMLElement {
    connectedCallback() {
        
        this.innerHTML = `
            <footer class="main-footer">
                <div class="footer-container">
                    
                    <!--esto es para el logo-->
                    <div class="footer-logo">
                        <span class="logo-white">Cerca</span><span class="logo-orange">Red</span>
                    </div>
                    
                    <!--Aqui es para poner los enlaces de la fuentes, terminos, privacidad, contacto-->
                    <nav class="footer-nav">
                        <a href="#fuentes" class="footer-link">Fuentes oficiales</a>
                        <a href="#terminos" class="footer-link">Términos</a>
                        <a href="#privacidad" class="footer-link">Privacidad</a>
                        <a href="#contacto" class="footer-link">Contacto</a>
                    </nav>
                </div>
            </footer>
        `;
    }
}
// Registrar la etiqueta personalizada
customElements.define('main-footer', SpecialFooter);