import React from 'react';
import PopularBlogsSection from '../../components/PopularBlogsSection';

function Blogs(props) {
    return (
        <div>
            <PopularBlogsSection blogs={[
                { id: 1, title: "Blog 1", image: "https://picsum.photos/seed/picsum/1000/1000?random=1" },
                { id: 2, title: "Blog 2", image: "https://picsum.photos/seed/picsum/1000/1000?random=2" },
                { id: 3, title: "Blog 3", image: "https://picsum.photos/seed/picsum/1000/1000?random=3" }
            ]} />
        </div>
    );
}

export default Blogs;