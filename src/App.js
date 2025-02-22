import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Root from './Components/Root';
import Home from './Components/Home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home/>}/> 
    </Route>
  )
)

function App() {
  return (
    <div className="rootLayout">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
