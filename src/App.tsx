import React from 'react'
import './App.css'

import { Grayscale1000, Grayscale200 } from './assets/tokens/tokens'

function App() {
	return (
		<div className="App" style={{ backgroundColor: Grayscale1000 }}>
			<h1 style={{ color: Grayscale200 }}>REACT MEMO</h1>
		</div>
	)
}

export default App
