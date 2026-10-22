import { useState } from "react";
import ReactMarkdown from "react-markdown";
import aiLogo from "../assets/ai-chatbot.png";

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
      const response = await fetch(
        "https://my-portfolio-b7la.onrender.com/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage,
          }),
        }
      );

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
      {/* ================= CHAT WINDOW ================= */}

      {isOpen && (
        <div
          className="
            fixed
            z-[9999]

            /* Mobile */
            left-3
            right-3
            bottom-24
            h-[70vh]
            max-h-[600px]

            /* Small phones */
            sm:left-auto
            sm:right-5
            sm:bottom-24
            sm:w-[380px]
            sm:h-[520px]

            /* Desktop */
            md:right-6
            md:w-[400px]
            md:h-[550px]

            flex
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-zinc-950
            text-white
            shadow-2xl
          "
        >

          {/* ================= HEADER ================= */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-white/10
              bg-zinc-900
              px-3
              py-3
              sm:px-4
              sm:py-4
              shrink-0
            "
          >

            <div className="flex items-center gap-3 min-w-0">

              {/* AI LOGO */}

              <div
                className="
                  flex
                  h-9
                  w-9
                  sm:h-10
                  sm:w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  border
                  border-cyan-400/30
                  overflow-hidden
                "
              >
                <img
                  src={aiLogo}
                  alt="AI Assistant"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TITLE */}

              <div className="min-w-0">

                <h3 className="text-sm font-semibold truncate">
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

            {/* CLOSE BUTTON */}

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close AI Assistant"
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
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

          {/* ================= MESSAGES ================= */}

          <div
            className="
              flex-1
              min-h-0
              space-y-3
              overflow-y-auto
              px-3
              py-3
              sm:px-4
              sm:py-4
              scrollbar-thin
            "
          >

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`
                    max-w-[85%]
                    sm:max-w-[80%]
                    rounded-2xl
                    px-3
                    py-2.5
                    sm:px-4
                    text-sm
                    leading-relaxed
                    break-words
                    overflow-hidden

                    ${
                      msg.sender === "user"
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
                          className="
                            text-cyan-400
                            underline
                            hover:text-cyan-300
                            transition
                            break-all
                          "
                        />
                      ),

                      p: ({ node, ...props }) => (
                        <p
                          {...props}
                          className="mb-1 last:mb-0"
                        />
                      ),

                      ul: ({ node, ...props }) => (
                        <ul
                          {...props}
                          className="list-disc ml-4 space-y-1"
                        />
                      ),

                      li: ({ node, ...props }) => (
                        <li {...props} />
                      ),
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>

                </div>

              </div>
            ))}

            {/* ================= LOADING ================= */}

            {loading && (
              <div className="flex justify-start">

                <div
                  className="
                    rounded-2xl
                    rounded-bl-md
                    bg-zinc-800
                    px-4
                    py-3
                    text-sm
                    text-zinc-400
                  "
                >

                  <div className="flex gap-1">

                    <span className="animate-bounce">
                      ●
                    </span>

                    <span
                      className="animate-bounce"
                      style={{
                        animationDelay: "150ms",
                      }}
                    >
                      ●
                    </span>

                    <span
                      className="animate-bounce"
                      style={{
                        animationDelay: "300ms",
                      }}
                    >
                      ●
                    </span>

                  </div>

                </div>

              </div>
            )}

          </div>

          {/* ================= INPUT ================= */}

          <div
            className="
              border-t
              border-white/10
              bg-zinc-900
              p-2.5
              sm:p-3
              shrink-0
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
                  min-w-0
                  flex-1
                  rounded-xl
                  border
                  border-white/10
                  bg-zinc-800
                  px-3
                  py-3
                  sm:px-4
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-zinc-500
                  focus:border-cyan-400/50
                  disabled:opacity-50
                "
              />

              <button
                onClick={sendMessage}
                disabled={loading || !message.trim()}
                aria-label="Send message"
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  text-lg
                  text-black
                  transition
                  hover:scale-105
                  active:scale-95
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

      {/* ================= FLOATING BUTTON ================= */}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={
          isOpen
            ? "Close AI Assistant"
            : "Open AI Assistant"
        }
        className="
          fixed
          bottom-5
          right-4
          sm:bottom-6
          sm:right-6
          z-[10000]

          flex
          h-14
          w-14
          sm:h-16
          sm:w-16

          items-center
          justify-center

          rounded-full

          border
          border-cyan-400/30

          bg-black

          text-xl
          sm:text-2xl

          text-white

          shadow-2xl
          shadow-cyan-500/20

          transition-all
          duration-300

          hover:scale-110
          active:scale-95
        "
      >

        {isOpen ? (
          "✕"
        ) : (
          <img
            src={aiLogo}
            alt="AI Assistant"
            className="
              h-11
              w-11
              sm:h-12
              sm:w-12
              object-cover
              rounded-full
            "
          />
        )}

      </button>
    </>
  );
};

export default Chatbot;