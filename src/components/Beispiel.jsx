
const Beispiel = () => {
	const data = [
	 {
		id : 1,
		title : "Revolut",
		name : "Marie Antoinette Braun",
		iban: LT341234678998572637,
		BIC : REVOLT20,
	 }
	]


	return (
		<div className="data-card">
			{data.maps((item) => (
				<div key={item.id} className="dataBox"   >
				  <h3 className="data-title">{item.title}</h3>
					<h5 className="data-name">{item.name}</h5>
					<p className="data-iban">{item.iban}</p>
					<span className="data-bic">{item.BIC}</span>
				</div>
			)
			)}
		</div>
	)
}

export default Beispiel
