import { NextResponse } from "next/server";

const certifications = [
  {
    id: 1,
    title: "Data Analysis and Visualization Certification",
    issuer: "StarTech",
    date: "Jan 2025",
    image: "/images/FAITH OBAJAFA CERT.jpg",
    fileType: "image",
    credentialId: "FSD-2023-0256",
    description: `
    This certification signifies the successful completion of a rigorous six-month training in data analysis and visualization. The program encompassed core modules including data storage and management using MySQL, statistical analysis with SPSS, Power BI dashboard development, and data cleaning, manipulation, and transformation using Microsoft Excel.
    Core Competencies:
    SQL, SPSS, Power BI, Microsoft Excel, Data Visualization, Data Management
    Professional Relevance: This certification has strengthened my analytical 
    capabilities and equipped me with practical tools for translating complex 
    datasets into actionable insights—skills that are critical for data-driven 
    decision-making across industries.`,
  },

  {
    id: 2,
    title: "Artificial Intelligence Career Essentials Certification",
    issuer: "ALX Africa",
    date: "July 2024",
    image:
      "/images/alx-aice-ai-career-essentials-certificate-faith-obajafa.png",
    fileType: "image",
    credentialId: "DA-2023-0189",
    description: `
      Validates expertise in artificial intelligence and its application in the modern workforce, covering:

        - Machine learning principles
        - AI ethics
        - Digital readiness
        - AI-powered tools and strategies

      Demonstrated through:
        - Foundational knowledge of AI fundamentals
        - Understanding of machine learning concepts
        - Application of ethical AI practices
        - Engagement with AI-powered tools and strategies
      
      Professional Relevance:
        This certification demonstrates my commitment to continuous learning and technological 
        adaptability, preparing me to engage with AI-powered tools and strategies that are 
        increasingly shaping the future of work..`,
  },

  {
    id: 3,
    title: "Cloud Architecture Professional",
    issuer: "AWS",
    date: "May 2023",
    image: "/images/Faith Obajafa certificate_3.jpg",
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
  {
    id: 4,
    title: "Human Resource Management Certification",
    issuer: "LA PLAGE META VERSE",
    date: "April 2025",
    image: "/images/Faith Obajafa certificate_2.jpg",
    fileType: "image",
    credentialId: "1969017",
    description: `
      Description:
      Validates expertise in human resource functions and strategic people management, covering:

        - Recruitment and selection
        - Performance management
        - Employee engagement
        - Organizational behavior
        - Conflict resolution

      Demonstrated through:
        - Talent acquisition and management
        - Performance management and optimization
        - Organizational development and growth
        - Employee relations and engagement strategies

      **Professional Relevance:**
        This certification demonstrates my ability to align human capital strategies 
        with organizational goals, promoting sustainable growth and employee 
        satisfaction. I am equipped to foster effective workplace environments 
        and drive organizational success through strategic people management.`,
  },
  {
    id: 3,
    title: "Master Emotional Intelligence",
    issuer: "Grovo",
    date: "May 2023",
    image: "/images/Faith Obajafa certificate_4.jpg",
    fileType: "image",
    credentialId: "AWS-CAP-2023-7421",
    description: `
      Core Competencies:
          - Self-awareness
          - Self-regulation
          - Social awareness
          - Relationship management

      Professional Relevance:
          This certification demonstrates my commitment to developing emotional 
          intelligence, a crucial skill for effective leadership, teamwork, and 
          overall success. By understanding and managing my own emotions, as well 
          as recognizing and influencing the emotions of others, I am equipped to 
          navigate complex social dynamics and drive personal and professional 
          growth. This certification showcases my dedication to self-improvement 
          and my ability to build strong relationships, making me a valuable asset 
          to any organization.`,
  },
  {
    id: 6,
    title: "Emotional Intelligence Certification",
    issuer: "Grovo",
    date: "January 6, 2025",
    image: "/images/Faith Obajafa certificate_1.jpg",
    fileType: "image",
    credentialId: "Not Provided (17-minute course completion)",
    description: `
      Validates expertise in emotional intelligence, covering:

        - Self-awareness
        - Self-regulation
        - Social awareness
        - Relationship management

      Demonstrated through:

        - Effective emotional management
        - Complex social dynamics navigation
        - Strong relationship building
        - Personal and professional growth strategies

      Professional Relevance:
        This certification demonstrates my commitment to developing emotional 
        intelligence, a crucial skill for effective leadership, teamwork, and 
        overall success. By understanding and managing my own emotions, as well 
        as recognizing and influencing the emotions of others, I am equipped to 
        drive personal and professional growth and make a valuable contribution 
        to any organization.`,
  },
];
export async function GET() {
  return NextResponse.json(certifications);
}
