export interface TodoItem {
    id: string
    label: string
    important: boolean
}

export enum Action {
    Done = 'done',
    Remove = 'remove'
}
