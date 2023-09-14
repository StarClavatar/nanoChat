import './App.css'
import { Theme, presetGpnDark } from '@consta/uikit/Theme';
import {Layout} from '@consta/uikit/Layout'
import Header from './components/Header/Header';
import ChatArea from './components/Header/ChatArea';

function App() {

  return (
      <Theme preset={presetGpnDark} className='theme'>
        <Header/>
        <Layout className='main' >
          <ChatArea />
        </Layout>
      </Theme>
  )
}

export default App
