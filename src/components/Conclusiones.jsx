
const Conclusiones = () => {
  const id = "conclusiones";
  const title = "Conclusiones";
  const content = `Texto sobre los conclusiones...
	 consectetur adipisicing elit. 
  Hic culpa, quae obcaecati repellat est delectus ipsa odit expedita at? 
  Vel, repudiandae inventore nesciunt commodi, veritatis fuga deleniti odio 
  aut assumenda magni sunt magnam ea quasi doloribus eveniet at eius cumque 
  totam dolorum, nisi voluptatum ex impedit officiis asperiores...`;



  return (
    <div className="card article-box mt-5">
      <div className="card-body">
        <h3 id={id}>{title}</h3>
        <article>{content}</article>
      </div>
    </div>
  );
};

export default Conclusiones;
