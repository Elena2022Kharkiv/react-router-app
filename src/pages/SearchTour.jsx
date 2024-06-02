import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { SearchTourHelp } from './../components/SearchTourHelp';
import './../scss/SearchTour.scss';

export const SearchTour = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm({
    //     defaultValues: {
    //       name: '',
    //       mail: '',
    //     //   select: {},
    //     },
    //   }) 
    const { register, handleSubmit, formState: { errors } } = useForm(); 
    // const [isToggleActive, setisToggleActive] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    // const active = isToggleActive === true ? 'active' : '';
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

    return (
        <div className='searchTour'>
            <h2 className='searchTour__title'>Пошук туру</h2>

            <form className="searchTour__form" onSubmit={ handleSubmit(submit, formError) }>
                    <label className="searchTour__form-label">
                        Країна:
                        <input type="text" className="searchTour__form-input" 
                            { ...register('country', { required: 'Country is required !!!' }) }/>
                    </label>

                    <label className="searchTour__form-label">
                        Тривалість подорожі:
                        <input type="number" className="searchTour__form-input" { ...register('days') }/>
                    </label>

                    <label className="searchTour__form-label">
                        Кількість дорослих:
                        <input type="number" className="searchTour__form-input" { ...register('adults')} />
                    </label>

                    <label className="searchTour__form-label">
                        Кількість дітей:
                        <input type="number" className="searchTour__form-input" { ...register('children')} />
                    </label>

                    <button className="searchTour__form-submit">ЗНАЙТИ</button>
            </form>
            
            < SearchTourHelp />  

        </div>
    );
};

