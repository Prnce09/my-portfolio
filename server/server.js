import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

import portfolioData from "./portfolioData.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const PORT = 5001;

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Prince Portfolio AI Backend is running 🚀",
  });
});

// Chat route
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const prompt = `
${portfolioData.assistantInstructions}

Here is Prince Yadav's portfolio information:

${JSON.stringify(portfolioData, null, 2)}

Visitor's question:

${message}

Answer the visitor based ONLY on the portfolio information above.

If the information is not available, say:
"Sorry, I don't have that information in Prince's portfolio right now."

Keep the response natural, friendly and professional.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    res.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);

    res.status(500).json({
      error: "AI response generate nahi ho paya.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});