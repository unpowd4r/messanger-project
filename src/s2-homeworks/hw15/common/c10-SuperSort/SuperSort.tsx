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
<<<<<<< HEAD
	if (sort === '') return down // если нет сортировки, ставим down
	if (sort === down) return up // если уже down, ставим up
	if (sort === up) return '' // если уже up, сбрасываем
	return ''
=======
	if (sort === '') return down // Если текущая сортировка пустая, ставим сортировку по убыванию
	if (sort === down) return up
	return '' // исправить
>>>>>>> 0505a42c2e52acde5b2b942233269fa725d4739d
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
			{/*<img*/}
			{/*    id={id + '-icon-' + sort}*/}
			{/*    src={icon}*/}
			{/*/>*/}
			{icon} {/*а это убрать*/}
		</span>
	)
}

export default SuperSort
