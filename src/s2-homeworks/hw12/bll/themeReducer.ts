type ActionTheme = ReturnType<typeof changeThemeId>
type Initstate = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state: Initstate = initState, action: ActionTheme): Initstate => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) as const
