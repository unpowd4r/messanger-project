import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
	id?: string
	sort: string
	value: string
	onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
	// пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
	switch (sort) {
		case '':
			return down
		case down:
			return up
		case up:
			return ''
		default:
			return down // Возвращаем значение по умолчанию, если sort не совпадает с ожидаемыми значениями
	}
}

const SuperSort: React.FC<SuperSortPropsType> = ({
	sort,
	value,
	onChange,
	id = 'hw15',
}) => {
	const up = '0' + value
	const down = '1' + value

	const onChangeCallback = () => {
		onChange(pureChange(sort, down, up))
	}

	const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon

	return (
		<span id={id + '-sort-' + value} onClick={onChangeCallback}>
			{/*сделать иконку*/}
			<img
				id={id + '-icon-' + sort}
				src={icon}
				style={{ marginLeft: '5px', width: '20px', height: '17px' }}
				alt={'icon'}
			/>
		</span>
	)
}

export default SuperSort
