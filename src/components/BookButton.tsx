'use client';
// book-button component

export default function BookButton() {
    const handleCheckout = async () => {
      try {
        const res = await fetch('/api/checkout', { method: "POST"});
        const data = await res.json();
        window.location.href = data.url;
      } catch (error) {
        console.error("Error during checkout:", error);
      }
    }

    return (
        <button 
        onClick={handleCheckout}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Book Now
        </button>
    );
}