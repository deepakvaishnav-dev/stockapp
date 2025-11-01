import Card from "../../card-table/card";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    bio: "Financial expert with 15+ years of experience in stock market analysis and portfolio management.",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "Tech innovator specializing in real-time data processing and AI-driven analytics solutions.",
  },
  {
    name: "Amit Patel",
    role: "Head of Analytics",
    bio: "Data scientist with expertise in market trends, risk assessment, and predictive modeling.",
  },
  {
    name: "Neha Gupta",
    role: "Head of Customer Success",
    bio: "Customer-focused leader dedicated to providing exceptional support and user experience.",
  },
];

const features = [
  {
    title: "Real-Time Data",
    description: "Access live market data, stock prices, and indices updated in real-time.",
  },
  {
    title: "Advanced Analytics",
    description: "Leverage AI-driven insights and predictive analytics for better decisions.",
  },
  {
    title: "User-Friendly Interface",
    description: "Intuitive design that makes stock market investing accessible to everyone.",
  },
  {
    title: "Secure & Reliable",
    description: "Bank-level security and 99.9% uptime guarantee for your peace of mind.",
  },
  {
    title: "Expert Support",
    description: "24/7 customer support from financial experts to help you succeed.",
  },
  {
    title: "Comprehensive Tools",
    description: "Portfolio management, news, analytics, and more in one platform.",
  },
];

export default function AboutPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">About StockHub</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
        Empowering users with real-time stock insights and AI-driven analytics to make informed investment decisions.
      </p>

      <Card title="Our Mission">
        <p className="text-gray-700 dark:text-gray-300">
          At StockHub, our mission is to democratize access to professional-grade stock market tools and insights.
          We believe that every investor, regardless of their experience level, deserves access to real-time data,
          advanced analytics, and AI-driven recommendations.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          We are committed to providing a transparent, secure, and user-friendly platform that empowers our users to
          take control of their financial future and build wealth through informed investment decisions.
        </p>
      </Card>

      <Card title="Our Vision">
        <p className="text-gray-700 dark:text-gray-300">
          We envision a world where sophisticated investment tools are accessible to everyone. Our goal is to become
          the leading platform for retail investors in India and beyond, known for our innovation, reliability, and
          commitment to user success.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Through continuous innovation and a deep understanding of market dynamics, we aim to help millions of
          users achieve their financial goals and build sustainable wealth.
        </p>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-6">Why Choose StockHub?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card key={i} title={feature.title}>
              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <Card key={i} title={member.name}>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{member.role}</p>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
