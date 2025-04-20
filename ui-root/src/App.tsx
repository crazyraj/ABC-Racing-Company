import React from 'react';
import { Suspense, lazy } from 'react';
import './App.css';
import { Route, Routes, createBrowserRouter, Outlet } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

const HeaderUi = lazy(() => import('headerUi/headerUi'));
const ContentUi = lazy(() => import('contentUi/contentUi'));
const FooterUi = lazy(() => import('footerUi/footerUi'));

// const router = createBrowserRouter(
// [
// 	{
// 		path: '/',
// 		element: {<Outlet/>},
// 	}
// ]);

function App() {
	return (
		<>
			<div className='app-container'>
				<HeaderUi />
				<ContentUi />
				<FooterUi />
			</div>
			{/* <Routes>
				<Switch>
					<Route path='/'>
						<div className='app-container'>
							<HeaderUi />
							<ContentUi />
							<FooterUi />
						</div>
					</Route>

					<Route path='/home' element={<Home />} />
					<Route path='/about' element={<About />} />
				</Switch>
			</Routes> */}
		</>
	);
}

export default App;
