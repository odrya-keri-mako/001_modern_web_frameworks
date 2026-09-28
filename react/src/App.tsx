import { Navigate, Route, Routes } from 'react-router'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Home from './pages/home/Home'
import Page1 from './pages/page1/Page1'
import Page2 from './pages/page2/Page2'

function App() {
  return (
    <div className="page-container d-flex flex-column min-vh-100">
      <Header />
      <main className="position-relative flex-fill d-flex flex-column justify-content-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App