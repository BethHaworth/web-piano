import React from 'react';
import './Whitekey.css';
import * as Tone from "tone";

class Whitekey extends React.Component {

    render () {
        return <button className={this.props.active ? `whitekey whitekey_pressed` : `whitekey`} onKeyDown = {this.onKeyDown} >  </button>
    }
}

export default Whitekey;