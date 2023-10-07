import "../../App.css";
import { motion } from "framer-motion"

export default function About(){

    return (
        <div className="flex h-screen px-16 py-16 bg-off-white">
            <div className="w-screen font-title bg-gradient-to-r from-blue1 to-blue2 flex flex-col px-16 py-16 justify-center">
                    <motion.div
                        className="text-7xl font-semibold mb-2 text-blue3"
                        initial={{ opacity: 0, x: '-100vh' }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', duration: 0.5}}
                        viewport={{once: true}}
                    >
                        <h1>About Me</h1>
                    </motion.div>
            </div>
        </div>
    );
};