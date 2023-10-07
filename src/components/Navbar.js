import "../App.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { Turn as Hamburger } from 'hamburger-react'
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
    const slideIn = {
        hidden: {
            x: "-100vw",
        },
        visible:{
            x: "0",
            transition: {
                type: "spring",
                duration: 0.5,
                bounce: 0,
            },
        },
        exit:{
            x: "-100vw",
            transition: {
                type: "spring",
            },
        },
    };
    
    const Backdrop = ({ children, onClick }) => {
        
        return(
            <motion.div
                key="backdrop"
                className="absolute top-0 left-0 h-full w-full bg-[#FFFFFFe1] flex items-center justify-center z-30"
                onclick={onClick}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration:0.3}}
                onClick={() => (modalOpen ? close() : open())}
            >
                {children}
            </motion.div>
        );
    };
    
    const Modal = ({ handleClose, text }) => {
        
        return(
            <Backdrop onClick={handleClose}>
                <motion.div
                    key="modal"                    
                    onClick={(e) => e.stopPropagation()}
                    className="bg-gradient-to-t from-blue2 to-blue1 ... w-64 h-screen flex flex-col justify-center fixed top-0 left-0 rounded-r-full"
                    variants={slideIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <ul className='pl-9 py-10 space-y-10'>
                        {SidebarData.map((item, index) => (
                            <motion.div className="flex font-title text-3xl text-off-white hover:text-black"
                                key={index}
                                whileHover={{scale: 1.1}}
                                onClick={() => (modalOpen ? close() : open())}
                            >
                                <li className={item.cName}>
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            </motion.div>
                        ))}
                    </ul>
                </motion.div>

            </Backdrop>
        );
    };
    
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    
    
    return (
        <> 
            <motion.button
                className={`${modalOpen ? 'text-off-white' : 'text-black'} h-32 mt-2 ml-6 fixed top-0 left-0 z-40`}
                onClick={() => (modalOpen ? close() : open())}
                >
                <Hamburger rounded distance="lg"/>
            </motion.button>

            <AnimatePresence
                initial={false}
                animate={{scale: 0.5}}
                transition={{duration: 0.2}}
                mode='wait'
                onExitComplete={() => null}
            >
                {modalOpen && 
                    <Modal modalOpen={modalOpen} handleClose={close} />
                }
            </AnimatePresence>
        </>
    );
}
