import 'styled-components'

import { FontFamily } from '../src/theme/Theme'
import { Action } from '../src/components/TodoList/models'

declare module 'styled-components' {

    export interface DefaultTheme {
        fontFamily: FontFamily,
        actionColors: {
            [Action.Done]: string,
            [Action.Remove]: string,
        }
    }
}
