export default function PerfumeCard() {
  return (
    <div className="bg-white rounded-3xl flex flex-col md:flex-row max-w-2xl shadow-lg">
      {/* Image */}
      <div className="md:w-1/2">
        <img
          src="/assets/images/image-product-desktop.jpg"
          alt="Gabrielle Essence Eau De Parfum"
          className="w-full h-full rounded-l-3xl md: rounded-3xl"
        />
      </div>

      {/* Content */}
      <div className="p-8 md:p-8 flex flex-col justify-between md:w-1/2">
        <p className="uppercase tracking-[8px] text-sm text-grey mb-2">
          Perfume
        </p>
        <h1 className="text-4xl font-bold text-black mb-4">
          Gabrielle Essence Eau <br /> De Parfum
        </h1>
        <p className="text-lg text-grey mb-6 leading-6">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl font-bold text-green-500">$149.99</span>
          <span className="line-through text-sm text-grey">$169.99</span>
        </div>
        <button className="bg-green-700 hover:bg-green-500 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 ease-in-out duration-400">
          <img
            src="/assets/images/icon-cart.svg"
            alt="cart"
            className="w-5 h-5"
          />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
