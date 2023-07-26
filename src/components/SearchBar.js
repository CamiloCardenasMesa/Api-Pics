import './SearchBar.css';
import React, { useState } from "react";

function SearchBar({ onSubmit}) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Enter Serch Term</label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    )
}
export default SearchBar;

/*
Cada vez que vayamos a usar un formulario en mis apps lo hacemos siguiendo estos pasos:
HANDLING TEXT INPUT
1) Creamos una nueva pieza de estado
2) Creamos un event handler para estar atento al evento "onChange"
3) cuando se active el evento "onChange", obtener el valor del input
4) tomar ese valor del input y usarlo para actualizar el estado
5) pasar el estado al input como el valor (value) del prop.

¿por qué?
- Así podemos manejar el texto en el input usando el sistema de estado o "state system"
- Cada vez que quedamos saber el valor actual de una entrada (input), podemos hacer referencia a la pieza de estado
- Cada vez que queramos cambiar el valor dentro de la entrada (input), podemos actualizar esa pieza de estado (setTerm)
- Cuando se manejen formularios nos referimos a él como entrada controlada "controlled inputs"


*/

