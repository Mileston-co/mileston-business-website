import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const StockSection = () => {
  const stockLogos = [
    { name: 'GOOGL', label: 'Google' },
    { name: 'NIO', label: 'NIO Inc' },
    { name: 'AAPL', label: 'Apple' },
    { name: 'AMZN', label: 'Amazon' },
    { name: 'META', label: 'Meta' },
    { name: 'TSLA', label: 'Tesla' },
    { name: 'NVDA', label: 'NVIDIA Corporation' },
    { name: 'MSFT', label: 'Microsoft Corporation' },
    { name: 'AMD', label: 'Advanced Micro Devices' }
  ]

  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current
    
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }, [])

  return (
    <div className="space-y-8 section-container" ref={containerRef}>
      {/* Top Stock Section */}
      <section 
        className="px-4 py-16 mx-auto bg-gray-100 rounded-3xl"
        ref={el => cardsRef.current[0] = el}
      >
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h2 className="mb-4 text-4xl font-bold">You call the stocks</h2>
            <p className="mb-8 text-gray-600">
              From Apple to Tesla, choose from 2000+ stocks, and own a slice of some of the most popular companies on the planet. Capital at risk.
            </p>
            <button className="px-6 py-3 text-white transition-colors bg-black rounded-full hover:bg-gray-800">
              Explore stocks
            </button>
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            {stockLogos.map((stock) => (
              <div 
                key={stock.name}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm"
              >
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                <span className="text-sm font-medium">{stock.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Column Section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1 - Categories */}
          <div 
            className="p-8 bg-gray-100 rounded-3xl"
            ref={el => cardsRef.current[1] = el}
          >
            <h3 className="mb-6 text-2xl font-bold">Keep count with categories</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-200 rounded-full"></div>
                  <span>Transfers</span>
                </div>
                <span className="text-gray-600">+€200.99</span>
              </div>
            </div>
            <div className="mt-8">
              <div className="w-full h-48 bg-purple-100 rounded-xl"></div>
            </div>
          </div>

          {/* Column 2 - Security */}
          <div 
            className="p-8 bg-gray-100 rounded-3xl"
            ref={el => cardsRef.current[2] = el}
          >
            <h3 className="mb-6 text-2xl font-bold">Security that never sleeps</h3>
            <div className="flex items-center justify-center w-full h-64 bg-white rounded-xl">
              <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          {/* Column 3 - Join Moneliq */}
          <div 
            className="p-8 bg-gray-100 rounded-3xl"
            ref={el => cardsRef.current[3] = el}
          >
            <h3 className="mb-6 text-2xl font-bold">Join the 40+ million using Moneliq</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-200 rounded-full"></div>
                  <span>Rent</span>
                </div>
                <span className="text-gray-600">-€820.00</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-200 rounded-full"></div>
                  <span>Beauty</span>
                </div>
                <span className="text-gray-600">-€79.80</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
                  <span>Transportation</span>
                </div>
                <span className="text-gray-600">-€250.50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StockSection 