import { useEffect, useState } from 'react'
import weddingVideo from '../assets/tangled-wedding.mp4'

interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    const [isFinished, setIsFinished] = useState(false)

    useEffect(() => {
        // Set your wedding date here
        const weddingDate = new Date('2026-03-06T16:30:00').getTime()

        const updateCountdown = () => {
            const now = new Date().getTime()
            const distance = weddingDate - now

            if (distance < 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                setIsFinished(true)
                return
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            })
        }

        updateCountdown()
        const interval = setInterval(updateCountdown, 1000)

        return () => clearInterval(interval)
    }, [])

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="glass-effect rounded-3xl p-6 md:p-8 text-center transition-all duration-300 hover:scale-105 hover:bg-white/25 hover:shadow-2xl">
            <div className="font-heading text-5xl md:text-7xl font-bold mb-2 transition-transform duration-200">
                {String(value).padStart(label === 'Days' ? 3 : 2, '0')}
            </div>
            <div className="text-sm md:text-base tracking-[2px] uppercase opacity-90">
                {label}
            </div>
        </div>
    )

    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-rapunzel-600 to-rapunzel-500 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="font-heading text-4xl md:text-6xl font-semibold text-center mb-8">
                    {isFinished ? 'The Big Day is Here!' : 'Counting Down to Forever'}
                </h2>

                <div className="relative w-24 h-0.5 bg-white/50 mx-auto mb-16">
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-golden-300 text-xl bg-rapunzel-600 px-2 rounded-full">
                        ✦
                    </span>
                </div>

                {isFinished ? (
                    <div className="w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 animate-fade-in">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            // Replace with your actual video source
                            src={weddingVideo}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                        <TimeUnit value={timeLeft.days} label="Days" />
                        <TimeUnit value={timeLeft.hours} label="Hours" />
                        <TimeUnit value={timeLeft.minutes} label="Minutes" />
                        <TimeUnit value={timeLeft.seconds} label="Seconds" />
                    </div>
                )}

                {!isFinished && (
                    <div className="mt-12 flex flex-col items-center justify-center gap-2">
                        <button
                            onClick={() => setIsFinished(true)}
                            className="text-sm md:text-base text-white border border-white/40 px-6 py-2 rounded-full uppercase tracking-widest hover:bg-white/10 transition-all shadow-lg hover:scale-105 mb-4"
                        >
                            Preview Video
                        </button>

                        <div className="flex flex-col items-center -mt-2">
                            {/* Arrow pointing up */}
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-yellow-400 animate-bounce mb-1 drop-shadow-md"
                            >
                                <path
                                    d="M12 5L12 19M12 5L6 11M12 5L18 11"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-orange-500 bg-clip-text text-transparent font-display text-2xl md:text-3xl font-bold drop-shadow-sm tracking-wider">
                                Click Here
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Countdown
