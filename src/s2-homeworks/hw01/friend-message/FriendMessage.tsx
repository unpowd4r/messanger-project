import { MessagePropsType } from '../message/Message'
import s from './FriendMessage.module.css'

const FriendMessage = ({ message }: MessagePropsType) => {
	return (
		<div id={'hw1-friend-message-' + message.id} className={s.friendMessage}>
			<div className={s.friendImageAndText}>
				<div className={s.friendImageAndTime}>
					<img
						id={'hw1-friend-avatar-' + message.id}
						src={message.user.avatar}
					/>
					<div id={'hw1-friend-time-' + message.id} className={s.friendTime}>
						{message.message.time}
					</div>
				</div>

				<div className={s.friendText}>
					<div id={'hw1-friend-name-' + message.id} className={s.friendName}>
						{message.user.name}
					</div>
					<pre
						id={'hw1-friend-text-' + message.id}
						className={s.friendMessageText}
					>
						{message.message.text}
					</pre>
				</div>
			</div>
		</div>
	)
}

export default FriendMessage
