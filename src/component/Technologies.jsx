import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { motion } from "framer-motion"

const iconMovement = (duration) => ({
    initial: { y: -10 },
    animate:{
      y:[10,-10],
      transition:{
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverce',
      }
    }
})
const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 whileInView={{opacity:1 ,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1}} className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div whileInView={{opacity:1 ,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className="flex flex-wrap items-center justify-center gap-4">

                <motion.div variants={iconMovement(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div variants={iconMovement(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>

                <motion.div variants={iconMovement(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className="text-7xl text-blue-500" />
                </motion.div>

                <motion.div variants={iconMovement(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>

                <motion.div variants={iconMovement(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssLine className="text-7xl text-cyan-400" />
                </motion.div>

            </motion.div>
        </div>

    )
}

export default Technologies