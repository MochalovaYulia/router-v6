import { Route, Navigate, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import { Homepage } from './components/Homepage';
import { About } from './components/Aboutpage';
import { BlogLoader, Blogpage } from './components/Blogpage';
import { Notfoundpage } from './components/Notfoundpage';
import { Layout } from './components/Layout';
import { PostLoader, Singlepage } from './components/Singlepage';
import { Editpost, updatePostAction } from './components/Editpost';
import { LoginPage } from './components/LoginPage';
import { AuthProvider } from './hoc/AuthProvider';
import { RequireAuth } from './hoc/ReqvaerAuth';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />}>
                <Route path="contacts" element={<p>Our contacts</p>} />
                <Route path="team" element={<p>Our team</p>} />
            </Route>
            <Route path="about-us" element={<Navigate to='/about' replace />} />
            <Route path="posts" element={<Blogpage />} loader={BlogLoader} />
            <Route path="posts/:id" element={<Singlepage />} loader={PostLoader} />
            <Route path="posts/:id/edit" element={
              <RequireAuth>
                <Editpost />
              </RequireAuth>
            }loader={PostLoader} action={updatePostAction}  />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<Notfoundpage />} />
    </Route>
))
  
function App() {
  return (
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
  );
}

export default App;
