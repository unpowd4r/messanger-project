import { Container } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer'
import { AppStoreType } from './bll/store'
import { Loader } from './Loader'

/*
 * 1 - в файле loadingReducer.ts дописать типы и логику
 * 2 - получить isLoading из редакса
 * 3 - дописать функцию setLoading
 * 4 - сделать стили в соответствии с дизайном
 * */

const HW10 = () => {
	const dispatch = useDispatch()
	const isLoading = useSelector(
		(state: AppStoreType) => state.loading.isLoading
	)

	// useSelector, useDispatch // пишет студент
	const setLoading = () => {
		dispatch(loadingAC({ isLoading: true }))

		setTimeout(() => {
			dispatch(loadingAC({ isLoading: false }))
		}, 1500)
	}

	return (
		<div id={'hw10'}>
			<div className={s2.hwTitle}>Homework #10</div>

			<div className={s2.hw}>
				<Container>
					{isLoading ? (
						<div id={'hw10-loading'}>
							<Loader />
						</div>
					) : (
						<SuperButton id={'hw10-button-start-loading'} onClick={setLoading}>
							Set loading...
						</SuperButton>
					)}
				</Container>
			</div>
		</div>
	)
}

export default HW10
