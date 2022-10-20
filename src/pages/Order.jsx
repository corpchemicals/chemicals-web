import React from 'react';
import { useState } from 'react';
import OrderInput from '../components/OrderInput';
import ToggleInput from '../components/ToggleInput';

import '../styles/pages/Order.scss'

const Order = ({clientData, setClientData}) => {
  const [hasSeller, setHasSeller] = useState(false)
  const [registeredCustomer, setRegisteredCustomer] = useState(false)

  return (
    <main className='Order'>
      <h1>Envía tu pedido</h1>
      <p>Puedes enviarnos tu pedido llenando el siguiente formulario, si no tienes un vendedor designado se te asignará uno de acuerdo a tu zona.</p>
      <ToggleInput 
        label='Tengo/Soy Vendedor' 
        toggleState={hasSeller} 
        setToggleState={setHasSeller}
      />
      <form action="#">
        {hasSeller &&
          <section>
            <h2>Información del Vendedor</h2>
            <div className='inputs-wrapper'>
            <OrderInput 
              label="Vendedor" 
              type="text" 
              name="seller"
              numInputs={1}
            />

            <OrderInput 
              label="Código" 
              type="tel" 
              required={true} 
              name="sellerCode"
              numInputs={1}
            />
            </div>
          </section>
        }
        <section className='client-data'>
          <h2>Información del Cliente</h2>
          <ToggleInput 
            label='Cliente Registrado' 
            toggleState={registeredCustomer} 
            setToggleState={setRegisteredCustomer}
          />
          <div className='inputs-wrapper'>
            <OrderInput 
              label="Cliente" 
              type="text" 
              required={true} 
              name="clientName"
              numInputs={1}
            />

            {!registeredCustomer && 
            <>
              <OrderInput 
                label="Teléfono" 
                type="tel" 
                required={true} 
                name="phone"
                numInputs={2}
              />

              <OrderInput 
                label="Teléfono 2" 
                type="tel" 
                required={false} 
                name="phone2"
                numInputs={2}
              />

              <OrderInput 
                label="RIF" 
                type="tel" 
                required={true} 
                name="rif"
                numInputs={2}
              />

              <OrderInput 
                label="Dirección" 
                type="tel" 
                required={true} 
                name="address"
                numInputs={1}
              />
            </>
            }
          </div>
        </section>
      </form>
      {/* <form id="send-order-form" className="send-order-form" action="#">
        <header className="header-form">
          <img src="./assets/chemicals-logo.png" alt="Chemicals Logo" className="principal-logo" />
          
          <div className="form-data-wrapper seller-wrapper">
            <label for="seller" className="required-label">Vendedor</label>
            <input required name="seller" id="seller" />
          </div>
        </header>
        
        
        <section className="form-client-data form-section">
          <h2>Información del Cliente</h2>

          <section className="toggle-existence-section">
            <div className="toggle off-color">
              <input id="toggle-client-existence" type="checkbox" />
              <label className="toggle-item" for="toggle-client-existence"></label>
              <span className="toggle-message">Cliente Registrado</span>
            </div>
          </section>

          <div className="form-data-wrapper">
            <label for="client-name" className="required-label">Nombre</label>
            <input required name="client-name" id="client-name" />
          </div>

          <div className="form-data-wrapper phone-wrapper new-client-field">
            <label for="client-phone" className="required-label">Teléfono</label>
            
            <footer className="double-input-wrapper">
              <input 
                type="tel" 
                maxlength="4"
                name="phone-area-code" 
                id="phone-area-code"
                placeholder="0414"
                required
                onkeyup="if(this.value.length == this.getAttribute('maxlength')) document.querySelector('#client-phone').focus()"
                />

              <input required type="tel" maxlength="7" name="client-phone" id="client-phone" />
            </footer>
          </div>

          <div className="form-data-wrapper phone-wrapper new-client-field">
            <label for="optional-phone-area-code">Teléfono 2 <sup className="optional-label-text">(opcional)</sup></label>
            
            <footer className="double-input-wrapper">
              <input 
                type="tel" 
                maxlength="4"
                name="optional-phone-area-code" 
                id="optional-phone-area-code"
                placeholder="0414"
                onkeyup="if(this.value.length == this.getAttribute('maxlength')) document.querySelector('#optional-client-phone').focus()"
                />

              <input type="tel" maxlength="7" name="optional-client-phone" id="optional-client-phone" />
            </footer>
          </div>

          <div className="form-data-wrapper identification-wrapper new-client-field">
            <label for="client-identification" className="required-label">RIF</label>

            <footer className="double-input-wrapper">
              <select name="identification-type" id="identification-type">
                <option value="J" selected>J</option>
                <option value="V">V</option>
              </select>

              <input required type="tel" name="client-identification" id="client-identification" />
            </footer>
          </div>

          <div className="form-data-wrapper new-client-field">
            <label for="client-address" className="required-label">Dirección</label>
            <input required type="text" name="client-address" id="client-address" />
          </div>
        </section>

        <section className="form-order form-section">
          <h2>Pedido</h2>
            <select 
              className="inputs-container--category full-select" 
              name="category" 
              id="category">
              <option value selected disabled hidden>Categoría</option>
            </select>
        
          <select 
            className="inputs-container--from-number full-select" 
            name="from-number" 
            id="from-number">
              <option className="select-default-option" value disabled selected hidden>Desde</option>
          </select>
        
          <select 
            className="inputs-container--to-number full-select" 
            name="to-number" 
            id="to-number">
              <option className="select-default-option" value disabled selected hidden>Hasta</option>
          </select>
      
          <div className="form-data-wrapper">
            <label for="amount">Cantidad:</label>
            <input type="number" id="amount" min="1"/>
          </div>

          <button type="button" id="add-order" className="form-button add-button">Agregar</button>
        </section>
        
        <section className="summary">
          <h2>Resumen</h2>
          <ol id="total-order">        
          </ol>
          <footer>
            <p>Total</p>
            <h3 id="total-price" className="total-price">$ 0.00</h3>
          </footer>
          <button type="submit" id="send-ws-message" className="form-button send-button">Enviar Pedido</button>
        </section>
      </form> */}
    </main>
  );
}

export default Order;