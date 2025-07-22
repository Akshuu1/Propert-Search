"use client"

import React, { useEffect, useState } from "react"
import InfiniteMenu from "../ui/infinite-menu"
import { fetchProperties } from "@/lib/api"
import { useRouter } from "next/navigation"

const AppInfiniteGallery = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetchProperties()
      .then((data) => {
        const formatted = data.map((prop) => ({
          image: prop.images,
          link: `/listings/${prop.id}`,
          title: prop.title,
          description: `${prop.location}, ${prop.city}, ${prop.state}`
        }))
        setItems(formatted)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <>
    <div className="h-[100vh] w-full flex items-center justify-center flex-col">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-black border-t-transparent dark:border-white dark:border-t-transparent mb-5"></div>
      <p className="text-base">Loading</p>
    </div>
  </>

  return (
    <div className="h-[900px] relative mb-20">
      <InfiniteMenu items={items} theme="light" />
    </div>
  )
}

export default AppInfiniteGallery
