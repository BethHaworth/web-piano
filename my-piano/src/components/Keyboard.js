import React from 'react';
import './Keyboard.css';
import Whitekey from './Whitekey.js';
import Blackkey from './Blackkey.js';

class Keyboard extends React.Component {
    render () {
        return (
            <div className="keyboard">
                <Whitekey note='C4'/>
                <Blackkey />
                <Whitekey note='D4'/>
                <Blackkey />
                <Whitekey note='E4'/>
                <Whitekey note='F4'/>
                <Blackkey />
                <Whitekey note='G4'/>
                <Blackkey />
                <Whitekey note='A4'/>
                <Blackkey />
                <Whitekey note='B4'/>
                <Whitekey note='C5'/>
                <Blackkey />
                <Whitekey note='D5'/>
                <Blackkey />
                <Whitekey note='E5'/>
                <Whitekey note='F5'/>
            </div>
        );
    }
}

export default Keyboard;
