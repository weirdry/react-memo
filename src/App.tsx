import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'

import Home from './routes/home/home.component'
import CreateMemo from './routes/create-memo/create-memo.component'
import ViewMemo from './routes/view-memo/view-memo.component'
import CreateTag from './routes/create-tag/create-tag.component'
import ViewTag from './routes/view-tag/view-tag.component'
import SelectTag from './routes/select-tag/select-tag.component'
import Search from './routes/search/search-component'
import BottomOverlay from './components/bottom-overlay/bottom-overlay'

import './App.css'
import './assets/tokens/variables.css'

function App() {
	return (
		<Router>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/create-memo" element={<CreateMemo />} />
				<Route path="/view-memo/:memo_id" element={<ViewMemo />} />
				<Route path="/create-tag/" element={<CreateTag />} />
				<Route path="/view-tag" element={<ViewTag />} />
				<Route path="/select-tag" element={<SelectTag />} />
				<Route path="/search" element={<Search />} />

				<Route path="/*" element={<Navigate to="/"></Navigate>} />
			</Routes>

			<BottomOverlay />
		</Router>
	)
}

export default App
