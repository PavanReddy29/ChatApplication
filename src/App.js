import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm';

const projectID = 'b94397cc-5385-4223-a22e-d0ba0e4df10c';

const App=()=> {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <div className="App">
     <ChatEngine
      height = "100vh"
      projectID = {projectID}
      userName = {localStorage.getItem('username')}
      userSecret = {localStorage.getItem('password')}
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/> }
      onNewMessage = {() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
};

export default App;
