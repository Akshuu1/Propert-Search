"use client"

import React, { useEffect, useState } from "react"
import InfiniteMenu from "../ui/infinite-menu"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

const AppInfiniteGallery = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("properties")
        .select("id, title, location, city, state, images")

      if (error) {
        console.error("Supabase fetch error:", error.message)
      } else if (data) {
        const formatted = data.map((prop) => {
          let imageUrl

          // 🛠️ Handle different image types (array or CSV string)
          if (Array.isArray(prop.images) && prop.images.length > 0) {
            imageUrl = prop.images[0]
          } else if (typeof prop.images === "string") {
            try {
              // Try parsing it as JSON (in case it's a stringified array)
              const parsed = JSON.parse(prop.images)
              imageUrl = Array.isArray(parsed) && parsed.length > 0 ? parsed[0] : parsed
            } catch {
              imageUrl = prop.images.includes("http")
                ? prop.images
                : "https://via.placeholder.com/600x400?text=No+Image"
            }
          } else {
            imageUrl = "https://via.placeholder.com/600x400?text=No+Image"
          }

          return {
            image: imageUrl,
            link: `/listings/${prop.id}`,
            title: prop.title,
            description: [prop.location, prop.city, prop.state].filter(Boolean).join(", "),
          }
        })

        setItems(formatted)
      }

      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="h-[100vh] w-full flex items-center justify-center flex-col">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-black border-t-transparent dark:border-white dark:border-t-transparent mb-5"></div>
        <p className="text-base">Loading</p>
      </div>
    )
  }

  return (
    <div className="h-[900px] relative mb-20">
      <InfiniteMenu items={items} theme="light" />
    </div>
  )
}

export default AppInfiniteGallery
