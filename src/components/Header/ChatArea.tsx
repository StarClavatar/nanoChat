import "./ChatArea.css";
import { Text } from "@consta/uikit/Text";
import { TextField } from "@consta/uikit/TextField";
import { IconSendMessage } from "@consta/icons/IconSendMessage";
import { Button } from "@consta/uikit/Button";
import bot from "../../assets/bot.jpg";
import { useEffect, useState } from "react";
import { messages, Messages } from "../../sampleData/messages";

function ChatArea() {
  const [value, setValue] = useState<string>("");
  const [chat, setChat] = useState<Messages>(messages);
  const handleChange = ({ value }: { value: string }) => setValue(value);
  const handleClick = () => {
    setChat([
      ...chat,
      {
        type: "my-message",
        text: value,
        date: Date().toLocaleString(),
      },
    ]);
    setValue("");
  };

  function handleKeyDown(e: { key: string; }): void {
    if (e.key === "Enter" && value.length > 0) {
      handleClick()
    }
  }

  useEffect(() => {
  
  })

  return (
    <div className="chat-area">
      <div className="chat-area__header">
        <img src={bot} alt="аватар" className="chat-avatar" />
        <Text>бот-хуеплёт</Text>
      </div>
      <div className="chat-area-messages">
        {chat.map((msg) => (
          <Text className={`message ${msg.type}`} size="s">
            <span className="message__time message__time">
              {new Date(msg.date).toLocaleString("ru-RU")}
            </span>
            {msg.text}
          </Text>
        ))}
      </div>
      <div className="chat-area-input">
        <TextField
          size="m"
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          form="round"
          width="full"
          className="chat-area-input__text-field"
          placeholder="Сообщение"
        />
        <Button
          iconRight={IconSendMessage}
          onClick={handleClick}
          view="clear"
        />
      </div>
    </div>
  );
}

export default ChatArea;
