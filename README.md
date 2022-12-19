<p align="center">
  <a href="" rel="noopener">
 <img width=100px height=100px src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png" alt="Project logo"></a>
</p>

# Programming Meme Generator Website
## 📺 Video Demo:  [https://youtu.be/-esLFhNYlDc](https://youtu.be/-esLFhNYlDc)
---
## 📃 Description:
Welcome to my CS50 Final Project. <br/>
This is a Meme Generator Website built using React JS, Tailwind CSS and Vite as the built tool for creating webpage.

## ⚙ Workings <a name = workings></a>
 - **index.html**<br/>
    The index.html page contains bare html and empty div element with id of root. the head elemeent contains the icon of the page of trollface and the title of the page. 

 - **package.jason**<br/>
    It contains name, version, scripts and all the npm packages and versions required for the website:-
     - react
     - react-dom
     - react-router-dom
     - tailwindcss
     - vite

 - **.env**<br/>
    Contains the API key for the Programming Memes Images API

 - **main.jsx**
    imports the App Component and css files and loads them into website useing react_dom.

 - **App.css & index.css**<br/>
    contains the css styles for app component and tailwindcss.

 - **App.jsx**<br/> 
    We import the useEffect and useState Hooks from react, Card component from Card.jsx and App.css.<br>
    We Create the App Component and instantiate the data variables using the `useData()`.<br>
    We create the `fetchData()` method where we fetch the data from `"https://programming-memes-reddit.p.rapidapi.com/"` using `GET` method and api key from `.env` file as http header. then transform the response into a json object with `.json()` method. the response object is used to update the data variable with `useData()` method.
    ```
    const fetchData = () => {
    return fetch("https://programming-memes-reddit.p.rapidapi.com/", {
                  "method": "GET",
                  "headers": {"x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,}
                })
                .then(res => res.json())
                .then(res => setData(res));
    }
    ```
    The `useEffect()` method is created calling the `fetchData()` method as when the webpage is mounted on the browser then the useEffect is called after then everytime data is changed then `fecthData()` method is called.
    ```
    useEffect(() => {
        fetchData();
    },[])
    ```
    The div is created for the entire page with a gradint background is set and Header is added.
    ```
    <div className="top-0 left-0 absolute  w-full h-full overflow-auto
                    bg-gradient-to-tr from-cyan-500 via-purple-500 to-blue-500  ">
    <h1 className=' items-center font-bold text-black gap-y-5 
                    xs:text-4xl md:text-6xl text-xl '>Programming Meme Generator</h1>               
    ```
    A button is created for refreshing the memes of the page which when clicked will call `fetchData()` method.
    ```
    <button className='text-yellow-300 bg-black w-56 text-xl 
                        m-auto p-auto rounded-md cursor-pointer ' 
                        onClick={() => fetchData()} >Refresh</button>
    ```
    The main div where the memes are displayed by iterating through every meme in data variable and passing their values in the Card component for displaying memes.
    ```
    <div className='flex flex-row flex-wrap justify-center gap-2 p-2 m-2'> 
          {data.map((item, i) => (
            <Card i={i} key={item.key} item={item} />
          ))}
    </div>
    ```
    And finally a footer element is added and the App component is exported.
    ```
    <footer className='text-black text-xl'>
        @ CS50 Final Project by Rounak Sen
    </footer>
    ```


 - **Card.jsx**<br/>
    Creates a Card Component for displayng the images with the title of the memes in form of a card. As each image card uses same style so a single component can be used to create multiple image cards by calling Card component multiple times.<br>
    The card is in a div with a gradient and some tailwindcss styles as 
    
    ```
    <div className='flex flex-col w-[300px] h-auto 
                    justify-center items-center content-center 
                    bg-gradient-to-t from-black rounded-xl '>
    ```
    then the image and title is wrapped in an anchor element
    ```
    <a href={`https://www.reddit.com/r/${item.subreddit_name}/`} >
    ```
    and finally the image is displayed then the title is
    ```
    <img    src={item.link} alt={item.title} 
            className=' justify-center w-11/12 rounded-xl m-auto' />

    <h3 className='font-normal item-center text-white sm:text-xl text-md'>
    {item.title}</h3>
    ```
    Finally the Card component is Exported.

## 🔨 Built Using <a name = built_using></a>
 - **React JS** <img width=20px height=15px src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" >
 - **Tailwind CSS**  <img width=110px height=15px src="https://tailwindcss.com/_next/static/media/tailwindcss-logotype-white.e0b2bd6155fa0bed8e24ff6b28f4a911.svg" >
 - **Vite** <img width=20px height=15px src="https://vitejs.dev/logo.svg" >
 - [**Programming Memes Images API with RapidAPI by Kaushal Sharma**](https://rapidapi.com/kaushalsharma880-GAglnDIvTy/api/programming-memes-images/) 

## 🎈 Usage <a name="usage"></a>
The Programming Memes Images API doesnot currently (DEC 2022) have rate limit so The website can be refreshed multiple times. The Website shows the memes in form of a cards collection with the title of the meme. 

## ✍️ Author <a name = "author"></a>
- [**@rony0000013**](https://github.com/rony0000013) - **Rounak Sen**
-  Serampore, West Bengal, India