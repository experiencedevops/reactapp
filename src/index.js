import React from 'react'
import { render } from 'react-dom'
import { SiteRoute } from './components/SiteRoute'

window.React = React

render(
	<SiteRoute />,
	document.getElementById('my-container')
)
