import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-glass fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.youtube.com/watch?v=K0Dn-_ZhmyM" target="_blank" rel="noopener noreferrer">
          <img src="/socrates.jpg" className="logo_style" alt="Socrates" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#introducion">Introdución</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tareas">Tareas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proceso">Proceso</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#evaluación">Evaluación</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#recursos">Recursos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#conclusiones">Conclusiones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
