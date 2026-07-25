const headerTemplate = `
    <header class="main-header">
        <div class="logo">
            <h1>RUTT</h1>
        </div>
        <nav class="nav-links">
            <a href="login_estudiante.html" class="btn-logout">Salir</a>
        </nav>
    </header>
`;
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('header-component');
    if (container) {
        container.innerHTML = headerTemplate;
    }
});