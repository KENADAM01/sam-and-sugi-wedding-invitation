import { useEffect, useState } from 'react'
import rapunzelImg from '../assets/rapunzel.png'
import flynnImg from '../assets/flynn-new.png'


const Hero = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-violet-50 to-violet-100">
            {/* Character Images */}

            {/* Rapunzel - Top Right */}
            <div className={`absolute top-0 right-0 z-10 w-48 md:w-80 lg:w-[420px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-10 -translate-y-10'}`}>
                <img
                    src={rapunzelImg}
                    alt="Rapunzel and Pascal"
                    className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Flynn - Bottom Left */}
            <div className={`absolute bottom-0 -left-8 md:left-0 z-10 w-48 md:w-80 lg:w-[420px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-10 translate-y-10'}`}>
                <img
                    src={flynnImg}
                    alt="Flynn Rider"
                    className="w-full h-auto object-contain object-left-bottom drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-20 bg-white z-0 pointer-events-none" />

            {/* Floating Lanterns - Yellow Theme */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-40">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bottom-0 w-6 h-8 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 rounded-lg opacity-70 shadow-lg"
                        style={{
                            left: `${(i + 1) * 15}%`,
                            animationDelay: `${i * 1.5}s`,
                            animationDuration: `${15 + i * 2}s`,
                            animation: 'float 15s ease-in-out infinite'
                        }}
                    >
                        {/* Lantern top */}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-yellow-600 rounded-t-lg" />
                        {/* Lantern glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-yellow-200/40 to-yellow-100/20 rounded-lg animate-pulse" />
                    </div>
                ))}
            </div>

            {/* Hero Content */}
            <div className={`relative z-50 text-center px-4 py-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-sm md:text-base tracking-[4px] uppercase mb-3 font-light text-violet-600">
                    Save the Date
                </p>

                <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-4 text-violet-700 drop-shadow-sm">
                    <span className="inline-block animate-fadeInScale" style={{ animationDelay: '0.3s' }}>
                        Samraj
                    </span>
                    <span className="inline-block mx-4 text-7xl md:text-8xl animate-fadeInScale text-violet-500" style={{ animationDelay: '0.5s' }}>
                        &
                    </span>
                    <span className="inline-block animate-fadeInScale" style={{ animationDelay: '0.7s' }}>
                        Sugirtha
                    </span>
                </h1>

                <p className="font-heading text-2xl md:text-4xl font-light tracking-wider mt-4 text-violet-600">
                    6th March 2026
                </p>

                <div className="relative w-48 h-0.5 bg-gradient-to-r from-transparent via-violet-400 to-transparent mx-auto mt-6 opacity-80">
                    <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-violet-400 text-sm">❖</span>
                    <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-violet-400 text-sm">❖</span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center z-20 animate-fadeInUp" style={{ animationDelay: '1.5s' }}>
                <span className="text-xs tracking-[2px] uppercase block mb-2 opacity-70 text-violet-600">
                    Scroll to Explore
                </span>
                <div className="text-2xl animate-bounce text-violet-500">↓</div>
            </div>
        </section>
    )
}

export default Hero
