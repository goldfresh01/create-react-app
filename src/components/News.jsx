import React from "react";
import iphone_one from '../iphone_14_pro_one_model.png';

const News = () => {
    return(
        <div className='news' id="news">
            <div className='container'>
                <h2 className='news-title wow animate__animated animate__backInRight'>ЧТО НОВОГО</h2>
                <div className="news-text-img">
                    <div className="news-text wow animate__animated animate__backInLeft">
                        <p className='subtitle'>Все модели оснащены однокристальной системой A16 Bionic, 48-мегапиксельной основной камерой и экранами ProMotion с защитой Ceramic Shield и частотным диапазоном 1 — 120 Гц, а также ускоренной памятью LPDDR5. Дизайн линейки обновлен, на фронтальной панели смартфонов два выреза. </p>
                    <p className='subtitle'>Все iPhone 14 в США будут продаваться без лотка для SIM-карт: производитель заявляет, что улучшенная технология eSIM позволит перенести старые электронные сим-карты на новые смартфоны.</p>
                    <p className='subtitle'>Обновлены фронтальная камера (она снабжена автофокусом и быстрее распознает пользователя в условиях недостаточной освещенности) и сенсор основной камеры.</p>
                    <p className='subtitle-bold'><b>iPhone 14 Pro вышел в новом дизайне — без фирменной «челки». Также в ассортименте появился новый цвет. В смартфоне, в отличие от «обычных» 14-х айфонов, установлен процессор A16 Bionic, который может за секунду производить 4 трлн операций с фото.</b></p>
                    </div>
                        <img src={iphone_one} alt="" className="news-img wow animate__animated animate__backInRight"/>
                </div>
            </div>
        </div>
    );
}
export default News;