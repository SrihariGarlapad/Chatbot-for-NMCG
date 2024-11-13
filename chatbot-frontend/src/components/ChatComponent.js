import React, { useState, useEffect, useRef } from "react";
import "./Styles/ChatComponent.css";
import axios from "axios";
import { speakText } from "./Voice";
import main2 from "./Gifs/main2.gif";
import IAMFINEFF from "./Gifs/IAMFINEFF.gif";
import explainingfff from "./Gifs/explainingfff.gif";
import UN11 from "./Gifs/UN11.gif";

function ChatComponent() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentGif, setCurrentGif] = useState(null);
  const chatContainerRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (message.trim() === "") return;

    try {
      // Simulate typing animation for bot
      setIsTyping(true);
      setTimeout(async () => {
        const response = await axios.post("http://127.0.0.1:5000/send_message", { message });
        const botResponse = response.data.response;

        // Speak text response
        speakText(botResponse);

        // Update messages state using functional form
        setMessages((prevMessages) => [
          ...prevMessages,
          { message, sender: "user" },
          { message: botResponse, sender: "bot" },
        ]);

        setMessage("");

        // Update GIF state
        const newGifUrl = getGifUrlForMessage(message, botResponse);
        setCurrentGif(newGifUrl ? <img key={messages.length} src={newGifUrl.gifUrl} alt={`GIF for ${message}`} className={`gif ${newGifUrl.className}`} /> : null);

        setIsTyping(false);
      }, 1000); // Adjust the delay as needed
    } catch (error) {
      console.error("Error sending the message:", error);
      // Display user-friendly error message to the user
      setIsTyping(false);
    }
  };

  const getGifUrlForMessage = (userMessage, botResponse) => {
    if (botResponse.includes("Hi there, how can I help?")) {
      return {
        gifUrl: main2,
        className: "main2",
      };
    } else if (userMessage.toLowerCase().includes("how are you") || userMessage.toLowerCase().includes("How are you")) {
      return {
        gifUrl: IAMFINEFF,
        className: "IAMFINEFF",
      };
    } else if (botResponse.includes("As of now I can not answer it.")) {
      return {
        gifUrl: UN11,
        className: "UN11",
      };
    }
  
    return {
      gifUrl: explainingfff,
      className: "explainingfff",
    };
  };

  // ...
  useEffect(() => {
    // Scroll to the bottom of the chat container after each update to messages
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Display the current GIF */}
      {currentGif && (
        <div className={`outside-container ${currentGif.className}`}>
          <div className="gif-container">
            {currentGif}
          </div>
        </div>
      )}

      <div className="chat-container" ref={chatContainerRef}>
        <div className="message-section">
          
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === "bot" ? "bot" : "user"}>
              {msg.sender === "bot" && isTyping ? (
                <span>{msg.message.slice(0, -1)}<span className="typing-animation">|</span></span>
              ) : (
                msg.message
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="send-container">
        <form action="#" name="Chatbot" id="SendButton">
          <input
            type="text"
            className="messageSpace"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Send a message"
          />
          <button onClick={sendMessage} className="bi bi-send">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}

export default ChatComponent;
