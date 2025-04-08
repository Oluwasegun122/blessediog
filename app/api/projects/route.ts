import { NextResponse } from "next/server";

const projects = [
  {
    id: "1",
    title: "Sales Performance Analytics Dashboard",
    image: "/images/sales-dashboard.jpg",
    description:
      "Interactive Power BI dashboard analyzing multi-region sales trends and product performance.",
    slug: "sales-analytics-dashboard",
    tags: ["Power BI", "SQL", "Data Visualization"],
    date: "2023-03-15",
  },
  {
    id: "2",
    title: "Customer Churn Prediction Model",
    image: "/images/churn-analysis.jpg",
    description:
      "Machine learning model predicting customer churn with 85% accuracy for telecom sector.",
    slug: "churn-prediction-model",
    tags: ["Python", "scikit-learn", "Pandas"],
    date: "2023-06-22",
  },
  {
    id: "3",
    image: "/images/education-analytics.jpg",
    title: "Educational Data Analysis Platform",
    description:
      "Comprehensive analysis of student performance and institutional effectiveness metrics.",
    slug: "education-data-platform",
    tags: ["Tableau", "SQL Server", "Data Storytelling"],
    date: "2023-09-10",
  },
  {
    id: "4",
    title: "Aircraft Maintenance Optimization",
    image: "/images/aerospace-analytics.jpg",
    description:
      "Predictive maintenance system reducing aircraft downtime by 18%.",
    slug: "aircraft-maintenance-system",
    tags: ["Python", "Azure ML", "Time Series Analysis"],
    date: "2023-11-05",
  },
  {
    id: "5",
    title: "Player Behavior Analytics",
    image: "/images/gaming-analytics.jpg",
    description:
      "Behavioral segmentation model for gaming industry with 22% revenue impact.",
    slug: "gaming-analytics",
    tags: ["R", "Cluster Analysis", "BigQuery"],
    date: "2024-01-18",
  },
  {
    id: "6",
    title: "Data Science Portfolio",
    image: "/images/data-portfolio.jpg",
    description: "Showcase of data analysis projects and competition entries.",
    slug: "data-science-portfolio",
    tags: ["Python", "Jupyter", "Data Visualization"],
    date: "2024-02-10",
  },
];

export async function GET() {
  return NextResponse.json(projects);
}
