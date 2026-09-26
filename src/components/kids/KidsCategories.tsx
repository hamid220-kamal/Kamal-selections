import { kidsData } from "@/data/kids";

export function KidsCategories() {
  return (
    <section className="py-16 bg-[#FAF3EB]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-2xl font-bold text-[#3E0A23] mb-8">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {kidsData.categories.map((cat) => (
            <div key={cat.id} className="p-6 bg-white rounded-2xl border border-[#E5C378]/30 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#3E0A23] mb-2">{cat.name}</h3>
              <p className="text-sm text-[#4A2B35]">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
