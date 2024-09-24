import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
	users: UserType[] // need to fix any
	addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (
	name: string,
	setError: Dispatch<SetStateAction<boolean>>,
	setName: Dispatch<SetStateAction<string>>,
	addUserCallback: (name: string) => void
) => {
	if (name.trim() === '') {
		setError(true) // Показать ошибку, если имя пустое
	} else {
		addUserCallback(name) // Добавить пользователя
		setName('')
		setError(false) // Очистить ошибку
	}
}

export const pureOnBlur = (
	name: string,
	setError: Dispatch<SetStateAction<boolean>>
) => {
	if (name.trim() === '') {
		setError(true) // Показать ошибку, если имя пустое
	} else {
		setError(false) // Очистить ошибку
	}
}

export const pureOnEnter = (e: KeyboardEvent, addUser: () => void) => {
	if (e.key === 'Enter') {
		addUser()
	}
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
	users,
	addUserCallback,
}) => {
	// деструктуризация пропсов
	const [name, setName] = useState<string>('') // need to fix any
	const [error, setError] = useState<boolean>(false) // need to fix any

	const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
		// need to fix any
		setName(e.target.value) // need to fix

		error && setError(false)
	}
	const addUser = () => {
		console.log('ss')
		pureAddUser(name, setError, setName, addUserCallback)
	}

	const onBlur = () => {
		pureOnBlur(name, setError)
	}

	const onEnter = (e: any) => {
		pureOnEnter(e, addUser)
	}

	const totalUsers = users.length // need to fix
	const lastUserName = users.length > 0 ? users[users.length - 1].name : ''

	return (
		<Greeting
			name={name}
			setNameCallback={setNameCallback}
			addUser={addUser}
			onBlur={onBlur}
			onEnter={onEnter}
			error={error}
			totalUsers={totalUsers}
			lastUserName={lastUserName}
		/>
	)
}

export default GreetingContainer
