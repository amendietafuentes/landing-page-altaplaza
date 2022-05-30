import React from 'react';
import Banner from './Banner';
import Content from './Content';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import FormBuy from './FormBuy';
import Footer from './Footer';

const Home = () => {
    return(
        <div className="row">
            <Banner />
            <Content />
            <FormBuy />
            <Footer />
        </div>
    );
}

export default Home;
