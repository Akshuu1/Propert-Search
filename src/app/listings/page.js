"use client"

import React, { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function Page() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperties = async () => {
      const { data, error } = await supabase
        .from("propertydata")
        .select("*")

      if (error) {
        console.error("Supabase fetch error:", error)
      } else {
        setData(data)
      }
      setLoading(false)
    }

    fetchProperties()
  }, [])

  if (loading) {
    return (
      <div className="h-screen bg-black text-white flex flex-col items-center justify-center">
        <div className="h-10 w-10 animate-spin border-4 border-white border-t-transparent rounded-full mb-4"></div>
        <p className="text-lg">Loading properties...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => {
          let imageUrl = "https://via.placeholder.com/600x400?text=No+Image"

          if (Array.isArray(item.images) && item.images.length > 0) {
            imageUrl = item.images[0]
          } else if (typeof item.images === "string") {
            try {
              const parsed = JSON.parse(item.images)
              if (Array.isArray(parsed) && parsed.length > 0) {
                imageUrl = parsed[0]
              } else if (item.images.startsWith("http")) {
                imageUrl = item.images
              }
            } catch {
              if (item.images.startsWith("http")) imageUrl = item.images
            }
          }

          return (
            <div
              key={index}
              className="bg-white text-black rounded-2xl shadow-xl p-6 hover:scale-[1.02] transition-all"
            >
              <img
                src={imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-sm mb-2 italic text-gray-700">{item.description}</p>
              <p className="text-lg font-semibold text-green-700 mb-3">₹ {item.price}</p>
              <div className="text-sm space-y-1">
                <p><strong>Location:</strong> {item.location}, {item.city}, {item.state} - {item.zipcode}</p>
                <p><strong>Coordinates:</strong> {item.latitude}, {item.longitude}</p>
                <p><strong>Type:</strong> {item.property_type}</p>
                <p><strong>Bedrooms:</strong> {item.bedrooms} | <strong>Bathrooms:</strong> {item.bathrooms}</p>
                <p><strong>Area:</strong> {item.area_sqft} sqft</p>
                <p><strong>Furnishing:</strong> {item.furnishing}</p>
                <p><strong>Amenities:</strong> {item.amenities}</p>
                <p><strong>Verified:</strong> {item.is_verified === true || item.is_verified === "true" ? "✅ Yes" : "❌ No"}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
