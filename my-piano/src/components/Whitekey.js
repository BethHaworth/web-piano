import React from 'react';
import './Whitekey.css';
import * as Tone from "tone";

class Whitekey extends React.Component {

    onKeyDown = () =>{
        var synth = new Tone.Synth().toMaster()
        synth.triggerAttackRelease(this.props.note, '8n')
    }

    render () {
        return <button onKeyDown = {this.onKeyDown} > Button </button>
    }
}


export default Whitekey;