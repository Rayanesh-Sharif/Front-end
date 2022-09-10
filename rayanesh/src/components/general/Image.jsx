import React, {useState} from 'react';


const Image = ({path, name}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    return (
        <div style={{width:'inherit', height:'inherit'}}>
            <img
                width={'100%'}
                height={'100%'}
                style={{display: !isLoaded ? 'none' : 'block'}}
                src={path}
                alt={name}
                onLoad={
                    () => setIsLoaded(true)
                }
            />
            {!isLoaded &&
                <div style={{height: 275, backgroundColor: 'darkgrey'}} >
                </div>
            }
        </div>
    )
}

export default Image;