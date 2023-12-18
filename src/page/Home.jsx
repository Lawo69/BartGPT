import React, { useState } from 'react';
import { IoSend, IoMenu, IoAlertCircleOutline, IoSettingsOutline } from "react-icons/io5";

export const Home = () => {

    const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendClick = () => {
        setResultText(inputText);
        setInputText('');
    };

    return (
        <div className="container">
            <div className='nav-bar'>
                <div className='item'>
                    <IoMenu className='icon'/>
                    <h1 className="title-name">BardGPT</h1>
                </div>
                <div className="item">
                    <IoAlertCircleOutline  className='icon'/>
                    <IoSettingsOutline  className='icon'/>
                    <div className="profile-image"></div>
                </div>
            </div>
            <div className="contant-area">
                <div className="border-area">
                    <div className="result-area">
                        <h1 className='result'>{resultText}</h1>
                    </div>
                    <div className="prompt-area">
                        <div className="prompt">
                            <input type="textfield" placeholder='Enter a prompt here' className='prompt-text' value={inputText} onChange={handleInputChange} />
                            <IoSend className='prompt-button'  onClick={handleSendClick}/>
                        </div>
                        <p>Bard may display inaccurate info, including about people, so double-check its responses.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
