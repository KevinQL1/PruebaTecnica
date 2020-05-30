import React, { Component } from "react";

/*<h2>Formulario guardado</h2>
                    <table class="Table" >
                        <tr>
                            <th class="th">Consecutivo</th>
                            <th class="th">Valor</th>
                            <th class="th">Descripcion de el campo seleccionado</th>
                            <th class="th">TRM</th>
                        </tr>
                        <tr>
                            <td class="td"></td>
                            <td class="td"></td>
                            <td class="td"></td>
                        </tr>
                    </table>*/

class Formulario extends Component {
    state = {
        Valor: "",
        TRM: "",
        ID: ""
    };

    valueToState = ({ name, value, checked, type }) => {
        this.setState(() => {
            return { [name]: type === "checkbox" ? checked : value };

        });
    };

    render() {
        return (
            <div>
                <h1>Formulario</h1>
                <form class="Formulario"
                    method="post"
                    action="https://httpbin.org/post">
                    <label htmlFor="Valor">VALOR</label>
                    <input
                        class="datos"
                        id="Valor"
                        name="Valor"
                        type="number"
                        placeholder="Ingresa el valor" required

                        onChange={event => this.valueToState(event.target)}
                    />
                    <label htmlFor="Valor">TRM</label>
                    <input
                        class="datos"
                        id="TRM"
                        name="TRM"
                        type="number"
                        placeholder="Ingrese el TRM" required
                        onChange={event => this.valueToState(event.target)}
                    />
                    <label htmlFor="color">¿Cual es tu color favorito?</label>
                    <select
                        class="datos"
                        id="ID"
                        name="ID" required
                        onChange={event => this.valueToState(event.target)}>
                        <option value={""}>- selecciona uno -</option>
                        <option value={"1"}>rojo de la sangre</option>
                        <option value={"2"}>azul del cielo</option>
                        <option value={"3"}>verde de los arboles</option>
                    </select>
                    <div>
                        <input class="boton-guardar" type="submit" value="Guardar"></input>
                        <p class="warnings" id="warnings"></p>
                        <input class="boton-limpiar" type="reset" value="Limpiar"></input>
                    </div>
                </form>
            </div>
        );
    };
}

export default Formulario;
