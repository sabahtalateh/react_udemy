import 'styled-components'

import { FontFamily } from '../src/theme/Theme'
import { Action } from '../src/components/TodoList/TodoListItem'

declare module 'styled-components' {

    export interface DefaultTheme {
        fontFamily: FontFamily,
        actionColors: {
            [Action.Done]: string,
            [Action.Remove]: string,
            [Action.Important]: string,
        },
        colors: {
            primary: string
        }
    }
}
