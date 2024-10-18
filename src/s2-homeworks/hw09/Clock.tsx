import { useEffect, useState } from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import { restoreState } from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

export function Clock() {
	const [timerId, setTimerId] = useState<number | undefined>(undefined)
	// for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
	const [date, setDate] = useState<Date>(
		new Date(restoreState('hw9-date', Date.now()))
	)
	const [show, setShow] = useState<boolean>(false)

	const start = () => {
		if (!timerId) {
			const id = window.setInterval(() => {
				setDate(new Date())
			}, 1000)
			setTimerId(id)
		}
	}

	const stop = () => {
		if (timerId) {
			clearInterval(timerId) // останавливаем таймер
			setTimerId(undefined) // сбрасываем ID
		}
	}

	// Очищаем таймер при размонтировании компонента
	useEffect(() => {
		return () => {
			if (timerId) {
				clearInterval(timerId)
			}
		}
	}, [timerId])

	const onMouseEnter = () => {
		setShow(true)
	}
	const onMouseLeave = () => {
		setShow(false)
	}

	const stringTime = date.toLocaleTimeString('en-GB', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	}) || <br />
	const stringDate = date.toLocaleDateString('en-GB') || <br />

	// день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
	const stringDay = new Intl.DateTimeFormat('en-US', {
		weekday: 'long',
	}).format(date) || <br />
	const stringMonth = new Intl.DateTimeFormat('en-US', {
		month: 'long',
	}).format(date) || <br />
	return (
		<div className={s.clock}>
			<div
				id={'hw9-watch'}
				className={s.watch}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<span id={'hw9-day'}>{stringDay}</span>,{' '}
				<span id={'hw9-time'}>
					<strong>{stringTime}</strong>
				</span>
			</div>

			<div id={'hw9-more'}>
				<div className={s.more}>
					{show ? (
						<>
							<span id={'hw9-month'}>{stringMonth}</span>,{' '}
							<span id={'hw9-date'}>{stringDate}</span>
						</>
					) : (
						<>
							<br />
						</>
					)}
				</div>
			</div>

			<div className={s.buttonsContainer}>
				<SuperButton
					id={'hw9-button-start'}
					disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
					onClick={start}
				>
					start
				</SuperButton>
				<SuperButton
					id={'hw9-button-stop'}
					disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
					onClick={stop}
				>
					stop
				</SuperButton>
			</div>
		</div>
	)
}
