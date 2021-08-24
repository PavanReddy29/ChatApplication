
import MsgForm from './MsgForm';
import MyMsg from './MyMsg';
import OthersMsg from './OthersMsg';

const ChatFeed = (props) => {
    
const{chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderReadReceipts =(messages,isMyMsg)=> chat.people.map((person,index)=> person.last_read === messages.id &&(
        <div>
            key = {`read_${index}`}
            className = "read-receipt"
            style={{
                float: isMyMsg? 'right' : 'left',
                backgrounImage: person.person.avatar && `url(${person.person.avatar})`
            }}
        </div>
    ));

        const renderMessages = () =>{
            const keys = Object.keys(messages);

            return keys.map((key, index) =>{
                const message = messages[key];
                const lastMessageKey = index === 0 ? null : keys[index -1];
                const isMyMsg = userName === message.sender.userName;
                
                return(
                    <div key = {`msg_${index}`} style={{width: '100%'}}>
                        <div className="message-block">
                            { isMyMsg 
                                ? <MyMsg message = {messages}/>
                                : <OthersMsg message = {message} lastMessage = {messages[lastMessageKey]}/>
                            }
                        </div>
                        <div className = "read-receipts" style = {{marginRight : isMyMsg ? "18px" : "0px",
                                                                    marginLeft : isMyMsg ? "0px" : "68px"
                                                                    }}>
                            {renderReadReceipts(messages,isMyMsg)}                                            

                        </div>
                    </div>
                );
            });
        }; 
    if (!chat) return <div />;
    return(
        <div className = "chat-feed">
            <div className="chat-title-container">
                    <div className="chat-title">{chat?.title}</div>
                    <div className="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.username}`)}
                    </div>
                    </div>        
                    {renderMessages()}
                    <div style={{height:'450px'}}/>
                    <div className="message-Form-Container">
                        <MsgForm {...props} chatId={activeChat}/>
                    </div>    
        </div>
    );
};
export default ChatFeed;