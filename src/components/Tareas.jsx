const Tareas = () => {
  const actividades = [
    { 
      id: 1, 
      title: "Actividad 1", 
      description: `Juego de preguntas tipo test sobre el texto A dado en el apartado de recursos. 
                              Ética a Nicómaco de Aristóteles: 
                              La Felicidad.
                              Mucha suerte.`,
      juegoURL: "https://es.educaplay.com/juego/26995993-felicidad_y_virtud_idea_y_relacion.html" 
    },
    { 
      id: 2, 
      title: "Actividad 2", 
      description: `Dictado; el objetivo de esta actividad es interiorizar cómo se hace un comentario de texto en los exámenes de acceso universitario, sobre el “texto A” dado en el apartado de recursos.
                              Ética a Nicómaco de Aristóteles: 
                              La Felicidad
                              Mucha suerte.`,
      juegoURL: "https://es.educaplay.com/juego/26995947-felicidad_y_virtud.html" 
    },
    { 
      id: 3, 
      title: "Actividad 3", 
      description:  `Completa el “texto B” Aristóteles. Política, Libro I, Capítulo II. Gredos, con los conceptos elementales del texto.
                              Mucha suerte.`,
      juegoURL: "https://es.educaplay.com/recursos-educativos/27058370-justicia_y_virtud_fill_in_the_blanks.html" 
    },
     { 
      id: 4, 
      title: "Actividad 4", 
      description: `Ahorcados: según la definición expuesta, adivina la palabra relacionada como concepto central del “Texto B”, puedes recurrir a las pistas. 
                              Cuidado, las pistas bajarán tu puntuación.
                              Mucha suerte.`,
      juegoURL: "https://es.educaplay.com/juego/27059014-la_espiral_de_la_justicia.html" 
    },
    { 
      id: 5, 
      title: "Actividad 5", 
      description: `El objetivo de esta actividad es comprender la idea aristotélica de la naturaleza humana, la justicia y la virtud, y practicar la argumentación filosófica usando herramientas de inteligencia artificial. 
      
      - Abre la herramienta de IA 'Habla con la Historia', formula la siguiente pregunta: 
      
      "Según Aristóteles, ¿por qué la justicia y la virtud son necesarias para que el ser humano cumpla su naturaleza de vivir en comunidad? Explica con tus propias palabras y da un ejemplo moderno."
       - Compara la respuesta de la IA con tus propias ideas y escribe un breve comentario sobre coincidencias o diferencias que tengas con ella. Deberás entregar el comentario por escrito al profesor el día 21 de octubre.`,
      juegoURL: "https://hablaconlahistoria.es/personajes/aristoteles/" 
    },
  ];

  return (
    <div className="card article-box mt-5" id="tareas">
      <div className="card-body">
        <h3 className="mb-5">Tareas</h3>

        {actividades.map((act) => (
          <div key={act.id} className="row align-items-start mb-5">

            {/* SPIEL-BEREICH */}
            <div className="col-md-12">
              <div className="card p-2 card-eval">
                <h5>{act.title}</h5>
                <p className="act-text">
                 {act.description}
                </p>
                <iframe
                  src={act.juegoURL}
                  title={act.title}
                  width="100%"
                  height="600"
                  allow="fullscreen; autoplay; allow-top-navigation-by-user-activation"
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
