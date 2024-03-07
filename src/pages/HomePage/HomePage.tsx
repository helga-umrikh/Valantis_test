import React from 'react';
import './HomePage.scss';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Input from '../../components/Input';
import Item from '../../components/Item';

const HomePage = () => {
    return (
        <div className='home-page'>
            <div className='container'>
              <h1 className='title'>Valantis Jewelry</h1>
              <div className='home-page__options'>
                <div className='options__sorting'>
                  <Select />
                  <Input />
                  <Input />
                  <Button/>
                </div>
                <div className="options__filters">
                <Input />
                <Input />
                <Input />
                <Button/>
                </div>
              </div>
              <div className='home-page__items-box'>
                <Item />
              </div>
            </div>
        </div>
    )
}

export default HomePage
