// // rafce , refc

// import React from 'react'

// const App = () => {
//     let user = 'Piyush'
//     const changeUser = () => {
//         console.log(user);
//         user = 'Vinay'
//         console.log(user);
//     }
//   return (
//     <div>
//         <h1>Hello from {user}</h1>
//         <button onClick={changeUser}> Change user</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {

//     const [a, setA] = useState(34)

//     const changeA = () => {
//         console.log('Doneeeeee Working');
//         setA(21)
//     }

//   return (
//     <div>
//         <h1>The value of a is {a}</h1>
//         <button onClick={changeA}>Change A</button>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {

//     const [num, setNum] = useState(0)

//   return (
//     <div>
//         <h2>Number is {num}</h2>
//         <button onClick={() => {setNum(num+10)}}>Incremennt</button>
//         <button onClick={() => {setNum(num-10)}}>Decrement</button>
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {

//   const submit = (e) => {
//     e.preventDefault()
//     console.log('Hello Submitted', e);
//   }
//   return (
//     <div>
//       <form onSubmit={ (e) => {
//         submit(e)
//       }}>
//         <input type="text" placeholder='Enter your name'/>
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App




// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [Username, setUsername] = useState('')

//   const submitHandler = (e) => {
//     e.preventDefault()
//     // console.log('submitted');
//     console.log(Username);
//     setUsername('')
    
//   }
  
//   return (
//     <div>
//       <form onSubmit={ (e) => {
//         submitHandler(e)
//       }}>
//         <input 
//         value={Username}
//         onChange={ (e) => {
//           // console.log(e.target.value);
//           setUsername(e.target.value)
          
//         }}
//         type="text"
//         placeholder='Enter Your Username'
//         />
//       <button>Submit</button>
//       </form>
      
//     </div>
//   )
// }

// export default App





import React from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Navbar />
      <Navbar />
    </>
      
  )
}

export default App