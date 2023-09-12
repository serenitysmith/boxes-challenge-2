import React from 'react';
import './App.css';
import boxes from "./boxes"
import Box from "./Box"
function App() {
  // useState is a React hook used to manage state. It initializes the 'squares' state
  // with the initial data from the 'boxes' array. 'boxes' is assumed to be defined elsewhere.
  const [squares, setSquares] = React.useState(boxes)
  // The 'squares' state contains an array of data representing square elements.
  // Each element in the 'squares' array has an 'id' and 'on' property.


  
// The 'map' function is used to iterate over each element in the 'squares' array

  const squareElements = squares.map(square => (

  // For each 'square' object in the 'squares' array, a 'Box' component is rendered.
    // 'key' is a unique identifier for each 'Box' component. It is set to 'square.id'.
    // 'on' is a prop passed to the 'Box' component, which determines the state of the square.
    // 'square.on' is passed as the value of the 'on' prop.
  <Box key={square.id} on={square.on}/>
  )) 
  // The 'squareElements' array contains React elements representing 'Box' components
  // based on the data in the 'squares' state.




   return (
    <main>
        {squareElements}
        {/* Render the 'squareElements' array within a 'main' element */}
    </main>
)
}

// The useState hook is used to manage state within the App component. It initializes the squares state with the initial data from the boxes array. The boxes array is assumed to be defined elsewhere in the code.

// The map function is used to iterate over each element in the squares array. For each element, it creates a Box component with a key set to the id property of the square and an on prop set to the on property of the square.

// The squareElements array contains React elements representing Box components based on the data in the squares state.

// Finally, the squareElements array is rendered within a main element in the component's JSX, effectively rendering a list of square elements on the page.

// The actual behavior of the component depends on the structure and content of the boxes array, which is not shown in this code snippet.









   /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */  







export default App;