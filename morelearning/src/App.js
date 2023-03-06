import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import {BrowserRouter,Route,Routes,Link} from "react-router-dom";
import {UserDataProvider} from "./context/UserContext";
import Form from "./components/Form";
function App() {
  return (
    <div>
      <UserDataProvider>
        <BrowserRouter>
        <Routes>
<Route path="/" element={
  <>
   <Header/>
   <Form/>
   <Body/>
   <Link to="/about">
    About
   </Link>
  </>
}/>
<Route path="/about" element={<About/>}/>
</Routes>
 </BrowserRouter>
      </UserDataProvider>
     
    </div>
  );
}

export default App;
