import "../../App.css";
import { motion } from "framer-motion"

export default function Home(){
    return (
        <div className="flex h-screen px-32 py-40 bg-off-white">
            <motion.div 
                className="w-1/2 flex flex-col items-center justify-center mr-10"
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ 
                    type: 'spring',
                    delay: '1', 
                    stiffness: '250',
                    damping: '20',
                }}
                viewport={{once: true}}
            >
                <h1 className ="text-[7rem] font-title text-center text-transparent bg-clip-text bg-gradient-to-r from-blue1 to-blue2 tracking-tighter">
                    Welcome!
                </h1>
                <p className="text-[2.8rem] leading-5 text-center">
                    I'm Lukas
                </p>
            </motion.div>
            <div className=" w-1/2 flex items-center justify-center ">
                <img class="h-screen" src="assets/carScroll.png" alt="placeholder"/>
            </div>
        </div>
    );
};