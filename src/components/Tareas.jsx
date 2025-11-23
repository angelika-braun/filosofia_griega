
const Tareas = () => {
  const actividades = [
    { id: 1, title: "Actividad 1", juegoURL: "https://example.com/game1" },
    { id: 2, title: "Actividad 2", juegoURL: "https://example.com/game2" },
    { id: 3, title: "Actividad 3", juegoURL: "https://example.com/game3" },
    { id: 4, title: "Actividad 4", juegoURL: "https://example.com/game4" },
    { id: 5, title: "Actividad 5", juegoURL: "https://example.com/game5" },
  ];

  return (
    <div className="card article-box mt-5" id="tareas">
      <div className="card-body">
        <h3 className="mb-5">Tareas</h3>

        {actividades.map((act) => (
          <div key={act.id} className="row align-items-center mb-5">

            <div className="col-md-6 mb-3 mb-md-0">
              <h5>{act.title}</h5>
              <p>Descripción para {act.title} …</p>
            </div>


            <div className="col-md-6">
              <div className="card p-2 card-eval">
                <h5>Nombre del Juego/Actividad</h5>
                <iframe
                  src={act.juegoURL}
                  title={act.title}
                  width="100%"
                  height="300"
                  style={{ border: "none" }}
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tareas;
