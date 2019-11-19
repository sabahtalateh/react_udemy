import * as React from 'react'
import { Context } from 'react'
import SwapiService from '../services/SwapiService'

// export const {
//     Provider : SwapiServiceProvider,
//     Consumer: SwapiServiceConsumer
// } = React.createContext({})

export const {
    Provider: SwapiServiceProvider,
    Consumer: SwapiServiceConsumer
}: Context<SwapiService> = React.createContext(null)
