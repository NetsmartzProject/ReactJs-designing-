import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import HomePage from "./Page/HomePage";



const router = createBrowserRouter([

  {
    path: "/",
    element:<HomePage></HomePage>
  },
  
])


function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
