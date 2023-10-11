import Nav from './components/Nav'
import Footer from './components/Footer'
import Posts from './components/Posts'
import PostDetail from './components/PostDetail'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Posts />
      },
      {
        path: '/:slug',
        element: <PostDetail />
      }
    ]
  }
]);

function Root() {
  return (
    <>
      <Nav />
      <Outlet />
      
      <Footer />
    </>
  )
}

function App() {
  return (<RouterProvider router={router} />)
}

export default App
