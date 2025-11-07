import { useRef } from "react";
import type { ChatMessageType } from "../../app/chat/page";

interface ChatFormProps {
  chatHistory: ChatMessageType[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessageType[]>>;
  generateBotResponse: (history: ChatMessageType[]) => void;
}

const ChatForm: React.FC<ChatFormProps> = ({
  chatHistory,
  setChatHistory,
  generateBotResponse,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userMessage = inputRef.current?.value.trim();
    if (!userMessage) return;

    if (inputRef.current) inputRef.current.value = "";

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Generating Response..." },
      ]);

      generateBotResponse([
        ...chatHistory,
        { role: "user", text: userMessage },
      ]);
    }, 600);
  };

  return (
    <form
      action="#"
      className="border-2 p-1 border-[#4006FF] bg-[#3711b350] text-white font-nunito text-1 font-light  rounded-lg max-w-[400px] m-auto outline-none flex fixed bottom-1 left-0 right-0 flex-row items-center bottom-0 gap-2"
      onSubmit={handleFormSubmit}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="  text-white font-nunito text-1 font-light p-3 rounded-lg w-full outline-none"
        required
      />
      <button
        className="p-3 cursor-pointer bg-[#3711b350] border-[#4006FF] border-2 flex items-center justify-center rounded-full"
        type="submit"
      >
        <img src="/send.svg" alt="Send_Icon" />
      </button>
    </form>
  );
};

export default ChatForm;
