import React from 'react';
import './Keyboard.css';
import Whitekey from './Whitekey.js';
import Blackkey from './Blackkey.js';
import * as Tone from "tone";

class Keyboard extends React.Component {

    componentDidMount(){
        window.addEventListener('keypress', e => {
            var synth = new Tone.Synth().toMaster()

            switch(e.key){
                case "a":
                    synth.triggerAttackRelease('C4', '8n')
                    break;
                case "w":
                    synth.triggerAttackRelease('Db4', '8n')
                    break;
                case "s":
                    synth.triggerAttackRelease('D4', '8n')
                    break;
                case "e":
                    synth.triggerAttackRelease('Eb4', '8n')
                    break;
                case "d":
                    synth.triggerAttackRelease('E4', '8n')
                    break;
                case "f":
                    synth.triggerAttackRelease('F4', '8n')
                    break;
                case "t":
                    synth.triggerAttackRelease('Gb4', '8n')
                    break;
                case "g":
                    synth.triggerAttackRelease('G4', '8n')
                    break;
                case "y":
                    synth.triggerAttackRelease('Ab4', '8n')
                    break;
                case "h":
                    synth.triggerAttackRelease('A4', '8n')
                    break;
                case "u":
                    synth.triggerAttackRelease('Bb4', '8n')
                    break;
                case "j":
                    synth.triggerAttackRelease('B4', '8n')
                    break;
                case "k":
                    synth.triggerAttackRelease('C5', '8n')
                    break;
                case "o":
                    synth.triggerAttackRelease('Db5', '8n')
                    break;
                case "l":
                    synth.triggerAttackRelease('D5', '8n')
                    break;
                case "p":
                    synth.triggerAttackRelease('Eb5', '8n')
                    break;
                case ";":
                    synth.triggerAttackRelease('E5', '8n')
                    break;
                case "'":
                     synth.triggerAttackRelease('F5', '8n')
                    break;
            }
        });
    }

    render () {
        return (
            <div className="keyboard">
                <Whitekey pressed={true} note='C4'/>
                <Blackkey />
                <Whitekey />
                <Blackkey note='Eb4'/>
                <Whitekey note='E4'/>
                <Whitekey note='F4'/>
                <Blackkey note='Gb4'/>
                <Whitekey note='G4'/>
                <Blackkey note='Ab4'/>
                <Whitekey note='A4'/>
                <Blackkey note='Bb4'/>
                <Whitekey note='B4'/>
                <Whitekey note='C5'/>
                <Blackkey note='Db4'/>
                <Whitekey note='D5'/>
                <Blackkey note='Eb5'/>
                <Whitekey />
                <Whitekey />
            </div>
        );
    }
}

export default Keyboard;
