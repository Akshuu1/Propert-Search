const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function fetchProperties() {
    const res = await fetch(`${API_BASE_URL}/properties`);
    if (!res.ok) throw new Error("Failed to fetch properties");
    return res.json();
}

export async function fetchPropertyById(id) {
    const res = await fetch(`${API_BASE_URL}/properties/${id}`);
    if (!res.ok) throw new Error("Failed to fetch property");
    return res.json();
}