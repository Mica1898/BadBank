import React from 'react'
import ReactRouterDOM from 'react-router-dom'


const Route = ReactRouterDOM.Route
const Link = ReactRouterDOM.Link
const HashRouter = ReactRouterDOM.HashRouter
const UserContext = React.createContext(null)

export default {Route, Link, HashRouter, UserContext}
