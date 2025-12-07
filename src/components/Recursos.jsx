const Recursos = () => {
 const textosDeRecursos = [
    { 
      id: 1, 
      title: "TEXTO A", 
      description: "La felicidad no consiste en divertirse; sería un absurdo que la diversión fuera el fin de la vida; sería también absurdo trabajar y sufrir durante toda la vida sin otra mira que la de divertirse. Puede decirse realmente de todas las cosas del mundo que solo se las desea en vista de otra cosa, excepto, sin embargo, la felicidad, porque ella es en sí misma fin. […] Según Anacarsis, es preciso divertirse para dedicarse después a asuntos serios, y tiene mucha razón. La diversión es una especie de reposo, y como no se puede trabajar sin descanso, el ocio es una necesidad. Pero este ocio, ciertamente, no es el fin de la vida, porque solo tiene lugar en vista del acto que se ha de realizar más tarde. La vida dichosa es la vida conforme a la virtud, y esta vida es seria y laboriosa; no la constituyen vanas diversiones» (ARISTÓTELES, Ética a Nicómaco).",
    },
    { 
      id: 2, 
      title: "TEXTO B", 
      description: "En todos existe por naturaleza la tendencia hacia tal comunidad, pero el primero que la estableció fue causante de los mayores beneficios. Pues así como el hombre perfecto es el mejor de los animales, así también, apartado de la ley y de la justicia, es el peor de todos. La injusticia más insoportable es la que posee armas, y el hombre está naturalmente provisto de armas al servicio de la sensatez y de la virtud, pero puede utilizarlas para las cosas más opuestas. Por eso, sin virtud, es el ser más impío y feroz y el peor en su lascivia y voracidad. La justicia, en cambio, es un valor cívico, pues la justicia es el orden de la comunidad civil, y la virtud de la justicia es el orden de la comunidad civil, y la virtud de la justicia es el discernimiento de lo justo. (Política, Libro I, Capítulo II. Traducción de Manuela García Valdés. Gredos)",
    }
  ];

  return (
    <div className="card article-box mt-5" id="recursos">
      <div className="card-body">
        <h3 className="mb-5">Recursos</h3>

        {textosDeRecursos.map((act) => (
          <div key={act.id} className="row align-items-start mb-5">

            {/* TEXT - BEREICH */}
            <div className="col-md-12">
              <div className="card p-2 card-eval">
                <h5>{act.title}</h5>
                <p className="textoRecursos">{act.description}</p>
                <iframe
                  title={act.title}
                  width="100%"
                  height="50"
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

export default Recursos
