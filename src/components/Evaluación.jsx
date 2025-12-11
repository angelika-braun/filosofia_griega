import rubricaPDF from "../assets/RúbricasActividadesWeb.pdf";

const Evaluación = () => {
  const items = [
  {
    img: "/books.jpg",
    title: "Rúbrica de las actividades",
    pdf:  rubricaPDF,
  }
];


  return (
    <div id="evaluación" className="card article-box mt-5 p-4 ">
      <h2 className="mb-4">Evaluación</h2>

      <div className="container ">
        <div className="row g-4">

          {items.map((item, index) => (
            <div className="col-md-4 mx-auto" key={index}>
              <div className="card h-100 shadow-sm card-eval">
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5>{item.title}</h5>
                  <a
                    href={item.pdf}
                    download
                    className="btn-glow mg-auto"
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
