
const Evaluación = () => {
  const items = [
  {
    img: "/ukraine.jpg",
    title: "Título 1",
    text: "Descripción...",
    pdf: "/actividad1.pdf",
  },
  {
    img: "/ukraine.jpg",
    title: "Título 2",
    text: "Descripción...",
    pdf: "/actividad2.pdf",
  },
  {
    img: "/ukraine.jpg",
    title: "Título 3",
    text: "Descripción...",
    pdf: "/actividad3.pdf",
  },
  {
    img: "/ukraine.jpg",
    title: "Título 4",
    text: "Descripción...",
    pdf: "/actividad4.pdf",
  },
  {
    img: "/ukraine.jpg",
    title: "Título 5",
    text: "Descripción...",
    pdf: "/actividad5.pdf",
  },
  {
    img: "/ukraine.jpg",
    title: "Título 6",
    text: "Descripción...",
    pdf: "/actividad6.pdf",
  },
];


  return (
    <div id="evaluación" className="card article-box mt-5 p-4">
      <h2 className="mb-4">Evaluación</h2>

      <div className="container">
        <div className="row g-4">

          {items.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="card h-100 shadow-sm card-eval">
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                  <a
                    href={item.pdf}
                    download
                    className="btn-glow"
                  >
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Evaluación;
