import React from 'react';
import iphone_all from '../iphone_14_pro_all_model.png';

const Main = () => {
    return(
<main className="main">
    <div className="container">
        <h1 className='title wow animate__animated animate__backInDown'>IPHONE 14 <span>&nbsp;PRO</span></h1>
        <img src={iphone_all} alt="Art" className='iphone-all'/>
        <button className='button wow animate__animated animate__backInUp'>ВЫБРАТЬ</button>
    </div>
</main>);
}
export default Main;