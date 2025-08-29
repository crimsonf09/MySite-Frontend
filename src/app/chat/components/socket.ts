import { ChatMessage } from "./chatHistory";

let socket: WebSocket | null = null;

export function initSocket(onMessage: (data: ChatMessage) => void) {
  socket = new WebSocket(`${process.env.NEXT_PUBLIC_SOCKET_URL}`); // adjust port if needed

  socket.onopen = () => {
    console.log("✅ WebSocket connected");
  };

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      onMessage(data);
    } catch (err) {
      console.error("❌ Error parsing WebSocket message", err);
    }
  };

  socket.onclose = () => {
    console.log("❌ WebSocket closed");
  };

  socket.onerror = (err) => {
    console.error("⚠️ WebSocket error", err);
  };
}

export function sendMessage(messageObj: { uiId: string; sender: string; message: string }) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(messageObj));
    return true; // confirm sent
  }
  return false; // not sent
}
