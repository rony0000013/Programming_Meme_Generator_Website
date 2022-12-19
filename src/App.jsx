import { useState, useEffect } from 'react';
import Card from './Card';
import './App.css';

// App Component
function App() {
  // Initialize the component with the default data []
  const [data, setData] = useState([]);

  // Fetch data from the API and updates the global data
  const fetchData = () => {
    return fetch("https://programming-memes-reddit.p.rapidapi.com/", {
                  "method": "GET",
                  "headers": {"x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,}
                })
                .then(res => res.json())
                .then(res => setData(res));
  }

  // This updates the global data whenever it is called
  useEffect(() => {
    fetchData();
  },[])

  // Return the App HTML
  return (
    // stting the background for entire webpage
    <div className="top-0 left-0 absolute  w-full h-full overflow-auto
                    bg-gradient-to-tr from-cyan-500 via-purple-500 to-blue-500  ">

      {/* Header for the main page         */}
      <h1 className=' items-center font-bold text-black gap-y-5 mb-3 
                      xs:text-4xl md:text-6xl text-xl '>Programming Meme Generator</h1>

      {/* Refresh Button to refresh the contents of the page */}
      <button className='text-yellow-300 bg-black w-56 text-xl 
                          m-auto p-auto rounded-md cursor-pointer ' 
                          onClick={() => fetchData()} >Refresh</button>

      {/* gap between the refresh button and the memes */}
      <div className='gap-y-5 '><br /></div>

      {/* flexbox style meme card display */}
      <div className='flex flex-row flex-wrap justify-center gap-2 p-2 m-2'> 
          {/* iterate through the memes recieved from the API */}
          {data.map((item, i) => (
            /* For every meme object send the data to card componenet to display the card */
            <Card i={i}
                  key={item.key}
                  item={item} />
          ))} 
      </div>

      {/* Footer for the webpage */}
      <footer className='text-black text-xl'>
        @ CS50 Final Project by Rounak Sen
      </footer>

    </div>
  )
};

export default App;
