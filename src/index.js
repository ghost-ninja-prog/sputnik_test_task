import React from 'react'
import { createRoot } from 'react-dom/client'

import './styles/reset.css'
import './styles/common.css'

import App from './App.jsx'

const element = document.getElementById('root')
const root = createRoot(element)

root.render(
    <App/>
)