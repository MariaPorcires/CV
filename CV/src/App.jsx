
import './App.css'
import { RouterProvider, createBrowserProvider } from 'react-router-dom'
import Home from './views/Home/Home';
import About from './views/About/About';


const router = createBrowserProvider([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/om',
    element: <About />
  }
])



function App() {
  

  return (
    <>
     
    </>
  )
}

export default App
