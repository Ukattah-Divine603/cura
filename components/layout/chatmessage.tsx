import type { ChatMessageType } from "../../app/chat/page";
import ChatbotIcon from "./chatboticon";

interface ChatMessageProps {
  chat: ChatMessageType;
  nextChat?: ChatMessageType; // pass the next message for comparison
}

const ChatMessage: React.FC<ChatMessageProps> = ({ chat, nextChat }) => {
  const isSameRole = nextChat?.role === chat.role;

  return (
    <div
      className={`flex items-start gap-2 mb-4 ${
        chat.role === "model" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {chat.role === "model" && <ChatbotIcon />}
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-white font-nunito text-sm font-light p-3 rounded-md bg-[#4006ff]">
          {chat.text}
        </p>

        {isSameRole && (
          <p className="text-white font-nunito text-sm font-light p-3 rounded-md bg-[#4006ff]">
            {nextChat.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
