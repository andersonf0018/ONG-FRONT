import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function ProtectedRoute({ auth, component: Component, ...rest }) {
    return (
        <Route {...rest} render={() => auth ? (<Component />) : (<Redirect to="/home" />)} />
    )
}

export default ProtectedRoute