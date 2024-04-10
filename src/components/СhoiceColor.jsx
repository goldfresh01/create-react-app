import React from "react";
import iphone_silver from '../silver.png';
import iphone_purple from '../purple.png';
import iphone_gold from '../gold.png';
import iphone_black from '../black.png';

const СhoiceColor= () => {
    return(
        <div className='choice' id="color">
            <div className='container'>
            <h2 className='choice-title wow animate__animated animate__backInRight'>ВЫБЕРИ СВОЙ ЦВЕТ</h2>
            <div className="choice-block-img wow animate__animated animate__lightSpeedInRight">
                <div className="choice-card"><img src={iphone_silver} alt=""  className="choice-img"/><h2>Silver</h2><p>Серебристый</p></div>
                <div className="choice-card"><img src={iphone_purple} alt=""  className="choice-img"/><h2>Deep Purple</h2><p>Темно фиолетовый</p></div>
                <div className="choice-card"><img src={iphone_gold} alt=""  className="choice-img"/><h2>Gold</h2><p>Золотой</p></div>
                <div className="choice-card"><img src={iphone_black} alt=""  className="choice-img"/><h2>Space black</h2><p>Космический черный</p></div>
            </div>
            </div>
        </div>
    );
}
export default СhoiceColor;