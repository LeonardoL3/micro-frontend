import React from 'react'
import { Spinner } from "@chakra-ui/react";
import { Routes as ReactRoutes, Route } from 'react-router-dom'
import User from './User'
import App from '../App'

const Rota1 = React.lazy(() => import("app3/Rota1"))
const Teste = React.lazy(() => import("app3/TextTeste"))

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path="/user" element={<User />} />
            <Route path="/" element={<App />} />
            <Route path="/rota-app3" element={
                <React.Suspense fallback={<Spinner />}>
                    <Rota1 />
                </React.Suspense>
            } />
            <Route path="/rota2-app3" element={
                <React.Suspense fallback={<Spinner />}>
                    <Teste />
                </React.Suspense>
            } />
        </ReactRoutes>
    )
}

export default Routes