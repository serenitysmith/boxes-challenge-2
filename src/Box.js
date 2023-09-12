import React from "react";


export default function Box(props){
    

    // Define a JavaScript object called "styles" to store the CSS styling for the box.
    const styles = {
        // below changes the box to be black when array is set to on or stay white when off
        // The background color of the box is set based on the value of the "on" prop.
        // If "props.on" is true, the background color is set to black (#222222).
        // If "props.on" is false, the background color is set to "none," which is effectively transparent.
        background: props.on ? "#222222" : "none"
    }
    // Return a JSX element representing the box with the defined styles.
    return (
// origanl div
        // <div className='"box' key={square.id}></div>
        // new div 
        <div style={styles} className="box"></div>
    )
}


// React Component: This code defines a React functional component called "Box" using the export default syntax. This component takes a single prop named "props."

// Styles Object: Inside the component, a JavaScript object called "styles" is defined to store the CSS styling properties for the box element. In this case, it specifies the background color based on the value of the "on" prop.

// Conditional Styling: The background color of the box is determined by the ternary operator (props.on ? "#222222" : "none"). If the "on" prop is true, the background color is set to black (#222222); otherwise, it is set to "none" (effectively transparent).

// JSX Element: The component returns a JSX element, which is a <div> element with the "styles" object applied as inline CSS using the style attribute. The class name "box" is also assigned to the element, which could be used for additional styling or CSS rules elsewhere in your project.

// This component is designed to render a box element with a dynamic background color based on the value of the "on" prop. When "on" is true, the box will have a black background, and when "on" is false, the box will be transparent. This component can be used within a larger React application to create and manage such boxes with conditional styling.




