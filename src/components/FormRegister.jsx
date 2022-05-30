import React from "react";

const FormRegister = () => {
    return(
        <div id="form-register" className="container-fluid w-100 pt-5 forms-users-info">
            <div className="row">
                <div className="col-md-12 form-users-bg">
                    <form>
                        <h1 class="h3 mb-3 fw-normal text-center title-form-register">Llena tus datos y registra las facturas de tus compras.</h1>
                        
                        <div class="form-floating">
                            <input type="text" class="form-control" id="name" placeholder="Nombre" />
                            <label for="name">Nombre</label>
                        </div>

                        <div class="form-floating">
                            <input type="text" class="form-control" id="lastname" placeholder="Apellido" />
                            <label for="lastname">Apellido</label>
                        </div>

                        <div class="form-floating">
                            <input type="text" class="form-control" id="dni" placeholder="Cédula" />
                            <label for="dni">C&eacute;dula</label>
                        </div>

                        <div class="form-floating">
                            <input type="email" class="form-control" id="email" placeholder="Correo Electrónico" />
                            <label for="email">Correo Electrónico</label>
                        </div>

                        <div class="form-floating">
                            <input type="number" class="form-control" id="telephone" placeholder="Celular" />
                            <label for="telephone">Celular</label>
                        </div>

                        <div class="form-floating">
                            <select class="form-control form-control">
                                <option>Seleccione un Corregimiento</option>
                                <option>Juan Díaz</option>
                            </select>
                        </div>

                        <div class="form-floating">
                            <input type="password" class="form-control" id="password" placeholder="Contraseña" />
                            <label for="password">Contraseña</label>
                        </div>

                        <div class="form-floating">
                            <input type="password" class="form-control" id="confirmPassword" placeholder="Confirmar Contraseña" />
                            <label for="confirmPassword">Confirmar Contraseña</label>
                        </div>

                        <button class="w-100 btn btn-lg btn-primary btn-send" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default FormRegister;