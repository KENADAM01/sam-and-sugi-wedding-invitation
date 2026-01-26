import { useState } from 'react';
import envelopeBg from '../assets/envelope-background.png';
import tangledPoster from '../assets/tangled-poster.png';
import envelopeInside from '../assets/envelope-inside.jpg';
import maximusPascalImg from '../assets/maximus-pascal.png';

import sunSealImg from '../assets/sun-seal.png';

interface EnvelopeProps {
    onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isZooming, setIsZooming] = useState(false);
    const [isFullyOpen, setIsFullyOpen] = useState(false);

    const handleOpen = () => {
        console.log("Envelope clicked!");
        setIsOpen(true);

        // Wait for flap to open fully (700ms transition), then zoom out the letter
        setTimeout(() => {
            setIsZooming(true);

            // Hold the zoomed image for a bit
            setTimeout(() => {
                setIsFullyOpen(true);

                // Finally signal to parent to unmount
                setTimeout(() => {
                    onOpen();
                }, 1000);
            }, 3000); // Increased hold time
        }, 800); // Increased wait for flap
    };

    if (isFullyOpen && false) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center transition-opacity duration-1000 ${isFullyOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            style={{ backgroundImage: `url(${envelopeBg})` }}
        >
            <div className={`relative w-[90vw] max-w-md aspect-[1.4/1] transition-transform duration-1000 ease-in-out envelope-perspective ${isFullyOpen ? 'translate-y-[100vh]' : ''} ${isZooming ? 'opacity-0' : 'opacity-100'}`}>

                {/* Envelope Container */}
                <div className="relative w-full h-full shadow-2xl">

                    {/* Back of Envelope */}
                    <div
                        className="absolute inset-0 bg-white rounded-sm"
                    />

                    {/* Letter / Inside Content (Preview) */}
                    <div
                        className="absolute inset-2 top-4 bg-white shadow-sm flex flex-col items-center justify-center p-4 text-center border border-golden-100 bg-contain bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(${envelopeInside})` }}
                    >
                    </div>

                    <div className="absolute inset-0 z-10 overflow-hidden rounded-sm pointer-events-none">
                        <div
                            className="pocket-shape shadow-md bg-white"
                        />
                    </div>

                    {/* Top Flap (The Lid) */}
                    <div
                        className={`absolute top-0 left-0 right-0 z-20 flex justify-center origin-top transition-transform duration-700 ease-in-out ${isOpen ? '[transform:rotateX(180deg)]' : ''}`}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div
                            className="flap-top drop-shadow-md bg-white border-b border-gray-100"
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

            {/* Maximus & Pascal - Center Right Edge */}
            <div className={`fixed right-0 top-1/2 -translate-y-1/2 z-[60] w-48 md:w-72 lg:w-96 transition-opacity duration-1000 ${isZooming || isFullyOpen ? 'opacity-0' : 'opacity-100'}`}>
                <img
                    src={maximusPascalImg}
                    alt="Maximus and Pascal"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                />
            </div>

            {/* Zooming Poster Overlay - Moved to end */}
            <div
                className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-1000 ease-in-out ${isZooming ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-[20vh] pointer-events-none'}`}
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
