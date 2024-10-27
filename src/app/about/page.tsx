import ServiceEx from "@/components/servicesexpanded/ServiceEx";
import { FC } from "react"


const sampleServ = [
    {},
    {},
    {},
    {},
    {},
    {},
]

const About:FC = () =>{
    return <section className="bg-white dark:bg-gray-900 pt-10">
            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                About Us
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam
                mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
            </p>

            <div className="inline-flex w-full mt-6 sm:w-auto">

            </div>
        </div>

        {/* {sampleServ.map((serv)=> <ServiceEx/> )} */}
    </section>
}

export default About;