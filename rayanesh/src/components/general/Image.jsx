import React, {useState} from 'react';


const Image = ({path, name}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    return (
        <div>
            <img
                style={{display: !isLoaded ? 'none' : 'block'}}
                src={path}
                alt={name}
                onLoad={
                    () => setIsLoaded(true)
                }
            />
            {!isLoaded &&
                <div style={{height: 275}}>
                    <small> is loading</small>
                </div>
            }
            );
        </div>
    )
}

export default Image;