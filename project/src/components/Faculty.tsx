import { Mail, Linkedin } from 'lucide-react';

export default function Faculty() {
  const facultyMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Principal',
      department: 'Administration',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Ph.D. in Educational Leadership with 20+ years of experience',
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Head of Sciences',
      department: 'Science Department',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former research scientist with expertise in STEM education',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Mathematics Lead',
      department: 'Mathematics',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning educator specializing in innovative math pedagogy',
    },
    {
      name: 'David Thompson',
      role: 'Language Arts Director',
      department: 'English Department',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Published author and passionate literature educator',
    },
    {
      name: 'Prof. Lisa Anderson',
      role: 'Arts Coordinator',
      department: 'Creative Arts',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Professional artist with extensive teaching experience',
    },
    {
      name: 'James Wilson',
      role: 'Athletic Director',
      department: 'Sports & Wellness',
      image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former college athlete dedicated to student wellness',
    },
  ];

  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Faculty</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of experienced educators is committed to providing exceptional
            learning experiences and mentorship to every student.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member) => (
            <div
              key={member.name}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-blue-200 text-sm">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-blue-600 mb-2">{member.department}</div>
                <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <button className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </button>
                  <button className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Team</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate educators to join our community. Explore career
            opportunities and make a difference in students' lives.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}
