import React, {useState} from 'react';


const Image = ({path, name, imageStyle}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    return (
        <div style={{width: 'inherit', height: 'inherit'}}>
            <img
                width={'100%'}
                height={'100%'}
                style={
                      {
                            ...imageStyle,
                            display: !isLoaded ? 'none' : 'block',
                      }
                }
                src={path}
                alt={name}
                onLoad={
                    () => setIsLoaded(true)
                }
            />
            {!isLoaded &&
                <div style={
                    {
                        ...imageStyle,
                        paddingTop: '100%',
                        backgroundColor:'#f4f4f4'
                    }
                }>
                </div>
            }
        </div>
    )
}

export default Image;