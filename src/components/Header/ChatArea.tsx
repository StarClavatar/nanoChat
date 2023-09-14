import './ChatArea.css'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField';
import { IconSendMessage } from '@consta/icons/IconSendMessage';
import { Button } from '@consta/uikit/Button';
import bot from '../../assets/bot.jpg'
import { useState } from 'react';

function ChatArea() {
  const [value, setValue] = useState<string | null>('')
  const handleChange = ({ value }: { value: string | null }) => setValue(value);

  return (
    <div className='chat-area'>
        <div className='chat-area__header'>
          <img src={bot} alt="аватар" className="chat-avatar" />
          <Text>бот-хуеплёт</Text>
        </div>
          <div className="chat-area-messages">
            <Text className='message bot-message'> <span className='message__time message__time_bot'>15:35</span> здарова, я ответ от API</Text>
            <Text className="message my-message">здарова! <span className='message__time'>15:35</span></Text>
          </div>
        <div className='chat-area-input'>
          <TextField size='m' value={value} onChange={handleChange} form='round' width='full' className='chat-area-input__text-field' placeholder='Сообщение'/>
          <Button iconRight={IconSendMessage} view='clear'/>
        </div>
    </div>
  )
}

export default ChatArea