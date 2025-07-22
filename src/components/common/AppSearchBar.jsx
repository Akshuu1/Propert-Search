"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholder-vanishing-inputs";

export function AppSearchBar() {
    const placeholders = [
        "Enter a PIN code",
        "Looking for a 2BHK in Delhi?",
        "Try 'Mumbai' or 'Bangalore'",
        "Type a location...",
        "Find homes near you",
    ];

    const handleChange = (e) => {
        console.log(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div className="mt-5 sm:mt-15">
            <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
        </div>
    );
}