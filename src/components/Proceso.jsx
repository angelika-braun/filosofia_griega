import React from "react";

const Proceso = () => {
  return (
    <div className="card article-box mt-5" id="proceso">
      <div className="card-body">
        <h3>Tour Web</h3>

        <div className="row align-items-center mt-4">

          <div className="col-md-6 mb-3 mb-md-0">
            <h4>Introducción al Tour</h4>
            <p>
              En este video te mostramos .....
            </p>
          </div>

          <div className="col-md-6">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/54vrI4eE8NE"
                title="Tour Web"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "12px" }}
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Proceso;
