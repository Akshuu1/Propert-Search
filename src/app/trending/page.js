"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '@/lib/supabaseClient';  // <---- import your existing client

function Trending() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTrendingProperties = async () => {
            try {
                const { data, error } = await supabase
                    .from('propertydata')
                    .select('*')
                    .order('created_at', { ascending: false })
                    .limit(6);

                if (error) throw error;

                setProperties(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getTrendingProperties();
    }, []);

    const handlePropertyClick = (id) => {
        window.location.href = `/listings/${id}`;
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center font-inter p-4 sm:p-6">
                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-t-2 border-zinc-500 rounded-full animate-spin"></div>
                    <span>Loading trending properties...</span>
                </div>
            </div>
        );
    }

    if (properties.length === 0 || error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-inter p-4 sm:p-6">
                <p className="text-lg">No trending properties found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen font-inter p-4 sm:p-6 transition-colors duration-300 my-20">
            <div className="container mx-auto max-w-4xl">

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property) => (
                        <li
                            key={property.id}
                            onClick={() => handlePropertyClick(property.id)}
                            className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden
                                       transform hover:-translate-y-1 border border-zinc-200 dark:border-zinc-800
                                       flex flex-col h-full"
                        >
                            <div className="relative w-full h-48 sm:h-56 bg-zinc-200 dark:bg-zinc-900 overflow-hidden">

                                <Image
                                    src={property.images || `https://placehold.co/600x400/b0b0b0/ffffff?text=${encodeURIComponent(property.name || 'Property')}`}
                                    alt={property.title || 'Property Image'}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://placehold.co/600x400/b0b0b0/ffffff?text=Image+Not+Found`;
                                    }}
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <h2 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
                                    {property.title || 'Unnamed Property'}
                                </h2>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-1 truncate">
                                    {property.location || 'Unknown Location'}
                                </p>
                                <p className="text-zinc-700 dark:text-zinc-300 font-bold text-lg mt-auto pt-2">
                                    Rs. {property.price ? property.price.toLocaleString() : 'N/A'}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Trending;
