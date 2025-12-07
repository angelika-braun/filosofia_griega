
const Introducción = () => {
  const id = "introducion";
  const title = "Introdución";
  const content = `Esta página web nace con la intención de ofrecerles las herramientas necesarias para
afrontar con seguridad el comentario de texto filosófico, que ustedes alumnos deberán
realizar en la PAU. Centrándonos esta vez en el pensamiento de Aristóteles, la propuesta se
articula en cinco actividades. Tareas diseñadas a partir de dos textos fundamentales del
autor, expuestos en el apartado “Recursos” de esta web: 

- Las dos primeras basadas en el primer fragmento (TEXTO A),
- las dos siguientes en el segundo texto (TEXTO B),
- y una quinta actividad que invita a elaborar un comentario personal apoyándose en la inteligencia artificial para profundizar en los conceptos aristotélicos.

Con ello se pretende mejorar la capacidad lectora, el análisis crítico, la búsqueda y
contraste de fuentes, así como la mejora en la redacción de textos filosóficos.
`;



  return (
    <div className="card article-box mt-5" id="introducion">
      <div className="card-body">
        <h3 id={id}>{title}</h3>
        <article className="intro-text">{content}</article>
      </div>
    </div>
  );
};

export default Introducción;
