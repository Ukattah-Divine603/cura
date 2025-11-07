"use client";
import { useState } from "react";
import ChatbotIcon from "@/components/layout/chatboticon";
import ChatForm from "@/components/layout/chatform";
import ChatMessage from "@/components/layout/chatmessage";

export interface ChatMessageType {
  role: "user" | "model";
  text: string;
}

const Chat: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessageType[]>([]);

  const generateBotResponse = (history: ChatMessageType[]): void => {
    console.log(history);
  };

  return (
    <div className="flex flex-col items-center justify-between h-full bg-[#08002e] pt-20 pb-20">
      {/* Chatbot Body */}
      <div className="h-[390px] overflow-y-scroll overflow-x-hidden p-2 custom-scrollbar">
        <div className="flex items-center gap-2 mb-4 flex-row">
          <ChatbotIcon />
          <p className="flex items-center text-white font-nunito text-1 font-light h-fit p-3 rounded-md bg-[#4006ff]">
            Hello! 👋 How can I assist you today?
          </p>
        </div>

        {chatHistory.map((chat, index) => (
          <ChatMessage
            key={index}
            chat={chat}
            nextChat={chatHistory[index + 1]} // fixed this line
          />
        ))}
      </div>

      {/* Chatbot Footer */}
      <div className="chat-footer">
        <ChatForm
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          generateBotResponse={generateBotResponse}
        />
      </div>
    </div>
  );
};

export default Chat;
