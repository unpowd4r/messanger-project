import { Navigate, Route, Routes } from 'react-router-dom'
import Error404 from './pages/Error404'

export const PATH = {
	PRE_JUNIOR: '/pre-junior',
	JUNIOR: '/junior',
	JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
	return (
		<div>
			{/*Routes выбирает первый подходящий роут*/}
			<Routes>
				<Route path='/' element={<Navigate to={PATH.PRE_JUNIOR} />} />

				{/*роуты для /pre-junior, /junior, /junior-plus*/}
				<Route path={PATH.PRE_JUNIOR} />
				<Route path={PATH.JUNIOR} />
				<Route path={PATH.JUNIOR_PLUS} />

				{/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
				<Route path='*' element={<Error404 />} />
			</Routes>
		</div>
	)
}

export default Pages
