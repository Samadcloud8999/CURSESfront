import React, { useEffect } from "react";

const ChatbaseWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "rRwC4MPzTqqnqy0Snu5e0";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default ChatbaseWidget;
