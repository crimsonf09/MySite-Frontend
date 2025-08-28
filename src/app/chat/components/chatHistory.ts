export interface ChatMessage {
    sender: "User" | "Armin";
    message: string;
    timestamp: string;
}

export const loadChatHistory = (): ChatMessage[] => {
  const data = localStorage.getItem("chatHistory");
  return data ? JSON.parse(data) : [];
};

export const saveChatHistory = (messages: ChatMessage[]) => {
  localStorage.setItem("chatHistory", JSON.stringify(messages));
};
