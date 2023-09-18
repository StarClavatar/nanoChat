import "./ChatArea.css";
import { Text } from "@consta/uikit/Text";
import { TextField, TextFieldOnChangeArguments } from "@consta/uikit/TextField";
import { IconSendMessage } from "@consta/icons/IconSendMessage";
import { Button } from "@consta/uikit/Button";
import bot from "../../assets/bot.jpg";
import { useState, useRef, useEffect } from "react";
import { Messages, messages } from "../../sampleData/messages";
import { chatRequest } from "../../api/chatApi";
import Parser from 'react-html-parser';

interface Props {
  onResetChat: () => void
}

export function ChatArea({ onResetChat }: Props) {
  const [value, setValue] = useState<string | null>("");
  const [chat, setChat] = useState<Messages>([]);
  const [sending, setSending] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chatHistory = localStorage.getItem("chatHistory")
    if (chatHistory) {
      setChat(JSON.parse(chatHistory));
  } else {
      setChat(messages);
      saveMessages(messages);
  }
  }, [])
  
  useEffect(() => {
    scrollToBottom()
  }, [chat]);

  const handleChange = (args: TextFieldOnChangeArguments) => setValue(args.value);

  const handleClick = () => sendMessage();

  const handleKeyDown = (e: { key: string }): void => {
    if (e.key === "Enter") sendMessage();
  };


  const scrollToBottom = () => {
    messagesEndRef.current?.scroll({ top: messagesEndRef.current.scrollHeight, behavior: 'smooth' });
  }

  function saveMessages(chat: Messages) {
    localStorage.setItem("chatHistory", JSON.stringify(chat))
  }

  function sendMessage() {
    if (sending===true || value === null || value.trim() === "") return;
    setSending(true)
    setChat((chat) => {
      const newChat = [
        ...chat,
        {
          type: "my-message",
          text: value,
          date: Date().toLocaleString(),
        },
      ]
      saveMessages(newChat)
      return newChat
    });
    
    chatRequest(value)
    .then((res) => {
      setValue("");
      setChat((chat) => {
        const newChat = [
          ...chat,
          {
            type: "bot-message",
            text: res,
            date: Date().toLocaleString(),
          },
        ]
        saveMessages(newChat)
        return newChat
      })
      setSending(false)
    })
    .catch(err => {
      console.log(err)
      setSending(false)
    }
    )
  }

  return (
    <div className="chat-area">
      <div className="chat-area__header">
        <div className="heading-logo-wrapper">
          <img src={bot} alt="аватар" className="chat-avatar" />
          <Text className="chat-area__name">чат-бот</Text>
        </div>
        <Button size="s" onClick={onResetChat} view="secondary" label={"Перезагрузить"}/>
      </div>
      <div className="chat-area-messages" ref={messagesEndRef}>
        {chat.map((msg, idx) => (
          <Text key={idx} className={`message ${msg.type}`} size="s" as="p">
            <span className="message__time message__time">
              {new Date(msg.date).toLocaleString("ru-RU")}
            </span>
            {Parser(msg.text)}
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
          view="primary"
          disabled={sending || value?.trim() === ''}
          loading={sending}
        />
      </div>
    </div>
  );
}


