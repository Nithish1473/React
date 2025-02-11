 

// function App() {
//  let ele = React.createElement("div", {className:"App"})
// }
// export default App;

// ! component composition 
// import React from 'react'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from'./components/Sidebar2'
// import Footer from './components/Footer'

// export const App = () => {
//   return (
//     <div className='App'>
//     <Navbar/>
//     <Main/>
//     <div className='sidebar'>
//         <Sidebar1/>
//         <Sidebar2/>
//         </div> 
//         <Footer/>   
    
//     </div>
//   )
// }
// export default App

// ! Props
// import React, { Component } from 'react'
// // import CBCPropEx from './propex/CBCpropEx'
// // import FBCpropEx from './propex/FBCpropEx'
// import  CBCStateEx from './stateexample/CBCStateEx'
// // import FBCStateEx from './stateexample/FBCStateEx'

//  class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <CBCPropEx
//         username="Nithish"
//         age={21}
//         hobbies={["watching movies","studying","travelling"]}
//         address={{city:"kollapur",area:"MMD"}}
//         sendFun={function(){alert("Hi Nithish Welcome")}}
//         /> */}


//         {/* <FBCpropEx
//         username="kiran"
//         isMarried={true}
//         hobbies={["playing", "fitting","kidding"]}

//         /> */}
//         <CBCStateEx/>
//         {/* <FBCStateEx/> */}
//       </div>
//     )
//   }
// }
// export default App;

// import React from 'react'
// import CBCStateEx from './stateexample/CBCStateEx'

// import FunctionalComponent from './components/FunctionalComponent'

// const App = () => {
//   return (
//     <div>
//       <FunctionalComponent clgName='MRU' area='maisammaguda'/>

//       {/* <FBCStateEX/> */}
//     </div>
//   )
// }
// export default App;



// import React from 'react'
//  import "./App.css"
// // import { FunctionalComponent } from './components/props/FunctionalComponent'
// import ClassComponent from "./components/ClassComponent"
// const App = () => {
//   return (
//     <div>
//     {/* <FunctionalComponent clg="MRU" msg="Good Afternoon" apply={true}/> */}
//     <ClassComponent/>
//     </div>
//   )
// }

// export default App



// import React from 'react';
// import './App.css';
// import MyForm from './components/MyForm';



// function App() {
//   return (
//     <div className="App">
//    <MyForm/>
//      </div>
//   );
// }

// export default App;


// ! hooks example

//  import React from 'react'
//  import UseEffectEx from './hookexamples/UseEffectEx';

// const App = () => {
//   return (
//     <div>
//       <UseEffectEx/>
//     </div>
//   )
// }

// export default App

import React from 'react'
import RefExamples from './hookexamples/RefExamples'

const App = () => {
  return (
    <div>
     < RefExamples/>
    </div>
  )
}

export default App