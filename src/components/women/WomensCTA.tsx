import Link from "next/link";

export function WomensCTA() {
  return (
    <section className="py-16 bg-[#2A0717] text-[#FFF8EA] text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold mb-4">Visit Our Store to Explore Full Collection</h2>
        <p className="text-[#FFF8EA]/80 mb-6">Discover full range of dresses, kurtis, leggings & party wear in Shadnagar.</p>
        <Link
          href="/store"
          className="inline-block bg-[#E5C378] text-[#2A0717] px-6 py-3 rounded-full font-bold text-sm hover:opacity-90"
        >
          Visit Store Details &rarr;
        </Link>
      </div>
    </section>
  );
}
