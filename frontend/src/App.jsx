import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './router/Routes';
import { ToastContainer } from 'react-toastify'


function App() {


  return (
        <>
          <RouterProvider router={routes} />
          <ToastContainer />
        </>
  )
}

export default App
