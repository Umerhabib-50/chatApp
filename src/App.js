import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const App = () => {
  const [state, setState] = useState(0);
  console.log(state);
  function repeatedFunction() {
    // Code to be executed repeatedly
    setState(pre => pre + 0.333);
  }

  function stopAfterDuration(duration) {
    // Call the repeated function immediately
    repeatedFunction();

    // Schedule a timeout to stop the repeated function after the specified duration
    setTimeout(() => {
      setState(0);
      clearInterval(intervalId); // Clear the interval
      stopAfterDuration(5000);
    }, duration);

    // Start the repeated function with a fixed time interval
    const intervalId = setInterval(repeatedFunction, 10); // Execute every 1 second (adjust as needed)
  }

  // Call the function to start the repeated execution

  useEffect(() => {
    stopAfterDuration(5000); // Stop after 5 seconds (adjust as needed)
  }, []);

  return (
    <View>
      <View
        style={{width: `${state}%`, height: 10, backgroundColor: 'red'}}></View>
      <Text>App</Text>
    </View>
  );
};

export default App;
