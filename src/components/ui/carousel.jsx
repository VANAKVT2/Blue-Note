"use client"

import { useState } from 'react';

function Carousel({ items }) {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    const prevItem = () => {
        setCurrentItemIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const nextItem = () => {
        setCurrentItemIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative h-1/8" style={{ width: '1400px' }}>
            <div className="flex overflow-hidden">
                {[currentItemIndex, currentItemIndex + 1, currentItemIndex + 2].map((index) => {
                    const item = items[index % items.length];
                    if (item.type === 'image') {
                        return (
                            <img
                                key={index}
                                src={item.src}
                                alt={`Image ${index + 1}`}
                                className="w-1/3 h-56 m-10 transition-transform transform hover:scale-110 cursor-pointer"
                            />
                        );
                    } else if (item.type === 'video') {
                        return (
                            <div key={index} className="w-1/3 h-56 m-10 transition-transform transform hover:scale-110 cursor-pointer">
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    src={item.src} 
                                    title={`Video ${index + 1}`}
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        );
                    }
                })}
            </div>
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full" onClick={prevItem} style={{ left: "10px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full" onClick={nextItem} style={{ right: "10px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}

export default Carousel;