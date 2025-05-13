import { BrowserRouter } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

const App = () => {
  return (
    <BrowserRouter>
    {/*
    www.thekingdom.com/home
    www.thekingdom.com/products
    www.thekingdom.com/cart

    */}
    <Routes>
      <Route path="/" element={<UserLayout />}>
      {/* User Layout */}
      {/* Home */}
      {/* Products */}
      </Route>
      <Route>{/* Admin Lauout */}</Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
