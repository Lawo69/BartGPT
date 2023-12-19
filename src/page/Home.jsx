import React, { useState } from 'react';
import { IoSend, IoMenu, IoAlertCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { sendMsgToOpenAI } from '../openai';

export const Home = () => {

    const [input, setInput] = useState("");

    const handleSend = async () => {
        const res = await sendMsgToOpenAI(input);
        console.log(res);
    }

    /*const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendClick = () => {
        setResultText(inputText);
        setInputText('');
    };*/

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
                        <h1 className='result'></h1>
                    </div>
                    <div className="prompt-area">
                        <div className="prompt">
                            <input type="textfield" placeholder='Enter a prompt here' className='prompt-text' value={input} onChange={(e)=>{setInput(e.target.value)}} />
                            <IoSend className='prompt-button'  onClick={handleSend}/>
                        </div>
                        <p>Bard may display inaccurate info, including about people, so double-check its responses.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
