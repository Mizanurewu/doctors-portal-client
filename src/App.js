import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import 'react-day-picker/dist/style.css';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div className="lg:max-w-[1440px] bg-[#02181b] mx-auto text-white">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
      
    </div>
  );
}

export default App;
