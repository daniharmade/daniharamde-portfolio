export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-[#ea580c] drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold">
          Oops! Halaman Tidak Ditemukan
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 max-w-md mx-auto">
          Sepertinya halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
        </p>

        {/* Button */}
        <div className="mt-8">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-[#ea580c] text-black font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}
