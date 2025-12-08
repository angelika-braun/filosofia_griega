
const Conclusiones = () => {
  const id = "conclusiones";
  const title = "Conclusiones";
  const content = `En síntesis, esta plataforma Web ha sido creada con el objetivo de consolidar de manera estructurada las competencias necesarias para abordar el comentario filosófico en la PAU.
A través de las actividades propuestas, el alumnado refuerza las competencias clave estructuradas en la LOMLOE en: 

comunicación lingüística, la competencia digital, la competencia de aprender a aprender, así como las competencias social y cívica.

Vinculadas tales competencias al análisis de los conceptos aristotélicos de eudaimonía
(felicidad), areté (virtud), dikaiosýnē (justicia) y la vida comunitaria propia del zōon politikón (animal político). De este modo, la web contribuye al desarrollo de las destrezas esenciales para el estudio filosófico.`;



  return (
    <div className="card article-box mt-5">
      <div className="card-body">
        <h3 id={id}>{title}</h3>
        <article className="conclusiones-text">{content}</article>
      </div>
    </div>
  );
};

export default Conclusiones;
