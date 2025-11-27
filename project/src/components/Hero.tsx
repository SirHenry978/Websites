import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Empowering Tomorrow's Leaders Today
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Join our community of learners where innovation meets excellence. We nurture curiosity,
              foster creativity, and prepare students for a bright future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Schedule Tour
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8500700/pexels-photo-8500700.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: '2500+', label: 'Students' },
            { number: '150+', label: 'Faculty' },
            { number: '98%', label: 'Success Rate' },
            { number: '50+', label: 'Programs' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
