import iphone_form from '../iphone_form.png';

const Form = () => {
    return ( <div className="form" id='form'>
        <div className="container">
            <div className="form-top">
            <form action="" className="form-block wow animate__animated animate__fadeIn">
            <label><h2>ХОЧЕШЬ IPHONE 14 PRO?</h2></label>
            <input type="text" placeholder="Ваше имя" className="form-input"/>
            <input type="text" placeholder="Номер телефона" className="form-input-last"/>
            <p className="discription">В ближайшее время наш менеджер свяжется с Вами</p>
            <div className="button-form">
            <button>ЗАКАЗАТЬ</button>
            </div>
            </form>
            <div className="form-img wow animate__animated animate__fadeIn">
                <img src={iphone_form} alt="" />
            </div>
            </div>
        </div>
    </div> );
}

export default Form;