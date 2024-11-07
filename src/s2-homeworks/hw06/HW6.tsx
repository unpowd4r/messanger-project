import { Container } from '@mui/material'
import { useState } from 'react'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import s from './HW6.module.css'
import { saveState } from './localStorage/localStorage'

/*
 * 1 - в файле SuperEditableSpan.tsx дописать логику функций onEnterCallback, onBlurCallback, onDoubleClickCallBack
 * 2 - дописать логику функции restore
 * 3 - сделать стили в соответствии с дизайном
 */

const HW6 = () => {
	const [value, setValue] = useState<string>('')

	const save = () => {
		saveState<string>('hw6-editable-span-value', value)
	}
	const restore = () => {
		const savedValue = localStorage.getItem('hw6-editable-span-value')
		if (savedValue) {
			setValue(savedValue)
		}
	}

	return (
		<div id={'hw6'}>
			<Container className={s.containSection}>
				<div className={s2.hwTitle}>Homework #6</div>

				{/*демонстрация возможностей компоненты:*/}
				<div className={s2.hw}>
					<div className={s.editableSpanContainer}>
						<SuperEditableSpan
							id={'hw6-spanable-input'}
							value={value}
							onChangeText={setValue}
							spanProps={{
								id: 'hw6-editable-span',
								defaultText: 'Enter text...',
							}}
						/>
					</div>

					<div className={s.buttonsContainer}>
						<SuperButton className={s.button} id={'hw6-save'} onClick={save}>
							Save to ls
						</SuperButton>

						<SuperButton
							className={s.button}
							id={'hw6-restore'}
							onClick={restore}
							xType={'secondary'}
						>
							Restore
						</SuperButton>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default HW6
