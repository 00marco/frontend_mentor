import Tag from './tag';
import Profile from './profile';
// import HeaderImage from './assets/favicon-32x32.png';

export default function Card(){

    return (
        <div className="grid grid-cols-1 bg-slate-300 p-5 gap-3 shadow-xl">
            <img src="https://picsum.photos/200/100" alt="Header Image" className="rounded-t-lg"/>
            <Tag/>
            <text>Published 21 Dec 2023</text>
            <text>HTML & CSS Foundations</text>
            <text>These languages are the backbone of every website, defining structure, content, and presentation.</text>
            <Profile/>
        </div>
    )
}