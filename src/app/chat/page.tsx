"use client";
import React, { useState, useEffect } from "react";
import NightSkyBackground from "../background/NightSkyBackground";
import InputBox from "@/components/TextBox";
import { motion, AnimatePresence } from "framer-motion";
import { initSocket, sendMessage } from "./components/socket";

interface ChatMessage {
    sender: string;
    message: string;
    timestamp: string;
}

export default function Chat() {
    const [chatBoxMessage, setChatBoxMessage] = useState("");
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

    // Load stored history on mount
    useEffect(() => {
        const stored = localStorage.getItem("chatHistory");
        if (stored) {
            setChatHistory(JSON.parse(stored));
        }

        // Initialize WebSocket and handle incoming messages
        initSocket((data) => {
            const incomingMessage: ChatMessage = {
                sender: data.sender,
                message: data.message,
                timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            };

            // Functional update ensures latest state
            setChatHistory((prev) => {
                const updated = [...prev, incomingMessage];
                localStorage.setItem("chatHistory", JSON.stringify(updated));
                return updated;
            });
        });
    }, []);

    // Save user message to state & localStorage
    const saveMessage = (chat: ChatMessage) => {
        setChatHistory((prev) => {
            const updated = [...prev, chat];
            localStorage.setItem("chatHistory", JSON.stringify(updated));
            return updated;
        });
    };

    const handleSendMessage = () => {
        if (chatBoxMessage.trim().length === 0) return;

        const newMessage: ChatMessage = {
            sender: "You",
            message: chatBoxMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        // Send message in the required format
        const sent = sendMessage({
            uiId: "user123",
            sender: "Touch",
            message: chatBoxMessage,
        });

        if (!sent) console.log("❌ Socket send failed");

        saveMessage(newMessage);
        setChatBoxMessage("");
    };

    return (
        <div className="relative flex flex-col w-full h-screen pb-20 text-white overflow-hidden bg-black">
            <NightSkyBackground />

            {/* Chat content area */}
            <div className="flex-1 w-full px-[150px] pt-10 pb-36 overflow-y-auto flex flex-col space-y-4 scrollbar-none z-10">
                <AnimatePresence initial={false}>
                    {chatHistory.map((msg, idx) => {
                        const isYou = msg.sender === "You";
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className={`flex items-end ${isYou ? "justify-end" : "justify-start"}`}
                            >
                                {/* Chat bubble */}
                                <div
                                    className={`max-w-[70%] px-4 py-2 rounded-2xl break-words relative overflow-hidden text-white text-sm bg-black/30 backdrop-blur-md ${
                                        isYou
                                            ? "rounded-br-none bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-800/80"
                                            : "rounded-bl-none bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600"
                                    }`}
                                >
                                    <span className="relative z-10">{msg.message}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Full-width blur behind input */}
            <div className="absolute bottom-0 left-0 w-full h-23 pointer-events-none z-20">
                <div
                    className="w-full h-full bg-gradient-to-t from-black/60 via-black/30 to-black/0 backdrop-blur-md"
                />
            </div>

            {/* Input area */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 flex items-center gap-4 z-40"
            >
                <div className="flex-1 h-16 rounded-3xl shadow-lg flex items-center px-4 relative overflow-hidden">
                    <InputBox
                        shadow="Message"
                        checker={(value: string | number) => String(value).length > 0}
                        setValue={setChatBoxMessage}
                        value={chatBoxMessage}
                        type="text"
                        scroll={true}
                        style="w-full h-full bg-transparent outline-none relative z-10 text-white"
                    />
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    className="w-20 h-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg text-white font-bold transition-all duration-300"
                >
                    Send
                </motion.button>
            </motion.div>

            {/* Hide scrollbars */}
            <style jsx>{`
                .scrollbar-none::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-none {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
