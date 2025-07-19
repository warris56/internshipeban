export default function FeaturesSection() {
    return (
      <section id="features" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A new approach to HR Management</h2>
            <p className="text-lg text-gray-600">Simple. Effective. Reliable</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🏢", title: "Employee Information System", desc: "Centralized repository of employee data..." },
              { icon: "✓", title: "Time & Attendance", desc: "Save time, reduce administrative work..." },
              { icon: "📋", title: "Leave Management", desc: "Define your leave policy. Allow employees..." },
              { icon: "🔄", title: "Performance Management", desc: "Set objectives and manage performance..." },
              { icon: "📊", title: "Document Management", desc: "Transform documents into a structured library..." },
              { icon: "💬", title: "Mobile App and Self Service", desc: "Employees can check things for themselves..." }
            ].map(({ icon, title, desc }, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-2xl">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 mb-4">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  