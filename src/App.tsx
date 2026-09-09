import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Photography from './pages/Photography'
import WorkList from './pages/WorkList'
import WorkDetail from './pages/WorkDetail'
import Kerawa from './pages/Kerawa'
import NotFound from './pages/NotFound'
import Archive from './pages/Archive'
import Shawn from './pages/Shawn'

export default function App() {
  const location = useLocation()
  const page = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    page.current?.focus({ preventScroll: true })
  }, [location.pathname])

  return (
    <>
      <Header />
      <div id="page-content" ref={page} tabIndex={-1}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<WorkList medium="film" />} />
            <Route path="/films/:slug" element={<WorkDetail />} />
            <Route path="/photographie" element={<Photography />} />
            <Route path="/photographie/:slug" element={<WorkDetail />} />
            <Route path="/kerawa" element={<Kerawa />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/shawn" element={<Shawn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
      </div>
    </>
  )
}
