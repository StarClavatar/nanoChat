import './App.css'
import { Theme, presetGpnDark } from '@consta/uikit/Theme';
import { Loader } from '@consta/uikit/Loader';

import {Layout} from '@consta/uikit/Layout'
import Header from './components/Header/Header';
import { ChatArea } from './components/Header/ChatArea';
import { useEffect, useState } from 'react';
import { chatInit } from './api/chatApi';

function App() {
  const [cuid, setCuid] = useState('')

  useEffect(() => {
    chatInit().then((res) => setCuid(res))
  }, [cuid])

  function handleReset() {
    localStorage.clear()
    setCuid('')
  }
  
  return (
      <Theme preset={presetGpnDark} className='theme'>
      <Header/>
      {cuid ?
        <Layout className='main' >
        <ChatArea onResetChat={handleReset}/>
        </Layout> 
      :
        <Loader />
      }
      </Theme>
  )
}

export default App
