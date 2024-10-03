import React, {
	DetailedHTMLProps,
	HTMLAttributes,
	InputHTMLAttributes,
	useState,
} from 'react'
import SuperInputText from '../../../hw04/common/c1-SuperInputText/SuperInputText'
import editIcon from './editIcon.svg'
import s from './SuperEditableSpan.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
	HTMLAttributes<HTMLSpanElement>,
	HTMLSpanElement
>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = Omit<DefaultInputPropsType, 'type'> & {
	onChangeText?: (value: string) => void
	onEnter?: () => void
	error?: string

	spanProps?: DefaultSpanPropsType & { defaultText?: string } // пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = ({
	autoFocus,
	onBlur,
	onEnter,
	spanProps,

	...restProps // все остальные пропсы попадут в объект restProps
}) => {
	const [editMode, setEditMode] = useState<boolean>(false)
	const { children, onDoubleClick, className, defaultText, ...restSpanProps } =
		spanProps || {}

	const onEnterCallback = () => {
		setEditMode(false)
		onEnter?.()
	}

	const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
		!e.currentTarget.onblur ? setEditMode(false) : setEditMode(true)

		onBlur?.(e)
	}
	const onDoubleClickCallBack = (
		e: React.MouseEvent<HTMLSpanElement, MouseEvent>
	) => {
		setEditMode(true)

		onDoubleClick?.(e)
	}

	const spanClassName = s.span + (className ? ' ' + className : '')

	return (
		<>
			{editMode ? (
				<SuperInputText
					autoFocus={autoFocus || true}
					onBlur={onBlurCallback}
					onEnter={onEnterCallback}
					className={s.input}
					{...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
				/>
			) : (
				<div className={s.spanBlock}>
					<img src={editIcon} className={s.pen} alt={'edit'} />
					<span
						onDoubleClick={onDoubleClickCallBack}
						className={spanClassName}
						{...restSpanProps}
					>
						{/*если нет захардкодженного текста для спана, то значение инпута*/}

						{children || restProps.value || defaultText}
					</span>
				</div>
			)}
		</>
	)
}

export default SuperEditableSpan
