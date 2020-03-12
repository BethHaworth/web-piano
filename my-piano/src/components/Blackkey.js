import React from 'react';
import './Blackkey.css';
import * as Tone from "tone";

class Blackkey extends React.Component {

    onKeyDown = () =>{
        var synth = new Tone.Synth().toMaster()
        synth.triggerAttackRelease(this.props.note)
    }

    render () {
        return <button className ="blackkey" onKeyDown = {this.onKeyDown} >  </button>
    }

}

export default Blackkey;