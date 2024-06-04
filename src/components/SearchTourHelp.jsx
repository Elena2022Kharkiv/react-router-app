import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './../scss/SearchTourHelp.scss';

export const SearchTourHelp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(); 
    const [showMessage, setShowMessage] = useState(false);
    // const active = showMessage ? 'active' : '';
    
    const submit = data => {
        console.log('form valid');
        console.log(data);

        setShowMessage(true);
        // JSON.stringify(data)
    }
    
    const formError = error => {
        console.log('invalid form');
        console.log(error);
    }    
    console.log(showMessage);
    return (
        <div className="searchTour-help">
            <div className="searchTour-help__block">
                <h3 className="searchTour-help__title">Потрібна допомога у підборі туру?</h3>
                <h4 className="searchTour-help__title">Надсилайте заявку і наші менеджери знайдуть для Вас найкращий тур</h4>

                <form className="searchTour-help__form" onSubmit={ handleSubmit(submit, formError) }>
                    <label 
                        className="searchTour-help__form-label">
                        Ваше ім`я:
                        <input 
                            className={ errors?.name ? "searchTour-help__form-input error" : "searchTour-help__form-input" }
                            type="text" name="name" 
                            placeholder="Ваше ім`я" 
                            { ...register('name', { required: 'Name is required !!!' }) } 
                        />
                        {
                            errors?.name && <p className="searchTour-help__form-error">{ errors?.name?.message }</p>
                        }
                    </label>

                    <label className="searchTour-help__form-label">
                        E-mail:
                        <input className="searchTour-help__form-input" 
                        type="email" name="mail" 
                            placeholder="E-mail"  
                            { ...register('mail', { required: 'E-mail is required !!!' }) } 
                        />
                        {
                            errors?.mail && <p className="searchTour-help__form-error">{ errors?.mail?.message }</p>
                        }
                    </label>

                    <button className="searchTour-help__form-submit">ВІДПРАВИТИ</button>

                </form>
                <p className="searchTour-help__info">Надсилаючи заявку ви даєте згоду на обробку персональних даних </p>
            </div>

            { showMessage && 
                <div className="searchTour-help__send-window">
                    <div className="searchTour-help__send-message">
                        <p className="searchTour-help__send-message-close" onClick={setShowMessage(false)}>х</p>
                        <p className="searchTour-help__send-message-text">Ваша заявка відпpавлена.
                            <br/>Наш менеджер зв`яжеться з вами найближчим часом.</p>
                    </div>
                </div>
            }
        </div>
    );
};

