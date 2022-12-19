// Card Component
const Card = ({ i, key, item}) => {
    // Setting backgrond for each card
    return <div className='flex flex-col w-[300px] h-auto 
                            justify-center items-center content-center 
                            bg-gradient-to-t from-black rounded-xl '>

                {/* Linking each card to the respective subreddit */}
                <a href={`https://www.reddit.com/r/${item.subreddit_name}/`} >
                    
                {/* Image of the meme */}
                <img    src={item.link} alt={item.title} 
                        className=' justify-center w-11/12 rounded-xl m-auto' />

                {/* title of the meme */}
                <h3 className='font-normal item-center text-white sm:text-xl text-md'>{item.title}</h3>
                </a>
            </div>
};

// Exporting the Card Component
export default Card;

