import React, { Component } from 'react'
import Button from './Button'

export default class TextComponent extends Component {
  render() {
    return (
      <div className='text-component'>
        <h3>PREVIEW</h3>
        <h1>Gabrielle <br/> Essence Eau <br/> De Parfum</h1>
        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
  Perfumer-Creator for the House of CHANEL.</p>
        <div className='price'>
            <h2>$149.99</h2>
            <h4>$169.99</h4>
        </div>
        <Button/>
      </div>
    )
  }
}
