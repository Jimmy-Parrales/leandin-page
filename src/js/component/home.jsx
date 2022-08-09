import React from "react";
<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
			crossorigin="anonymous"
		/>
import Estilo from '../style/arriba.css';
import Arriba from '../component/Componente-Arriba/Arriba.jsx';
import Abajo from "./componente-abajo/Abajo.jsx";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="container">
			<Arriba/>
			<div className="row">
				<div className="col"><Abajo/></div>
				<div className="col"><Abajo/></div>
				<div className="col"><Abajo/></div>
			</div>
			
		</div>
	);
		

};

export default Home;
