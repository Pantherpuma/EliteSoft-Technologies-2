export default function Home() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold text-white mb-6">
        Build Smarter. Ship Faster.
      </h1>
      <p className="text-gray-400 text-lg mb-10">
        EliteSoft Technologies delivers full-stack software engineering and
        next-generation technology solutions — from AI models to cloud security
        and smart hardware systems.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border border-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Software Engineering</h3>
          <p className="text-gray-400">
            Web, mobile, and enterprise-grade applications.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
          <p className="text-gray-400">
            Intelligent systems, automation, and data solutions.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Cloud & Security</h3>
          <p className="text-gray-400">
            Secure, scalable cloud infrastructure and cyber defense.
          </p>
        </div>
      </div>
    </section>
  );
}
