import React, { useState, useEffect } from 'react';
import './chatbot.css';
import '../src/components/module/scrollable.css'
import ReactMarkdown from 'react-markdown';
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
const { GoogleGenerativeAI } = require("@google/generative-ai");

function Chatbo() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
  }, []);

  const handleMessageSend = async () => {
    if (input.trim() !== '') {
      const newMessage = { text: input, sender: 'user' };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setInput('');
      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ]
      const generationConfig = {
        stopSequences: ["red"],
        maxOutputTokens: 1000,
        temperature: 0.9,
        topP: 0.1,
        topK: 16,
      };

      // Send user's message to the bot and get response
      try {
        const genAI = new GoogleGenerativeAI(process.env.local.apikey);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" ,safetySettings , generationConfig});
        const chat = model.startChat();
        const result = await chat.sendMessage(input);
        const response = await result.response;
        const text = response.text();
        const botMessage = { text: text, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } catch (error) {
        console.error("Error sending message to bot:", error);
      }
    }
  };

  return (
    <>
    <div className="container" style={{ height:"200px", width:"800px", marginLeft:"400px",marginTop:"70px"}}>
    <div className="chat-container">
      <div className="chat-box scroll">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.sender === 'bot' ? (
              <ReactMarkdown>{message.text}</ReactMarkdown>
            ) : (
              message.text
            )}
          </div>
        ))}
      </div>
          <div className="input-box" style={{ position: "sticky",}}>
        <input
          type="text"
          placeholder="Ask anything about the constitution here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleMessageSend();
            }
          }}
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
      </div>
      <div className="margin4"></div>
    </>
  );
}

export default Chatbo;
