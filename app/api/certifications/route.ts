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
    id: 4,
    title: "Human Resource Management Certification",
    issuer: "LA PLAGE META VERSE",
    date: "April 2025",
    image: "/images/06f604d4-f746-4a16-a2ec-6deeb34eba41.jpg",
    fileType: "image",
    credentialId: "1969017",
    description: `
      Core Competencies:
          - Recruitment and selection processes
          - Performance management systems
          - Employee engagement strategies
          - Organizational behavior analysis
          - Workplace conflict resolution
  
      Practical Applications:
          - Designing effective talent acquisition pipelines
          - Implementing performance optimization frameworks
          - Developing organizational growth initiatives
          - Executing employee relations programs
          - Measuring and improving workplace satisfaction
  
      Professional Validation:
          This certification from LA PLAGE META VERSE validates my comprehensive
          understanding of modern HR practices and strategic people management.
          It demonstrates my ability to:
          - Align human capital strategies with business objectives
          - Develop data-driven HR solutions
          - Foster inclusive and productive work environments
          - Bridge organizational strategy with employee needs
          - Implement contemporary HR technologies and methodologies
  
      Industry Recognition:
          As an accredited HR certification, it positions me as a professional
          capable of transforming human resources into competitive advantage,
          with verified skills in both operational HR functions and strategic
          workforce planning.`,
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
  {
    id: 7,
    title: "Introduction to Business and Data Analysis",
    issuer: "MTF Institute of Management, Technology and Finance (via Udemy)",
    date: "April 12, 2025",
    image: "/images/06f604d4-f746-4a16-a2ec-6deeb34eba41.jpg", // You'll need to add this image
    fileType: "image",
    credentialId: "UT-BDA-2025-116",
    description: `
      Course Coverage:
          - Business process understanding
          - Basic data analytics principles
          - Practical interpretation of business data
  
      Demonstrated Skills:
          - Structured approach to solving real-world business problems
          - Application of analytical tools for informed decision-making
          - Effective presentation of data-driven insights
  
      Professional Value:
          This certification validates my foundational knowledge in business analysis
          and data interpretation, equipping me with essential skills to bridge the
          gap between business needs and data solutions. The credential demonstrates
          my ability to analyze business processes and translate data into actionable
          insights, making me better prepared to support data-informed business
          strategies.`,
  },
  {
    id: 8,
    title: "Data Quality, Data Management & Data Governance Certificate",
    issuer: "MTF Institute of Management, Technology and Finance (via Udemy)",
    date: "April 12, 2025",
    image: "/images/DATA MANAGEMENT FAITH OBAJAFA (3).jpg", // Update with your actual image path
    fileType: "image",
    credentialId: "UT-DMQ-2025-109",
    description: `
      Core Competencies:
          - Data lifecycle management principles
          - Implementation of data quality frameworks
          - Governance strategies for reliable and secure data systems
  
      Demonstrated Capabilities:
          - Execution of data quality assurance techniques
          - Structuring data systems for consistency and accessibility
          - Application of governance practices aligned with industry standards
  
      Professional Value:
          This certification validates my expertise in establishing and maintaining
          high-quality data systems through proven governance frameworks. It demonstrates
          my ability to implement data quality controls, design efficient data management
          processes, and ensure compliance with industry best practices - critical skills
          for any data-driven organization. The credential positions me as a professional
          capable of transforming raw data into trustworthy business assets through
          systematic governance approaches.`,
  },
  {
    id: 9,
    title: "Basic Financial Education Certification",
    issuer: "Kudimata",
    date: "December 13, 2024",
    image: "/images/financial_education_certificate.jpg", // Update with your actual image path
    fileType: "image",
    credentialId: "A0813B564B",
    description: `
      Program Focus:
          - Core financial literacy principles
          - Personal finance management techniques
          - Strategic financial planning methodologies
  
      Key Competencies:
          - Budget creation and management
          - Debt and risk management
          - Investment fundamentals
          - Retirement planning strategies
          - Financial goal setting
  
      Institutional Recognition:
          Sponsored by: NNPC Foundation
          Endorsed by:
          - Kathleen Erhimu, Founder/GMD of Kudimata
          - Brig Gen YD Ahmed, Director General of NYSC
          - Emmanuella N. Arukwe, MD/CEO of NNPC Foundation
  
      Professional Application:
          This certification validates my ability to:
          - Make informed personal and professional financial decisions
          - Develop long-term financial stability plans
          - Analyze financial products and services
          - Apply financial concepts to real-world situations
          - Guide others in financial literacy matters
  
      Certification Value:
          Recognized credential demonstrating comprehensive understanding of
          financial fundamentals, endorsed by national financial and youth
          development organizations. Equips holders to navigate complex
          financial landscapes with confidence.`,
  },
  {
    id: 10,
    title: "Performance Management with Generative AI for HR & Managers",
    issuer: "Mike Pritula (via Udemy)",
    date: "April 12, 2025",
    image: "/images/DATA MANAGEMENT FAITH OBAJAFA (3)",
    fileType: "image",
    credentialId: "UT-PMAI-2025-0421",
    description: `
      Course Verification:
        - Successfully completed all course requirements
        - Full course completion validated by Udemy
        - 52 minutes of core video instruction
        - Part of Udemy's official certification catalog
  
      Instructor Credentials:
        - Mike Pritula (SHRM, HRCI certified instructor)
        - 52,000+ professionals trained worldwide
        - 4.5★ average rating from 2000+ reviews
        - Creator of 130+ HR and AI courses including:
          * HRCI certification prep
          * AI for Human Resources
          * HR Analytics
          * ChatGPT for HR professionals
          * Advanced Recruiting techniques
          * Compensation & Benefits strategies
  
      Curriculum Coverage:
        - Generative AI applications in performance reviews
        - Automated HR analytics processes
        - AI-driven employee development plans
        - ChatGPT for HR documentation
        - Data-driven compensation analysis
  
      Skills Validation:
        This certificate verifies my ability to:
        - Integrate generative AI into performance management
        - Automate routine HR evaluation processes
        - Develop AI-enhanced employee feedback systems
        - Implement data-driven performance metrics
        - Optimize HR workflows with AI tools
  
      Professional Recognition:
        Earned from Udemy's premier HR technology program,
        this certification demonstrates cutting-edge competencies
        in merging traditional HR practices with AI innovation.`,
    verificationUrl:
      "https://www.udemy.com/certificate/verify/UT-PMAI-2025-0421",
  },
];
export async function GET() {
  return NextResponse.json(certifications);
}
