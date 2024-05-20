import React from 'react'
import { useSelector } from 'react-redux'
import ScrollableFeed from 'react-scrollable-feed'
import Tooltip from './Tooltip'
import Avatar from './Avatar'
import { isLastMessage, isSameSender, isSameSenderMargin, isSameUser } from './config/ChatLogics'
const ScrollableChat = () => {
    const {user} = useSelector((state)=> state.auth)
    const {messages} = useSelector((state)=> state.message)
  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <div className="flex" key={m._id}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip label={m.sender.fName}>
                <Avatar src={m.sender.profilePicture} alt={m.sender.fName} />
              </Tooltip>
            )}
            <span
              className={`${
                m.sender._id === user._id ? "bg-blue-200" : "bg-green-200"
              } ml-${isSameSenderMargin(messages, m, i, user._id)} ${
                isSameUser(messages, m, i, user._id) ? "mt-3" : "mt-10"
              } rounded-lg px-5 py-2 max-w-3/4`}
            >
              {m.content}
            </span>
          </div>
        ))}
    </ScrollableFeed>
  )
}

export default ScrollableChat
