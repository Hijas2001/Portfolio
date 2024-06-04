import React from 'react'
import { CONTACT } from "../constants/index";
import { motion } from 'framer-motion'
const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">Get in Touch</motion.h1>

            <div className="text-center tracking-tighter">

                <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="my-4">{CONTACT.address}</motion.p>

                <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="my-4">{CONTACT.phoneNo}</motion.p>

                <motion.a
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    href={`mailto:${CONTACT.email}`} className="border-b">
                    {CONTACT.email}
                </motion.a>
            </div>
        </div>
    )
}

export default Contact