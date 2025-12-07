export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhishek Mohanty",
    url: "https://abhishekmohanty.dev", // Replace with actual domain
    jobTitle: "Full Stack Developer & UI/UX Designer",
    sameAs: [
      "https://github.com/nawseekhiya",
      "https://www.linkedin.com/in/iamabhishekmohanty/",
      // Add other social links here
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Open to Work",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
