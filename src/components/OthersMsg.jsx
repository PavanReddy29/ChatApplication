const OthersMsg = ({lastMessage, message})=>{
    const isFirstMessageByThatUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return(
        <div className="message-row">
            {isFirstMessageByThatUser &&(
                <div className="message-avatar"
                     style={{backgroundImage:message.sender && `url(${message.sender.avatar})`}}
                />
            )}

            {message.attachments && message.attachments.length > 0
                ?(  
                    <img 
                        src={message.attachments[0].file}
                        alt="message-attachments"
                        className= "message-image"
                        style={{marginRight: isFirstMessageByThatUser?'4px' : '48px'}}
                    />
                )
                :(
                    <div className="message" style={{float:'left',backgroundColor:'#182326',
                                                    marginLeft:isFirstMessageByThatUser ? '4px': '48px',color:"white",}}>
                        {message.text}
                    </div>
            )}
        </div>
    );
};
export default OthersMsg;