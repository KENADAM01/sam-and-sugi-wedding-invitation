const EventDetails = () => {
    const details = [
        {
            icon: '💒',
            title: 'Ceremony',
            time: '4:30 PM',
            location: "Carmel Tower Church",
            address: "No.8, Sivan Garden, Carmel Tower Cross Road, N. Washermenpet"
        },
        {
            icon: '🥂',
            title: 'Reception',
            time: '6:30 PM',
            location: 'Thiruvottiyur Nadar Marriage Mahal',
            address: 'S Mada St, Tirumala Avenue, Tirumalai Avenue, Tiruvottiyur',
        },
    ]

    return (
        <section className="py-20 md:py-32 bg-lavender">
            <div className="container mx-auto px-4">
                <h2 className="font-heading text-4xl md:text-6xl font-semibold text-rapunzel-700 text-center mb-8">
                    Celebration Details
                </h2>

                <div className="relative w-24 h-0.5 gradient-romantic mx-auto mb-16">
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-golden-500 text-xl bg-lavender px-2">
                        ✦
                    </span>
                </div>

                <div className="grid min-[767px]:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
                    {details.map((detail, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 md:p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-4 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-1.5 gradient-romantic transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                            <div className="text-6xl mb-6 animate-pulse-slow">
                                {detail.icon}
                            </div>

                            <h3 className="font-heading text-3xl text-rapunzel-600 mb-6">
                                {detail.title}
                            </h3>

                            <div className="space-y-2 text-gray-600">
                                <p className="text-xl font-semibold text-golden-600">
                                    {detail.time}
                                </p>
                                {detail.location && (
                                    <p className="text-lg font-semibold text-gray-800">
                                        {detail.location}
                                    </p>
                                )}
                                <p className="text-base">
                                    {detail.address}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EventDetails
