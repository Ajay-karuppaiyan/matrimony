import React from "react";

const CountModal = () => {
  return (
    <section className="py-8">
      <div className="px-4 lg:px-12">
        <div className="bg-purple-50/50 p-10 md:p-16 rounded-3xl shadow-sm border border-purple-100">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

              {/* Item 1 */}
              <div className="bg-white p-8 rounded-3xl shadow-md border border-purple-50 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center shadow-sm">
                  <i className="fa fa-heart-o text-[#af1684] text-3xl" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-gray-900 text-4xl font-extrabold mb-1">2K</h4>
                  <span className="text-gray-500 uppercase tracking-widest text-xs font-bold block mt-2">Couples Paired</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-md border border-purple-50 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center shadow-sm">
                  <i className="fa fa-users text-blue-600 text-3xl" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-gray-900 text-4xl font-extrabold mb-1">4000+</h4>
                  <span className="text-gray-500 uppercase tracking-widest text-xs font-bold block mt-2">Registrants</span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-white p-8 rounded-3xl shadow-md border border-purple-50 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center shadow-sm">
                  <i className="fa fa-male text-green-600 text-3xl" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-gray-900 text-4xl font-extrabold mb-1">1600+</h4>
                  <span className="text-gray-500 uppercase tracking-widest text-xs font-bold block mt-2">Groom</span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="bg-white p-8 rounded-3xl shadow-md border border-purple-50 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center shadow-sm">
                  <i className="fa fa-female text-pink-600 text-3xl" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-gray-900 text-4xl font-extrabold mb-1">2000+</h4>
                  <span className="text-gray-500 uppercase tracking-widest text-xs font-bold block mt-2">Bride</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountModal;