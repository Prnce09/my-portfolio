import { useState } from "react";
import ReactMarkdown from "react-markdown";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "Hi! 👋 I'm Prince's AI assistant. Ask me anything about his skills, projects, or experience.",
        },
    ]);

    const sendMessage = async () => {
        if (!message.trim() || loading) return;

        const userMessage = message.trim();

        setMessages((prev) => [
            ...prev,
            {
                sender: "user",
                text: userMessage,
            },
        ]);

        setMessage("");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:5001/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: userMessage,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setMessages((prev) => [
                ...prev,
                {
                    sender: "ai",
                    text: data.reply,
                },
            ]);
        } catch (error) {
            console.error("Chat Error:", error);

            setMessages((prev) => [
                ...prev,
                {
                    sender: "ai",
                    text: "Sorry 😕 I couldn't connect to the AI right now.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* CHAT WINDOW */}
            {isOpen && (
                <div
                    className="
            fixed bottom-24 right-5 z-[9999]
            flex h-[500px] w-[360px]
            flex-col overflow-hidden
            rounded-2xl
            border border-white/10
            bg-zinc-950
            text-white
            shadow-2xl
            sm:right-6
          "
                >
                    {/* HEADER */}
                    <div
                        className="
              flex items-center justify-between
              border-b border-white/10
              bg-zinc-900
              px-4 py-4
            "
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  bg-white text-xl
                "
                            >
                                🤖
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold">
                                    Prince's AI Assistant
                                </h3>

                                <div className="mt-1 flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-green-400" />
                                    <span className="text-xs text-zinc-400">
                                        Online
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="
                flex h-8 w-8 items-center justify-center
                rounded-full
                text-zinc-400
                transition
                hover:bg-white/10
                hover:text-white
              "
                        >
                            ✕
                        </button>
                    </div>

                    {/* MESSAGES */}
                    <div
                        className="
              flex-1
              space-y-3
              overflow-y-auto
              px-4 py-4
              scrollbar-thin
            "
                    >
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`
                    max-w-[80%]
                    rounded-2xl
                    px-4 py-2.5
                    text-sm
                    leading-relaxed
                    ${msg.sender === "user"
                                            ? "rounded-br-md bg-white text-black"
                                            : "rounded-bl-md bg-zinc-800 text-zinc-100"
                                        }
                  `}
                                >
                                    <ReactMarkdown
                                        components={{
                                            a: ({ node, ...props }) => (
                                                <a
                                                    {...props}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-cyan-400 underline hover:text-cyan-300 transition"
                                                />
                                            ),
                                        }}
                                    >
                                        {msg.text}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        ))}

                        {/* LOADING */}
                        {loading && (
                            <div className="flex justify-start">
                                <div
                                    className="
                    rounded-2xl rounded-bl-md
                    bg-zinc-800
                    px-4 py-3
                    text-sm
                    text-zinc-400
                  "
                                >
                                    <div className="flex gap-1">
                                        <span className="animate-bounce">●</span>
                                        <span
                                            className="animate-bounce"
                                            style={{ animationDelay: "150ms" }}
                                        >
                                            ●
                                        </span>
                                        <span
                                            className="animate-bounce"
                                            style={{ animationDelay: "300ms" }}
                                        >
                                            ●
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* INPUT */}
                    <div
                        className="
              border-t border-white/10
              bg-zinc-900
              p-3
            "
                    >
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask me anything..."
                                disabled={loading}
                                className="
                  min-w-0 flex-1
                  rounded-xl
                  border border-white/10
                  bg-zinc-800
                  px-4 py-3
                  text-sm text-white
                  outline-none
                  placeholder:text-zinc-500
                  focus:border-white/30
                  disabled:opacity-50
                "
                            />

                            <button
                                onClick={sendMessage}
                                disabled={loading || !message.trim()}
                                className="
                  flex h-11 w-11
                  shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-white
                  text-lg
                  text-black
                  transition
                  hover:scale-105
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
                            >
                                ➤
                            </button>
                        </div>

                        <p className="mt-2 text-center text-[10px] text-zinc-600">
                            Powered by Gemini AI
                        </p>
                    </div>
                </div>
            )}

            {/* FLOATING BUTTON */}
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Open AI Assistant"
                className="
          fixed
          bottom-6
          right-6
          z-[10000]
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-white
          text-2xl
          text-black
          shadow-2xl
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-white/20
          active:scale-95
        "
            >
                {isOpen ? "✕" : "🤖"}
            </button>
        </>
    );
};

export default Chatbot;