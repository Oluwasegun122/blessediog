import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: any // Using "any" to bypass type constraint for now
) {
  const { id } = context.params as { id: string };

  // Mock project data
  const mockProjects = [
    {
      id: "1",
      title: "Sales Performance Dashboard",
      image: "/images/pro_img1.jpg",
      description:
        "Interactive dashboard analyzing sales trends across multiple regions and product categories.",
      contents: `Developed a comprehensive sales performance dashboard that:
- Aggregated data from 5+ sources into a unified data model
- Identified underperforming regions with 25% accuracy improvement
- Enabled real-time decision making for sales teams
- Reduced reporting time by 60%`,
      slug: "sales-performance-dashboard",
      tags: ["Power BI", "SQL", "Data Modeling"],
      date: "2023-03-15",
      githubUrl: "https://github.com/BLESSEDIOG/sales-dashboard",
    },
    {
      id: "2",
      title: "Customer Churn Prediction Model",
      image: "/images/pro_img1.jpg",
      description:
        "Machine learning model predicting customer churn with 85% accuracy for a telecom company.",
      contents: `Built and deployed a predictive model that:
- Processed 2M+ customer records
- Identified key churn indicators (top 3: service outages, billing issues, competitor offers)
- Achieved 85% prediction accuracy
- Reduced churn by 12% through targeted interventions`,
      slug: "churn-prediction-model",
      tags: ["Python", "scikit-learn", "Pandas", "Jupyter"],
      date: "2023-06-22",
      githubUrl: "https://github.com/BLESSEDIOG/churn-prediction",
    },
    {
      id: "3",
      title: "Educational Data Analysis Platform",
      image: "/images/pro_img1.jpg",
      description:
        "Data platform analyzing student performance and institutional effectiveness for a school district.",
      contents: `Created an analytics solution that:
- Processed 5 years of student records
- Identified achievement gaps between demographic groups
- Provided teacher effectiveness insights
- Helped allocate $2M in resources more effectively`,
      slug: "education-data-platform",
      tags: ["Tableau", "SQL Server", "ETL", "Data Visualization"],
      date: "2023-09-10",
      liveUrl: "https://education-demo.example.com",
    },
    {
      id: "4",
      title: "Aircraft Maintenance Optimization",
      image: "/images/pro_img1.jpg",
      description:
        "Predictive maintenance system reducing aircraft downtime by 18% for an aerospace client.",
      contents: `Developed maintenance algorithms that:
- Analyzed sensor data from 150+ aircraft
- Predicted part failures with 92% accuracy
- Reduced unscheduled maintenance by 18%
- Saved $4.2M annually in operational costs`,
      slug: "aircraft-maintenance-optimization",
      tags: ["Python", "Azure ML", "Time Series Analysis", "Power BI"],
      date: "2023-11-05",
    },
    {
      id: "5",
      title: "Gaming Industry Player Behavior Analysis",
      image: "/images/pro_img1.jpg",
      description:
        "Behavioral segmentation model identifying high-value player patterns for a gaming company.",
      contents: `Conducted analysis that:
- Segmented 1M+ players into 6 behavioral clusters
- Identified monetization opportunities increasing revenue by 22%
- Reduced player churn through personalized engagement
- Optimized game design based on usage patterns`,
      slug: "gaming-player-analysis",
      tags: ["R", "Cluster Analysis", "BigQuery", "Data Storytelling"],
      date: "2024-01-18",
    },
  ];

  const project = mockProjects.find((p) => p.id === id);

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
