import { useEffect, useState } from 'react'

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

    useEffect(() => {
        // Set your wedding date here
        const weddingDate = new Date('2026-03-06T16:30:00').getTime()

        const updateCountdown = () => {
            const now = new Date().getTime()
            const distance = weddingDate - now

            if (distance < 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
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
        <section className="py-20 md:py-32 bg-gradient-to-br from-rapunzel-600 to-rapunzel-500 text-white">
            <div className="container mx-auto px-4">
                <h2 className="font-heading text-4xl md:text-6xl font-semibold text-center mb-8">
                    Counting Down to Forever
                </h2>

                <div className="relative w-24 h-0.5 bg-white/50 mx-auto mb-16">
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-golden-300 text-xl bg-rapunzel-600 px-2">
                        ✦
                    </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                    <TimeUnit value={timeLeft.days} label="Days" />
                    <TimeUnit value={timeLeft.hours} label="Hours" />
                    <TimeUnit value={timeLeft.minutes} label="Minutes" />
                    <TimeUnit value={timeLeft.seconds} label="Seconds" />
                </div>
            </div>
        </section>
    )
}

export default Countdown
