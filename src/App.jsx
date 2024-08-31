import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Main from "./layout/main/Main";
import Homepage from "./pages/homepage/Homepage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element = {<Main/>}>
      <Route path="/" element ={<Homepage/>}/>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider
    router={router}
  />
  )
}

export default App
