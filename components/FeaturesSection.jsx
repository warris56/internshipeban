export default function FeaturesSection() {
    return (
      <section id="features" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto"> {/* Increased max width */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">A new approach to HR Management</h2>
            <p className="text-xl text-gray-600">Simple. Effective. Reliable</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: "🏢",
                title: "Employee Information System",
                desc: "Centralized repository of employee data that the HR group needs for completing all human resource processes efficiently.",
              },
              {
                icon: "✓",
                title: "Time & Attendance",
                desc: "Save time, reduce administrative work, maintain accurate attendance records and eliminate process bottlenecks.",
              },
              {
                icon: "📋",
                title: "Leave Management",
                desc: "Define your leave policy. Allow employees to apply for leave and manage their leave balances online.",
              },
              {
                icon: "🔄",
                title: "Performance Management",
                desc: "Set objectives and Manage your employees’ performance and development with a flexible, sustainable approach that works for everyone.",
              },
              {
                icon: "📊",
                title: "Document Management",
                desc: "Helps organizations transform their documents into an organized, structured and secured library that is accessible from anywhere.",
              },
              {
                icon: "💬",
                title: "Mobile App and Self Service",
                desc: "Employees will become more efficient as they can simply check things for themselves, then get right back to their own work.",
              },
            ].map(({ icon, title, desc }, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-xl shadow-md border border-gray-200 transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-5 text-3xl">
                  {icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  