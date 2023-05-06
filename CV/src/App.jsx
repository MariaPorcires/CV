
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './views/Home/Home';
import About from './views/About/About';


const router = createBrowserRouter([
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
    <div className='App'>
     <RouterProvider router={ router } />
    </div>
  )
}

export default App
