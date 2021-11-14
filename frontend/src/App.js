import './App.css';
// import Navbar from "./components/Navbar";
// import Home from './components/Home';
import Login from './components/Login';
import './icofont/icofont.min.css';
import './vendor/bootstrap/css/bootstrap.min.css';
// import 'vendor/fontawesome/css/all.min.css';
// import './vendor/icofont/icofont.min.css';
import './vendor/select2/css/select2.min.css';
import './css/osahan.css';
// import 'vendor/owl-carousel/owl.carousel.css';
// import './vendor/owl-carousel/owl.theme.css';


// const path = window.location.pathname;

// function Pages(path){ 
//   if (path=='/') {
//     alert(path)
//     return (
//       <div className="homepage-header">
//        <Navbar />
//       <Home />
//       </div>
//     )
//   }
//   else if (path=='/login') {
   
//     return (
//       <>
//       <Login />
//       </>
//     )
//   }
//    else {
//     return (
//       <div className="homepage-header">
//        <Navbar />
//       <Home />
//       </div>
//     )
//   }
// }
// Pages path={{path}} 
function App() {
  return (
    <>
    <Login />
     </>
  );
}

export default App;
