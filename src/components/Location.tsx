import { useState } from 'react'

const Location = () => {
    const [activeEvent, setActiveEvent] = useState<'wedding' | 'reception'>('wedding')

    const locations = {
        wedding: {
            label: 'Wedding',
            placeName: 'Wedding Venue', // User didn't give a specific venue name, just address, so I'll try to extract one or just use a generic title
            address: 'No.8, Sivan Garden, Carmel Tower Cross Road, N. Washermenpet',
            // Using a query for the map that tries to capture the specific location
            mapUrl: 'https://maps.google.com/maps?q=No.8+Sivan+Garden+Carmel+Tower+Cross+Road+Washermenpet&t=&z=15&ie=UTF8&iwloc=&output=embed'
        },
        reception: {
            label: 'Reception',
            placeName: 'Thiruvottiyur Nadar Marriage Mahal',
            address: '575X+6PP, S Mada St, Tirumala Avenue, Tiruvottiyur, Chennai, Tamil Nadu 600019',
            mapUrl: 'https://maps.google.com/maps?q=Thiruvottiyur+Nadar+Marriage+Mahal&t=&z=15&ie=UTF8&iwloc=&output=embed'
        }
    }

    const current = locations[activeEvent]

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-rapunzel-100/90 to-ivory/95">
            <div className="container mx-auto px-4">
                <h2 className="font-heading text-4xl md:text-6xl font-semibold text-rapunzel-700 text-center mb-8">
                    The Kingdom
                </h2>

                <div className="relative w-24 h-0.5 gradient-romantic mx-auto mb-10">
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-golden-400 text-xl bg-rapunzel-100 px-2">
                        ✦
                    </span>
                </div>

                {/* Location Toggles */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveEvent('wedding')}
                        className={`
                            px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg transform
                            ${activeEvent === 'wedding'
                                ? 'bg-rapunzel-500 text-white scale-105 opacity-100 ring-2 ring-rapunzel-300 ring-offset-2'
                                : 'bg-white text-rapunzel-600 opacity-60 hover:opacity-100 hover:scale-105'}
                        `}
                    >
                        Wedding
                    </button>
                    <button
                        onClick={() => setActiveEvent('reception')}
                        className={`
                            px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg transform
                            ${activeEvent === 'reception'
                                ? 'bg-rapunzel-500 text-white scale-105 opacity-100 ring-2 ring-rapunzel-300 ring-offset-2'
                                : 'bg-white text-rapunzel-600 opacity-60 hover:opacity-100 hover:scale-105'}
                        `}
                    >
                        Reception
                    </button>
                </div>

                <div className="max-w-4xl mx-auto bg-white p-4 rounded-3xl shadow-xl border-4 border-rapunzel-200 transition-all duration-500 ease-in-out">
                    <div className="aspect-w-16 aspect-h-9 w-full h-[400px] rounded-2xl overflow-hidden shadow-inner bg-gray-100 relative">
                        <iframe
                            key={activeEvent} // Force re-render on change
                            src={current.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${current.label} Location`}
                            className="w-full h-full"
                        ></iframe>
                    </div>
                    <div className="text-center mt-8 mb-4 animate-fadeIn">
                        <h3 className="font-heading text-3xl text-rapunzel-600 mb-3">{current.placeName}</h3>
                        <p className="text-gray-600 text-lg max-w-lg mx-auto leading-relaxed">{current.address}</p>
                        <a
                            href={`https://maps.google.com/?q=${encodeURIComponent(current.placeName + ' ' + current.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-6 px-8 py-3 bg-golden-400 text-white rounded-full hover:bg-golden-500 transition-colors duration-300 font-semibold shadow-md active:transform active:scale-95"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location
