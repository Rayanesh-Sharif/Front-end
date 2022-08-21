import React from 'react';
import { useRef } from 'react';
import PopularBlogsSection from '../../components/PopularBlogSection/PopularBlogsSection';
import BlogIntro from '../../components/Intro/BlogIntro';
import './blogs.scss';
import BlogViewer from '../../components/BlogsViewer/BlogsViewer';

function Blogs() {
    useRef();
    return (
        <div>
            <PopularBlogsSection blogs={[
                { id: 1, title: "همه برای رایانش", writer: "آرش یادگاری", description: "فیلیمو به تازگی یک قابلیت جدید به نام مولتی پروفایل یا همان قابلیت چند عضوی را به سیستم تماشای خود اضافه کرده . با وجود این قابلیت، هر حساب کاربری می‌تواند سه عضو جداگانه داشته باشد و هرکدام از این عضوها، می‌توانند تاریخچه تماشا و فیلم‌های موردعلاقه خود را به صورت جداگانه ببینند.", image: "https://picsum.photos/seed/picsum/1000/1000?random=1" },
                { id: 2, title: "دانشکده‌ی ما", writer: "آرمین نوردی", description: "فیلیمو به تازگی یک قابلیت جدید به نام مولتی پروفایل یا همان قابلیت چند عضوی را به سیستم تماشای خود اضافه کرده . با وجود این قابلیت، هر حساب کاربری می‌تواند سه عضو جداگانه داشته باشد و هرکدام از این عضوها، می‌توانند تاریخچه تماشا و فیلم‌های موردعلاقه خود را به صورت جداگانه ببینند.", image: "https://picsum.photos/seed/picsum/1000/1000?random=2" },
                { id: 3, title: "از سبزی رایانش", writer: "علی طارمی", description: "فیلیمو به تازگی یک قابلیت جدید به نام مولتی پروفایل یا همان قابلیت چند عضوی را به سیستم تماشای خود اضافه کرده . با وجود این قابلیت، هر حساب کاربری می‌تواند سه عضو جداگانه داشته باشد و هرکدام از این عضوها، می‌توانند تاریخچه تماشا و فیلم‌های موردعلاقه خود را به صورت جداگانه ببینند.", image: "https://picsum.photos/seed/picsum/1000/1000?random=3" }
            ]} />
            <BlogIntro />
            <BlogViewer blogs={[
                { id: 1, title: "دوست داشتن", writer: "آرش یادگاری", description: "این یک معرفی کوچک از متنی است که قرار است نمایش داده شود.", image: "https://picsum.photos/seed/picsum/1000/1000?random=4" },
                { id: 2, title: "تفکری در باب خدا", writer: "آرمین نوردی", description: "این یک معرفی کوچک از متنی است که قرار است نمایش داده شود.", image: "https://picsum.photos/seed/picsum/1000/1000?random=5" },
                { id: 3, title: "چرا فروید؟", writer: "علی طارمی", description: "این یک معرفی کوچک از متنی است که قرار است نمایش داده شود.", image: "https://picsum.photos/seed/picsum/1000/1000?random=6" }
            ]} />
        </div>
    );
}

export default Blogs;