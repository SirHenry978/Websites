import { BookOpen, Beaker, Palette, Music, Globe, Calculator } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Language Arts',
      description: 'Comprehensive English and literature programs fostering communication skills.',
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'Advanced math curriculum from fundamentals to calculus and beyond.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Beaker,
      title: 'Sciences',
      description: 'State-of-the-art labs for physics, chemistry, and biology exploration.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Palette,
      title: 'Arts & Design',
      description: 'Creative programs in visual arts, design, and digital media.',
      color: 'from-pink-400 to-pink-600',
    },
    {
      icon: Music,
      title: 'Music & Drama',
      description: 'Performance arts including vocal, instrumental, and theatrical training.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Globe,
      title: 'Global Studies',
      description: 'International perspectives on history, culture, and social sciences.',
      color: 'from-teal-400 to-teal-600',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of academic and enrichment programs designed to unlock
            every student's potential and passion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                <div className="p-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                  <button className="mt-4 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Extracurricular Activities
              </h3>
              <p className="text-gray-700 mb-4">
                Beyond the classroom, we offer extensive extracurricular programs including sports,
                clubs, competitions, and community service opportunities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Sports Teams & Athletics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Academic Competitions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Leadership Programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Community Service
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/8500673/pexels-photo-8500673.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Activity 1"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Activity 2"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
