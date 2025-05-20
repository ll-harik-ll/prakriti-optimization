import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
    function scrollToNext(pageId) {
        document.getElementById(pageId).scrollIntoView({ behavior: 'smooth' });
    }

    const navigate = useNavigate();

    return (
        <>
            <div className="w-full h-screen bg-gradient-to-b from-yellow-100 to-orange-100 flex items-center justify-center">
                <div className="text-center max-w-2xl px-6">
                    <h1 className="text-5xl font-bold text-orange-900 mb-6">
                        PRAKRUTI PARIKSHAN
                    </h1>
                    <p className="text-lg text-orange-800 mb-4">
                        Explore Your Ayurvedic Blueprint. Every individual is born with a unique balance of energies.
                    </p>
                    <p className="text-base text-orange-700 mb-8">
                        Vata. Pitta. Kapha. Together, they define your natural state — your Prakruti.
                        <br />
                        Begin your journey to better health, balance, and self-awareness.
                    </p>
                    <button 
                        className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                        onClick={() => scrollToNext('page2')}
                    >
                        Begin Parikshan
                    </button>
                </div>
            </div>

            <div id="page2" className="w-full bg-gradient-to-b from-orange-100 to-orange-200 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-3 gap-6 mb-10">
                        <div className="text-center p-6 bg-white shadow rounded-xl">
                            <p className="text-xl font-semibold text-orange-800 mb-2">
                                Ayurvedic constitution
                            </p>
                            <img 
                                src="https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-yoga-symbol-color-png-image_11615382.png" 
                                className="w-24 h-24 mx-auto mb-2" alt="constitution"
                            />
                            <p className="text-sm">🌱 Discover your natural Ayurvedic constitution</p>
                        </div>
                        <div className="text-center p-6 bg-white shadow rounded-xl">
                            <p className="text-xl font-semibold text-orange-800 mb-2">Personalized Diet</p>
                            <img
                                src="https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2021/07/11b.png"
                                className="w-24 h-24 mx-auto mb-2" alt="diet"
                            />
                            <p className="text-sm">🍽️Tailored recommendations to support your body and mind.</p>
                        </div>
                        <div className="text-center p-6 bg-white shadow rounded-xl">
                            <p className="text-xl font-semibold text-orange-800 mb-2">Live in Harmony</p>
                            <img
                                src="https://png.pngtree.com/png-vector/20240318/ourmid/pngtree-family-gathering-in-living-room-png-image_12005833.png"
                                className="w-24 h-24 mx-auto mb-2" alt="harmony"
                            />
                            <p className="text-sm">🧘‍♂️Align daily habits with your doshic balance for inner peace</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mb-10">
                        <div className="text-center p-6 bg-white shadow rounded-xl">
                            <p className="text-xl font-semibold text-orange-800 mb-2">Holistic Wellness</p>
                            <img
                                src="https://png.pngtree.com/png-vector/20221024/ourmid/pngtree-person-practicing-yoga-holistic-mental-png-image_6346477.png"
                                className="w-24 h-24 mx-auto mb-2" alt="wellness"
                            />
                            <p className="text-sm">💫Address imbalances before they manifest into illness.</p>
                        </div>
                        <div className="text-center p-6 bg-white shadow rounded-xl">
                            <p className="text-xl font-semibold text-orange-800 mb-2">Emotional Wellbeing</p>
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/027/049/357/original/flower-peace-of-mind-mental-health-2d-color-illustrations-png.png"
                                className="w-24 h-24 mx-auto mb-2" alt="emotions"
                            />
                            <p className="text-sm">🌼Unlock vitality through self-awareness and natural guidance.</p>
                        </div>
                        <div className="text-center p-6 bg-white shadow rounded-xl">
                            <p className="text-xl font-semibold text-orange-800 mb-2">Self-Discovery and Healing</p>
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/011/835/878/non_2x/cute-young-girl-in-love-self-love-and-care-concept-png.png"
                                className="w-24 h-24 mx-auto mb-2" alt="healing"
                            />
                            <p className="text-sm">🌸Ayurveda empowers you to take charge of your health—naturally.</p>
                        </div>
                    </div>

                    <button
                        className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                        onClick={() => scrollToNext('page3')}
                    >
                        KNOW ABOUT DOSHAS
                    </button>
                </div>
            </div>

            <div id="page3" className="w-full h-screen bg-gradient-to-b from-orange-200 to-orange-300 flex flex-col items-center justify-center gap-8">
                <div className="flex gap-20 mb-10">
                    <div
                        className="w-48 h-48 flex items-center justify-center bg-orange-500 text-white font-bold rounded-full shadow-lg cursor-pointer hover:scale-105 transition"
                        onClick={() => window.location.href = 'vata.html'}
                    >
                        <h1 className="text-2xl">VATHAM</h1>
                    </div>
                    <div
                        className="w-48 h-48 flex items-center justify-center bg-orange-600 text-white font-bold rounded-full shadow-lg cursor-pointer hover:scale-105 transition"
                        onClick={() => window.location.href = 'pitha.html'}
                    >
                        <h1 className="text-2xl">PITHAM</h1>
                    </div>
                    <div
                        className="w-48 h-48 flex items-center justify-center bg-orange-700 text-white font-bold rounded-full shadow-lg cursor-pointer hover:scale-105 transition"
                        onClick={() => window.location.href = 'kapha.html'}
                    >
                        <h1 className="text-2xl">KAPHAM</h1>
                    </div>
                </div>
                <button
                    className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
                    onClick={() => navigate('/Start')}
                >
                    TEST YOUR PRAKRUTI
                </button>
            </div>
        </>
    );
}

export default Home;
