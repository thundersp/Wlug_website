import React from "react";
import ChatBot from "../../Components/Chatbot/Chatbot";
import { WavyBackground } from "../../ui/wavy-backSRC";

const ChatbotPage = () => {
    return (
        <div className="w-full min-h-screen md:p-8 p-2 flex justify-center items-center">
            <ChatBot />
        </div>
    );
};

export default ChatbotPage;
