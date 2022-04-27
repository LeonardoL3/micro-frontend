import React from 'react'
import { Route } from 'react-router-dom'
import TextTeste from './TextTeste'

const Routes = () => {
    return (
        <Route path="/text" element={<TextTeste />} />
    )
}

export default Routes