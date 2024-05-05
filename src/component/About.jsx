
import { ABOUT_TEXT } from "../constants";
import aboutpick from "../assets/Picsart_24-05-06_13-14-05-074.jpg"
const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img width={300} className="rounded-2xl" src={aboutpick} alt="about" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About