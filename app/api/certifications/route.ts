import { NextResponse } from "next/server";

const certifications = [
  {
    id: 1,
    title: "Full-Stack Development Certification",
    issuer: "Coursera",
    date: "Jan 2023",
    image:
      "/images/alx-aice-ai-career-essentials-certificate-faith-obajafa.png",
    fileType: "image",
    credentialId: "FSD-2023-0256",
    description: `This comprehensive certification validates my proficiency in building end-to-end web applications. 
    Covered technologies include:
    • React.js with Hooks and Context API
    • Node.js and Express for backend services
    • MongoDB and PostgreSQL database management
    • RESTful API design and implementation
    • Authentication using JWT and OAuth
    
    The program included hands-on projects like:
    - E-commerce platform with payment integration
    - Real-time chat application
    - Portfolio builder with admin dashboard`,
  },
  {
    id: 2,
    title: "Data Analysis Certification",
    issuer: "Coursera",
    date: "Mar 2023",
    image: "/images/FAITH OBAJAFA CERT.pdf",
    fileType: "pdf",
    credentialId: "DA-2023-0189",
    description: `This certification demonstrates advanced data analysis capabilities including:
    • Python data analysis with Pandas/NumPy
    • Data visualization using Matplotlib and Seaborn
    • Statistical analysis and hypothesis testing
    • SQL for complex data queries
    • Machine learning fundamentals
    
    Key projects completed:
    - Customer segmentation analysis
    - Sales trend forecasting model
    - COVID-19 data visualization dashboard
    - A/B testing statistical analysis`,
  },
  {
    id: 3,
    title: "Cloud Architecture Professional",
    issuer: "AWS",
    date: "May 2023",
    image: "/images/cloud-cert.jpg",
    fileType: "image",
    credentialId: "AWS-CAP-2023-7421",
    description: `Validates expertise in designing distributed systems on AWS, covering:
    • Infrastructure as Code (Terraform)
    • Serverless architecture patterns
    • CI/CD pipeline implementation
    • Containerization with ECS/EKS
    • Security best practices
    
    Demonstrated through:
    - Migration of monolithic app to microservices
    - Auto-scaling load-balanced architecture
    - Disaster recovery solution design
    - Cost optimization strategies`,
  },
];
export async function GET() {
  return NextResponse.json(certifications);
}
