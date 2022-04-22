import React from 'react';

function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div
      className="leading-normal bg-black p-5 flex items-center"
      style={{ height: '83vh' }}
    >
      <div>
        <div className="text-4xl leading-normal text-gray-400">
          Testing react fast refresh with state preserve.
        </div>
        <span className="mr-3 text-2xl leading-normal text-gray-500">
          The counter value is {counter}.
        </span>
        <button
          type="button"
          className="p-1 rounded bg-green-600 text-white"
          onClick={() => setCounter(counter + 1)}
        >
          increment
        </button>
        <div className="text-gray-300 my-3">
          Great! Now increment the counter and try modifying any static text!
        </div>
      </div>
    </div>
  );
}

export default App;
