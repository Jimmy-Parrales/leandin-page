import React from "react";
import '../../style/arriba.css';
<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
			crossorigin="anonymous"
		/>
export default function arriba(){
    return(
        <div className="todo">
            <footer>
            <div className="contenedor-abajo"><h3>card title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iure eligendi consequatur provident? Veritatis eos magnam nulla dolor, nemo consectetur accusantium laborum fugit quas sunt animi non et corrupti molestiae!</p>
            <button className="p-2 mb-2 bg-primary text-white">find or more</button>
            </div> 
            </footer>
        </div>
        
       
    );
}