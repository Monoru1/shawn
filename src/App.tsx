import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useSmoothScroll } from './hooks/useSmoothScroll'
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
  useSmoothScroll()
  const location = useLocation()
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          id="page-content"
          tabIndex={-1}
          key={location.pathname}
          initial={{ opacity: reducedMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: reducedMotion ? 1 : 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
        >
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
        </motion.div>
      </AnimatePresence>
    </>
  )
}
