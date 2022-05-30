import React from "react";

const FormBuy = () => {
    return(
        <div id="form-buy" className="container-fluid w-100 pt-5 forms-users-info">
            <div className="row">
                <div className="col-md-12 form-users-bg">
                    <form>
                        <h1 class="h3 mb-3 fw-normal text-center title-form-buy">Llena tus datos y registra las facturas de tus compras.</h1>
                        
                        <div class="form-floating">
                            <input type="text" class="form-control" id="store" placeholder="Local de Compra" />
                            <label for="store">Local de compra</label>
                        </div>

                        <div class="form-floating">
                            <input type="number" class="form-control" id="total" placeholder="Monto" />
                            <label for="total">Total de Compra</label>
                        </div>

                        <div class="form-floating">
                            <input type="text" class="form-control" id="photo-buy" placeholder="Foto de Compra" />
                            <label for="photo-buy">Foto de Compra</label>
                        </div>

                        <button class="w-100 btn btn-lg btn-primary btn-send" type="submit">Enviar Factura</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default FormBuy;