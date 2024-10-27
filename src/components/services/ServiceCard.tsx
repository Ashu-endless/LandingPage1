import { FC } from "react";


interface props  {
    subtitle:string
    title:string
    text:string

}
const ServiceCard:FC<props> = ({subtitle,text,title}) => {

    return       <div className="lg:w-1/3 sm:w-1/2 p-4">
    <div className="flex relative">
      <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">{subtitle}</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
        <p className="leading-relaxed">{text}</p>
      </div>
    </div>
  </div>

}

export default ServiceCard;