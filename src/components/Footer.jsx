import React from 'react';
import ParticipaYa from '../images/participa-ya.png';
import LogoAltaPlaza from '../images/logo-altaplaza.png';

const Footer = () => {
    return(
        <div className="container-fluid">
            <footer className="footer">
                    <div className="row">
                        <div className="col-md-12 col-xs-12"> 
                            <img className="img-fluid text-center m-auto participa-ya" src={ParticipaYa} alt="¡PARTICIPA YA!" title="¡PARTICIPA YA!" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <p className="copy-footer pt-5 pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione saepe sint maiores laudantium iste nesciunt nam incidunt quidem minus labore? Ut accusantium excepturi impedit consequatur odit illum asperiores, doloremque distinctio!
                            Natus repellat facere iusto accusamus tenetur nemo amet!</p>
                            <p className="copy-footer pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione saepe sint maiores laudantium iste nesciunt nam incidunt quidem minus labore? Ut accusantium excepturi impedit consequatur odit illum asperiores, doloremque distinctio!</p>
                        </div>
                        <div className="col-md-4">
                        <img className="img-fluid text-center m-auto participa-ya" src={LogoAltaPlaza} alt="ALTAPLAZA MALL" title="ALTAPLAZA MALL" />
                        </div>
                    </div>
            </footer>
        </div>


    );
}

export default Footer;