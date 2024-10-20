import React, { useState } from 'react'; // Importing React and useState hook

// Functional component demonstrating the use of React hooks
function Hook() {
    // State variable 'counter' initialized to 1
    const [counter, setCounter] = useState(1); // Using useState hook to manage the counter state

    // Function to increment the counter
    const addValue = () => {
        setCounter(counter + 1); // Update the state to increment by 1
        console.log(counter); // Log the current counter value (note: this may not show the updated value immediately due to async nature)
    };

    // Function to decrement the counter
    const removeValue = () => {
        // Check if the counter is less than or equal to 0
        if (counter <= 0) {
            alert("Negative not allowed"); // Alert the user if trying to go negative
        } else {
            setCounter(counter - 1); // Update the state to decrement by 1
        }
    };

    return (
        <div>
            <h1>Hooks Counter</h1>
            <h2>Counter Value: {counter}</h2> {/* Display the current counter value */}

            <button onClick={addValue}>ADD VALUE</button> {/* Button to add value */}

            <h2>Remove Value</h2>
            <h2>Value: {counter}</h2> {/* Display current counter value again for clarity */}
            <button onClick={removeValue}>Remove</button> {/* Button to remove value */}
        </div>
    );
}

export default Hook; // Export the component for use in other files
