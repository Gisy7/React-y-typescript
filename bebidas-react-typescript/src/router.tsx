import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'

const FavoritePage = lazy(() => import("./view/FavoritePage"))
const IndexPageView = lazy(() => import("./view/IndexPageView"))




function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={
                        <Suspense fallback={"Cargando..."}>
                            <IndexPageView />
                        </Suspense>} index />
                    <Route path='/favoritos' element={
                        <Suspense fallback={"Cargando..."}>
                            <FavoritePage />
                        </Suspense>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter