import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import Header from './components/Header'
import Footer from './components/Footer'
import PreviewBanner from './components/PreviewBanner'
import Home from './pages/Home'
import WorkList from './pages/WorkList'
import WorkDetail from './pages/WorkDetail'
import Kerawa from './pages/Kerawa'
import NotFound from './pages/NotFound'

export default function App() {
  useSmoothScroll()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <PreviewBanner />
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<WorkList medium="film" />} />
            <Route path="/films/:slug" element={<WorkDetail />} />
            <Route path="/photographie" element={<WorkList medium="photo" />} />
            <Route path="/photographie/:slug" element={<WorkDetail />} />
            <Route path="/kerawa" element={<Kerawa />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

