const InvitationMessage = () => {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-rapunzel-100/90 to-enchanted-lavender/50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center">
                    <h2 className="font-heading text-4xl md:text-6xl font-semibold text-rapunzel-600 mb-8">
                        We're Getting Married!
                    </h2>

                    <div className="relative w-24 h-0.5 gradient-romantic mx-auto mb-16">
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-golden-400 text-xl bg-rapunzel-100 px-2">
                            ✦
                        </span>
                    </div>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-16">
                        From the first ‘hello’ to a lifetime . Now, as we take our vows and promise forever to each other, we invite you to celebrate this beautiful new beginning with us. Please mark your calendar and join us as we say ‘I do’ surrounded by love, family, and friends!
                    </p>

                    <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl">
                        <p className="font-heading text-2xl md:text-3xl italic text-rapunzel-600 mb-4">
                            "Love is composed of a single soul inhabiting two bodies."
                        </p>
                        <p className="text-gray-600 font-medium">— Aristotle</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InvitationMessage
