import React from 'react';
import PopularBlogsSection from '../../components/PopularBlogsSection';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Blogs(props) {
    return (
        <div>
            <Parallax pages={2} style={{ top: '0', left: '0' }}>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}>

                    <PopularBlogsSection blogs={[
                        { id: 1, title: "Blog 1", image: "https://picsum.photos/seed/picsum/1000/1000?random=1" },
                        { id: 2, title: "Blog 2", image: "https://picsum.photos/seed/picsum/1000/1000?random=2" },
                        { id: 3, title: "Blog 3", image: "https://picsum.photos/seed/picsum/1000/1000?random=3" }
                    ]} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#21A362' }} />

                <ParallaxLayer
                    offset={1}
                    speed={0.5}>
                    
                </ParallaxLayer>
            </Parallax>

        </div>
    );
}

export default Blogs;