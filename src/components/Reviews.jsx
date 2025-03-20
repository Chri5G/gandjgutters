import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=name,rating,reviews&key=YOUR_API_KEY`
      );
      const data = await res.json();
      setReviews(data.result.reviews || []);
    }
    fetchReviews();
  }, []);

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Google Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{review.author_name}</p>
                  <p className="text-sm text-yellow-500">
                    {"★".repeat(review.rating)}
                  </p>
                </div>
              </div>
              <p className="text-gray-700">{review.text}</p>
              <p className="text-xs text-gray-400 mt-2">{review.relative_time_description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
