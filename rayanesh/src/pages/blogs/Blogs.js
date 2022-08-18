import React from 'react';
import { useRef } from 'react';
import PopularBlogsSection from '../../components/PopularBlogSection/PopularBlogsSection';
import BlogIntro from '../../components/Intro/BlogIntro';
import './blogs.scss';

function Blogs(props) {
    const ref = useRef();
    return (
        <div>
            <PopularBlogsSection blogs={[
                { id: 1, title: "همه برای رایانش", image: "https://picsum.photos/seed/picsum/1000/1000?random=1" },
                { id: 2, title: "دانشکده‌ی ما", image: "https://picsum.photos/seed/picsum/1000/1000?random=2" },
                { id: 3, title: "از سبزی رایانش", image: "https://picsum.photos/seed/picsum/1000/1000?random=3" }
            ]} />
            <BlogIntro />
        </div>
    );
}

export default Blogs;