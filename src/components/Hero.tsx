import { useEffect, useState } from 'react'
import rapunzelImg from '../assets/rapunzel-new.png'
import flynnImg from '../assets/flynn-new.png'


const Hero = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-rapunzel-50 to-rapunzel-100">
            {/* Character Images */}

            {/* Rapunzel - Top Right */}
            <div className={`absolute top-0 right-0 z-10 w-48 md:w-96 lg:w-[500px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-10 -translate-y-10'}`}>
                <img
                    src={rapunzelImg}
                    alt="Rapunzel and Pascal"
                    className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Flynn - Bottom Left */}
            <div className={`absolute bottom-0 -left-6 md:left-0 z-10 w-48 md:w-96 lg:w-[500px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-10 translate-y-10'}`}>
                <img
                    src={flynnImg}
                    alt="Flynn Rider"
                    className="w-full h-auto object-contain object-left-bottom drop-shadow-xl hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-30 envelope-checkered-bg z-0 pointer-events-none" />

            {/* Gradient Overlay for Text Readability - lighter now */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/40 z-10" />

            {/* Floating Lanterns - Above Characters (z-40 vs z-10) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-40">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bottom-0 w-8 h-10 bg-gradient-to-b from-golden-300 via-golden-400 to-golden-500 rounded-lg opacity-80 lantern-glow"
                        style={{
                            left: `${(i + 1) * 12}%`,
                            animationDelay: `${i * 1.5}s`,
                            animationDuration: `${15 + i * 2}s`,
                        }}
                    >
                        {/* Lantern top */}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-2 bg-golden-600 rounded-t-lg" />
                        {/* Lantern glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-yellow-200/50 to-yellow-100/30 rounded-lg animate-pulse" />
                    </div>
                ))}
            </div>

            {/* Hero Content */}
            <div className={`relative z-50 text-center text-rapunzel-900 px-4 -mt-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                <p className="text-sm md:text-base tracking-[3px] uppercase mb-2 font-light opacity-95">
                    Save the Date
                </p>

                <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-4 text-shadow-soft text-rapunzel-600">
                    <span className="inline-block animate-fadeInScale" style={{ animationDelay: '0.3s' }}>
                        Samraj
                    </span>
                    <span className="inline-block mx-4 text-7xl md:text-8xl animate-fadeInScale" style={{ animationDelay: '0.5s' }}>
                        &
                    </span>
                    <span className="inline-block animate-fadeInScale" style={{ animationDelay: '0.7s' }}>
                        Sugirtha
                    </span>
                </h1>

                <p className="font-heading text-2xl md:text-4xl font-light tracking-wider mt-6">
                    6th March 2026
                </p>

                <div className="relative w-48 h-0.5 gradient-romantic mx-auto mt-8 opacity-80">
                    <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-rapunzel-400 text-sm">❖</span>
                    <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-rapunzel-400 text-sm">❖</span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-rapunzel-800 z-20 animate-fadeInUp" style={{ animationDelay: '1.5s' }}>
                <span className="text-xs tracking-[2px] uppercase block mb-2 opacity-70">
                    Scroll to Explore
                </span>
                <div className="text-2xl animate-bounce text-rapunzel-600">↓</div>
            </div>
        </section>
    )
}

export default Hero
