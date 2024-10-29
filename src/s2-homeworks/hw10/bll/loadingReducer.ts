const initState = {
	isLoading: false,
}

export type LoadingStateType = typeof initState

export type LoadingActionType = {
	type: 'CHANGE_LOADING'
	payload: { isLoading: boolean }
}

export const loadingReducer = (
	state: LoadingStateType = initState,
	action: LoadingActionType
): LoadingStateType => {
	switch (action.type) {
		case 'CHANGE_LOADING':
			return {
				...state,
				isLoading: action.payload.isLoading,
			}

		default:
			return state
	}
}

export const loadingAC = (payload: {
	isLoading: boolean
}): LoadingActionType => ({
	type: 'CHANGE_LOADING',
	payload,
})
