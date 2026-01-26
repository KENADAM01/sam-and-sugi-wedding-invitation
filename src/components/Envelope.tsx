import { useState } from 'react';
import watercolorBg from '../assets/watercolor-bg.jpg';
import coupleImg from '../assets/couple-illustration.png';

import sunSealImg from '../assets/sun-seal.png';

interface EnvelopeProps {
    onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFullyOpen, setIsFullyOpen] = useState(false);

    const handleOpen = () => {
        console.log("Envelope clicked!");
        setIsOpen(true);
        setTimeout(() => {
            setIsFullyOpen(true);
            setTimeout(() => {
                onOpen();
            }, 800);
        }, 800);
    };

    if (isFullyOpen && false) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center transition-all duration-1000 ${isFullyOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            style={{ backgroundImage: `url(${watercolorBg})` }}
        >
            <div className={`relative w-[90vw] max-w-md aspect-[1.4/1] transition-transform duration-1000 ease-in-out envelope-perspective ${isFullyOpen ? 'translate-y-[100vh]' : ''}`}>

                {/* Envelope Container */}
                <div className="relative w-full h-full shadow-2xl">

                    {/* Back of Envelope */}
                    <div
                        className="absolute inset-0 bg-ivory rounded-sm"
                    />

                    {/* Letter / Inside Content (Preview) */}
                    <div
                        className="absolute inset-2 top-4 bg-white shadow-sm flex flex-col items-center justify-center p-4 text-center border border-golden-100 bg-contain bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(${coupleImg})` }}
                    >
                    </div>

                    <div className="absolute inset-0 z-10 overflow-hidden rounded-sm pointer-events-none">
                        <div
                            className="pocket-shape shadow-md"
                        />
                    </div>

                    {/* Top Flap (The Lid) */}
                    <div
                        className={`absolute top-0 left-0 right-0 z-20 flex justify-center origin-top transition-transform duration-700 ease-in-out ${isOpen ? '[transform:rotateX(180deg)]' : ''}`}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div
                            className="flap-top drop-shadow-md"
                        />

                        {/* Wax Seal - Moved outside to escape clip-path */}
                        <button
                            onClick={handleOpen}
                            className={`absolute left-1/2 -translate-x-1/2 w-28 h-28 z-50 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 group ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                            style={{
                                top: 'var(--flap-height)', /* Position at the bottom of the flap height */
                                marginTop: '-56px' /* Center on the tip - half of 112px */
                            }}
                        >
                            <img
                                src={sunSealImg}
                                alt="Open Invitation"
                                className="w-full h-full object-contain drop-shadow-2xl animate-pulse-slow"
                            />
                            <span
                                className="absolute font-display text-3xl md:text-4xl font-bold drop-shadow-md pt-1"
                                style={{ color: '#7c3aed' }}
                            >
                                S&S
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Envelope;
