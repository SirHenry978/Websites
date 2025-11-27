import { Award, Users, Target, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Rigorous curriculum designed to challenge and inspire students to reach their full potential.',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building strong relationships and fostering collaboration among students, parents, and educators.',
    },
    {
      icon: Target,
      title: 'Future Ready',
      description: 'Preparing students with skills and knowledge needed to thrive in an ever-changing world.',
    },
    {
      icon: Heart,
      title: 'Character Building',
      description: 'Developing integrity, empathy, and leadership qualities in every student.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Our School</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Established with a vision to provide world-class education, we are committed to
            nurturing young minds and shaping future leaders through innovative teaching and
            holistic development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our mission is to provide a safe, supportive, and stimulating environment where
              students can discover their passions, develop their talents, and achieve their dreams.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We envision a future where our graduates become compassionate global citizens,
              innovative thinkers, and lifelong learners who positively impact their communities
              and the world.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.pexels.com/photos/8500660/pexels-photo-8500660.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="School building"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
