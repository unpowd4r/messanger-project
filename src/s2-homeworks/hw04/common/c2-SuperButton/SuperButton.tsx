import { Button } from '@mui/material'
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>

type SuperButtonPropsType = {
	xType?: 'default' | 'secondary' | 'red' | 'blue'
	disabled?: boolean
	onClick?: () => void
	children: React.ReactNode
	id: string
	className?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = ({
	xType = 'secondary',
	disabled = false,
	onClick,
	children,
	id,
	className,
}) => {
	let buttonColor: 'secondary' | 'primary' | 'inherit' | 'error'

	// Определение цвета кнопки в зависимости от типа
	switch (xType) {
		case 'secondary':
			buttonColor = 'secondary'
			break
		case 'red':
			buttonColor = 'error' // В Material UI "error" используется для красного
			break
		case 'blue':
			buttonColor = 'primary' // Используем стандартный primary цвет
			break
		default:
			buttonColor = 'inherit' // default или любой другой
	}

	return (
		<Button
			id={id}
			variant='contained'
			color={buttonColor}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</Button>
	)
}

export default SuperButton
