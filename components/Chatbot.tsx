"use client";

import { useState } from "react";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to Olmem Tech. How can I help you learn about our services?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simple response logic
    setTimeout(() => {
      const botResponse = getBotResponse(input.toLowerCase());
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const getBotResponse = (userInput: string): string => {
    if (userInput.includes("service") || userInput.includes("services")) {
      return "We offer Web Development, Contractor CMS, and Agentic AI Creation. Check out our Services page for more details!";
    }
    if (userInput.includes("contact") || userInput.includes("email")) {
      return "You can reach us at jeff@olmemtech.com or fill out the form on our Contact page.";
    }
    if (userInput.includes("cms") || userInput.includes("contractor")) {
      return "Our Contractor CMS helps contractors manage their websites easily. Visit /cms for a demo.";
    }
    if (userInput.includes("ai") || userInput.includes("agent")) {
      return "We create custom AI agents for contractor workflows. Learn more on our Agentic AI Creation page.";
    }
    if (userInput.includes("web") || userInput.includes("development")) {
      return "Our web development services build SEO-optimized sites for contractors. See /services/web-development.";
    }
    if (userInput.includes("about") || userInput.includes("company")) {
      return "Olmem Tech specializes in tools for contractors and automotive businesses. Visit our About page.";
    }
    return "I'm sorry, I can only answer questions about our website and services. Feel free to ask about our CMS, AI, or web development!";
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg transition hover:bg-orange-600"
        aria-label="Open chat"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 rounded-lg border border-gray-200 bg-white shadow-xl">
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">Olmem Tech Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs rounded-lg px-3 py-2 text-sm ${
                    msg.sender === "user"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me about our services..."
                className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="rounded bg-orange-500 px-4 py-2 text-sm text-white hover:bg-orange-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}