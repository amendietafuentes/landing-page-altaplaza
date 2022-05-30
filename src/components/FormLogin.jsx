import React from "react";

const FormLogin = () => {
    return(
        <div id="form-login" className="container-fluid w-100 pt-5 forms-users-info">
            <div className="row">
                <div className="col-md-12 form-login-bg">
                    <form>
                        <h1 class="h3 mb-3 fw-normal text-center title-form-login">Llena tus datos y registra las facturas de tus compras.</h1>
                        <h3 class="h3 mb-3 text-center cta-form-register">No tienes una cuenta? Reg&iacute;strate aqu&iacute;</h3>
                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="Correo Electrónico" />
                            <label for="floatingInput">Correo Electrónico</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña" />
                            <label for="floatingPassword">Contraseña</label>
                        </div>

                        <div class="checkbox mb-3">
                            <label>
                            <input type="checkbox" value="remember-me" /> ¿Olvidaste tu contrase&ntilde;a?
                            </label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary btn-send" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default FormLogin;