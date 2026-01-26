import { useState } from 'react';
import envelopeBg from '../assets/envelope-bg-final.jpg';
import tangledPoster from '../assets/tangled-poster-new.jpg';
import sunSealImg from '../assets/sun-seal.png';

interface EnvelopeProps {
    onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isZooming, setIsZooming] = useState(false);

    const handleOpen = () => {
        console.log("Envelope clicked!");
        setIsOpen(true);

        // Wait for flap to open, then zoom in the poster
        setTimeout(() => {
            setIsZooming(true);

            // Hold for 2.5 seconds, then fade and transition
            setTimeout(() => {
                setIsZooming(false);

                // Transition to main page after fade
                setTimeout(() => {
                    onOpen();
                }, 500);
            }, 2500);
        }, 500);
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center transition-opacity duration-1000`}
            style={{ backgroundImage: `url(${envelopeBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className={`relative w-[90vw] max-w-md aspect-[1.4/1] transition-transform duration-1000 ease-in-out envelope-perspective`}>

                {/* Envelope Container */}
                <div className="relative w-full h-full shadow-2xl">

                    {/* Back of Envelope */}
                    <div
                        className="absolute inset-0 rounded-xl"
                        style={{ backgroundColor: '#D6C8FF' }}
                    />

                    {/* Letter / Inside Content (Preview) */}
                    <div
                        className="absolute inset-2 top-4 bg-white shadow-sm flex flex-col items-center justify-center p-4 text-center border border-purple-200"
                    >
                    </div>

                    <div className="absolute inset-0 z-10 overflow-hidden rounded-xl pointer-events-none">
                        <div
                            className="pocket-shape shadow-md"
                            style={{ backgroundColor: '#D6C8FF' }}
                        />
                    </div>

                    {/* Top Flap (The Lid) */}
                    <div
                        className={`absolute top-0 left-0 right-0 z-20 flex justify-center origin-top transition-transform duration-500 ease-in-out ${isOpen ? '[transform:rotateX(180deg)]' : ''}`}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div
                            className="flap-top drop-shadow-md border-b border-purple-300"
                            style={{ backgroundColor: '#D6C8FF' }}
                        />

                        {/* Wax Seal - Moved outside to escape clip-path */}
                        <button
                            onClick={handleOpen}
                            className={`absolute left-1/2 -translate-x-1/2 w-36 h-36 !z-50 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 group ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                            style={{
                                top: 'var(--flap-height)',
                                marginTop: '-72px' /* Center on the tip - half of 144px */
                            }}
                        >
                            <img
                                src={sunSealImg}
                                alt="Open Invitation"
                                className="w-full h-full object-contain drop-shadow-2xl animate-pulse-slow"
                            />
                            <span
                                className="absolute font-display text-4xl md:text-5xl font-bold drop-shadow-md pt-1"
                                style={{ color: '#7c3aed' }}
                            >
                                S&S
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Zooming Poster Overlay */}
            <div
                className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white transition-all duration-700 ease-in-out ${isZooming ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}
            >
                <img
                    src={tangledPoster}
                    alt="Wedding Poster"
                    className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                />
            </div>
        </div>
    );
};

export default Envelope;
