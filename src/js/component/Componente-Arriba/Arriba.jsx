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
        <div className="p-3 mb-2 bg-secondary text-white">
            <h1>A Warm Welcome</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto dignissimos quia atque, autem sint est officia alias reiciendis corporis neque deserunt delectus provident mollitia cum nihil, doloremque velit nulla!</p>
            <button className="p-2 mb-2 bg-primary text-white">call to action</button>
        </div>
    );
}