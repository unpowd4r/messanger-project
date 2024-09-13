import s2 from '../../s1-main/App.module.css'
import avatar from './avatar.png'
import FriendMessage from './friend-message/FriendMessage'
import MessageSender from './message-sender/MessageSender'
import Message from './message/Message'

/*
 * 1 - описать тип MessageType
 * 2 - описать тип MessagePropsType в файле Message.tsx
 * 3 - в файле Message.tsx отобразить приходящие данные
 * 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
 * 5 - сделать стили в соответствии с дизайном
 * */

// нужно создать правильный тип вместо any

export type MessageType = {
	id: number
	user: {
		avatar: string
		name: string
	}
	message: {
		text: string
		time: string
	}
}

// структуру объекта не менять
export const message0: MessageType = {
	id: 0,
	user: {
		avatar: avatar, // можно менять
		name: 'Ivan', // можно менять
	},
	message: {
		text: 'Hello, how are you, what did you do yesterday?', // можно менять
		time: '22:00', // можно менять
	},
}
export const friendMessage0: MessageType = {
	id: 100,
	user: {
		avatar: avatar, // можно менять
		name: 'Stas', // можно менять
	},
	message: {
		text: 'Hello, she didn’t do anything and rested all day, how are you?', // можно менять
		time: '22:00', // можно менять
	},
}

const HW1 = () => {
	return (
		<div id={'hw1'} className={s2.hw1}>
			<div className={s2.container}>
				<div className={s2.hwTitle}>Homework #1</div>
				<div className={s2.hw}>
					{/*проверка отображения (не менять)*/}
					<div className={s2.hwMessages}>
						<Message message={message0} />
						<FriendMessage message={friendMessage0} />
					</div>

					{/*для автоматической проверки дз (не менять)*/}
					<MessageSender M={Message} />
				</div>
			</div>
		</div>
	)
}

export default HW1