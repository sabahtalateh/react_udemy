import * as React from 'react'
import { SwapiServiceConsumer } from '../components/SwapiContext'

const withSwapiService = (Wrapped: any) => {
    return (props: any) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => (
                        <Wrapped { ...props } swapiService={ swapiService }/>
                    )
                }
            </SwapiServiceConsumer>
        )
    }
}

export default withSwapiService
