import { FC } from "react";
import ServiceCard from "./ServiceCard";



const servicestemp = [
    {subtitle : "Subtitle" , title: "Bold Title",text : " lets make something beautiful"},
    {subtitle : "Subtitle" , title: "Bold Title",text : " lets make something beautiful"},
    {subtitle : "Subtitle" , title: "Bold Title",text : " lets make something beautiful"},
    {subtitle : "Subtitle" , title: "Bold Title",text : " lets make something beautiful"},
    {subtitle : "Subtitle" , title: "Bold Title",text : " lets make something beautiful"},
    {subtitle : "Subtitle" , title: "Bold Title",text : " lets make something beautiful"},
    {subtitle : "Subtitle" , title: "Bold Title",text : " lets make something beautiful"},
    {subtitle : "Subtitle" , title: "Bold Title",text : " lets make something beautiful"},
]


var backgroundimage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1007%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c124 C 288%2c183.4 1152%2c361.6 1440%2c421L1440 560L0 560z' fill='rgba(0%2c 123%2c 255%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1007'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`;

const Services:FC = () => {

    return <section className="text-gray-600 body-font dark:bg-gray-900 dark:text-gray-400 svg_bg-fit" style={{backgroundImage:backgroundimage}}>
        <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">Our Services</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>


    <div className="flex flex-wrap -m-4">
        {servicestemp.map((serv)=> <ServiceCard {...serv} /> )}
    </div>
        </div>
    </section>

}

export default Services;