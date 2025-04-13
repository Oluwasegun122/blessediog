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
      title: "Bank Churn Analysis Dashboard",
      image: "/images/bank_churn_dashboard.jpg",
      description:
        "This Power BI dashboard analyzes customer churn behavior for a fictional bank, identifying key indicators and demographic patterns to enable data-driven retention strategies.",
      contents: `PROJECT SUMMARY:
    This project presents a comprehensive interactive dashboard designed in Power BI to analyze customer churn behaviour for a fictional bank. The goal was to identify key churn indicators and understand the patterns across various customer demographics and behaviours. This analysis enables data-driven strategies to improve customer retention and engagement.
    
    OBJECTIVE:
    Customer churn is a critical challenge in the banking industry. The objective was to explore and visualize customer attrition trends by geography, gender, tenure, and product usage to identify at-risk segments and make informed decisions to reduce churn.
    
    KEY INSIGHTS:
    • Total Customers Analyzed: 10,000 (20.37% churn rate)
    • Churn by Geography:
      - Germany: 32.44% (highest, suggests service dissatisfaction/competition)
      - Spain: 16.67%
      - France: 16.15%
    • Churn by Gender:
      - Female: 25.07% 
      - Male: 16.4%
      - German females had highest churn among all groups
    • Credit Card Ownership: 
      - Identical 20.2% churn rate for both cardholders and non-cardholders
    • Tenure Insights:
      - Highest churn in 0-1 year customers
      - Dip during mid-tenure
      - Active members remained stable across tenure
    
    TECHNICAL DETAILS:
    • Tools Used:
      - Power BI (interactive visuals/data transformations)
      - DAX (calculated measures for churn rates/segment analysis)
      - Excel/CSV (data preparation/cleaning)
    • Dashboard Features:
      - Interactive filtering by geography and gender
      - Visualization types: Pie charts, bar graphs, line charts
      - Tooltip insights for metric interpretation
      - KPI side panel (Total Customers, Active Members, Churned Customers)
      - Custom color palettes and professional layout
    
    CONCLUSION:
    This dashboard showcases how data storytelling and visualization can reveal actionable insights into customer churn. It empowers decision-makers to focus on high-risk demographics and tenure segments to craft targeted retention strategies.`,
      slug: "bank-churn-dashboard",
      tags: [
        "Power BI",
        "Customer Analytics",
        "Data Visualization",
        "DAX",
        "Excel",
        "Dashboard Design",
        "Churn Prediction",
        "Business Intelligence",
      ],
      date: "2023-11-05",
      githubUrl: "https://github.com/BLESSEDIOG/bank-churn-analysis",
    },
    {
      id: "2",
      title: "Rocket Launch Dashboard",
      image: "/images/rocket_dashboard.png",
      description:
        "Interactive Power BI dashboard analyzing 4,600+ global rocket launches to reveal trends in mission success, space race history, and organizational performance.",
      contents: `PROJECT OVERVIEW:
    A comprehensive visualization of space exploration history through analysis of 4,600+ rocket launches worldwide, tracking technological progression and space race dynamics.
    
    KEY INSIGHTS:
    • Mission Statistics:
      - Total missions: 4,600+
      - Success rate analysis
      - Successful launch count
    • Performance Breakdown:
      - By rocket model (Cosmos-3M, Soyuz U)
      - By launch organization (RVSN USSR, CASC)
      - By launch site (Baikonur, Plesetsk Cosmodrome)
    • Historical Trends:
      - Mission volume evolution (1950s-present)
      - Success rate progression over decades
      - Surges in space activity
    • Comparative Analysis:
      - Organizational leadership across eras
      - Site-specific performance metrics
    
    TECHNICAL IMPLEMENTATION:
    • Dashboard Features:
      - Interactive year and status filters
      - Dynamic line charts for temporal trends
      - Comparative visualizations
      - Launch site analytics
    • Visual Components:
      - Mission KPIs (count, success rate)
      - Rocket model comparisons
      - Company performance visuals
      - Geographic launch distribution
    
    AUDIENCE VALUE:
    Essential tool for:
    - Space researchers and historians
    - Policy analysts
    - Aerospace organizations
    - Space enthusiasts
    - Technology progression studies`,
      slug: "rocket-launch-dashboard",
      tags: [
        "Power BI",
        "Space Analytics",
        "Data Visualization",
        "Historical Trends",
        "Aerospace",
        "Mission Analysis",
        "Dashboard",
      ],
      date: "2024-01-20",
      githubUrl: "https://github.com/BLESSEDIOG/rocket-launch-analysis",
    },
    {
      id: "3",
      title: "Car Advertisement Insights Dashboard",
      image: "/images/car_ads_dashboard.png",
      description:
        "Power BI dashboard analyzing 9,000+ car listings to reveal market trends in pricing, vehicle usage, and regional preferences across Pakistan.",
      contents: `PROJECT OVERVIEW:
    Interactive dashboard providing actionable insights into Pakistan's car advertisement market through analysis of 9,000+ vehicle listings.
    
    KEY INSIGHTS:
    • Market Overview:
      - Total Ads: 9,000+
      - Cumulative Price Analysis (PKR)
      - Total Kilometers Driven
    • Geographic Trends:
      - Most active cities: Karachi, Lahore
      - Seller location vs. registration patterns
    • Manufacturer Analysis:
      - Dominant brands: Suzuki, Honda
      - Local vs. imported vehicle distribution
    • Temporal Trends:
      - Price fluctuations over years
      - Kilometers driven evolution
    • Vehicle Conditions:
      - Usage patterns
      - Pricing behaviors
    
    TECHNICAL IMPLEMENTATION:
    • Visual Components:
      - Doughnut chart: Local vs. imported cars
      - Dual line charts: Price & kilometers trends
      - Geographic visualizations
      - Interactive KPI cards
    • Dashboard Features:
      - Dynamic filtering capabilities
      - User-friendly exploration
      - Clean, professional layout
    
    BUSINESS VALUE:
    Enables data-driven decisions for:
    - Used car dealers
    - Automotive marketers
    - Market analysts
    - Pricing strategists`,
      slug: "car-advertisement-insights",
      tags: [
        "Power BI",
        "Market Analysis",
        "Automotive Analytics",
        "Data Visualization",
        "Business Intelligence",
        "Pakistan Market",
      ],
      date: "2023-12-15",
      githubUrl: "https://github.com/BLESSEDIOG/car-advertisement-analysis",
    },
    {
      id: "4",
      title: "Hotel Booking Analysis Dashboard",
      image: "/images/hotel_booking_dashboard.jpg",
      description:
        "Interactive Power BI dashboard analyzing 266K hotel bookings and $14M revenue to reveal customer behavior patterns and business performance metrics.",
      contents: `PROJECT OVERVIEW:
    Comprehensive analysis of hotel industry performance through visualization of booking patterns, customer demographics, and revenue trends.
    
    KEY INSIGHTS:
    • Business Performance:
      - Total Revenue: $14M
      - Customer Volume: 266K
      - Hotels Analyzed: 614
    • Customer Behavior:
      - Dominant demographic: Adults over 35
      - Key markets: Thailand and Malaysia (highest bookings)
      - Payment preferences: Debit/credit cards (most popular)
    • Temporal Trends:
      - Seasonal peaks: July and Q4
      - Monthly booking patterns
    • Satisfaction Analysis:
      - Rating distribution by age group
      - Customer satisfaction insights
    
    TECHNICAL IMPLEMENTATION:
    • Dashboard Features:
      - Interactive KPI overview
      - Customer segmentation visuals
      - Payment mode distribution pie chart
      - Monthly trend line charts
      - Rating analysis by demographic
    • Tools Used:
      - Power BI (primary visualization)
      - Excel (data preparation)
      - DAX (data modeling and calculations)
      - Data modeling techniques
    
    BUSINESS VALUE:
    Enables hoteliers to:
    - Identify peak booking periods
    - Understand customer preferences
    - Optimize payment processes
    - Tailor marketing strategies
    - Improve service delivery`,
      slug: "hotel-booking-dashboard",
      tags: [
        "Power BI",
        "Hospitality Analytics",
        "Revenue Analysis",
        "Customer Behavior",
        "Data Visualization",
        "DAX",
        "Business Intelligence",
      ],
      date: "2024-02-10",
      githubUrl: "https://github.com/BLESSEDIOG/hotel-booking-analysis",
    },
    {
      id: "5",
      title: "Bike Sales Analysis Dashboard",
      image: "/images/bike_sales_dashboard.png",
      description:
        "Power BI dashboard analyzing $95M in bike sales to identify profitable products, customer segments, and regional performance.",
      contents: `PROJECT OVERVIEW:
    Interactive dashboard providing strategic insights for a bike retail business through comprehensive sales performance analysis.
    
    KEY METRICS:
    • Revenue: $95M
    • Profit: $42M (44.26% margin)
    • Units Sold: 1M+
    • Customers: 113K
    
    TOP INSIGHTS:
    • Geographic Performance:
      - #1 United States (highest revenue/profit)
      - #2 Australia
      - #3 UK
    • Customer Analysis:
      - Dominant demographic: Males aged 35-64
    • Product Performance:
      - Top Product: Mountain-200 Black ($1.3M profit)
      - Low Performers: Mountain-500 Black, Touring-3000 Yellow
    • Subcategory Trends:
      - Most Profitable: Road bikes, Mountain bikes
      - Least Profitable: Accessories (racks/stands)
    
    TECHNICAL IMPLEMENTATION:
    • Dashboard Features:
      - Interactive country/year filters
      - Top/Bottom 5 product comparisons
      - Demographic segmentation visuals
      - Profitability heatmaps
    • Visual Components:
      - Executive KPI cards
      - Geographic profit/revenue maps
      - Age/gender distribution charts
      - Product performance matrices
    
    BUSINESS IMPACT:
    Enables data-driven decisions for:
    - Product line optimization
    - Market focus strategies
    - Customer targeting
    - Inventory management`,
      slug: "bike-sales-dashboard",
      tags: [
        "Power BI",
        "Sales Analytics",
        "Retail",
        "Profit Analysis",
        "Data Visualization",
        "Business Intelligence",
      ],
      date: "2024-03-15",
      githubUrl: "https://github.com/BLESSEDIOG/bike-sales-analysis",
    },
  ];

  const project = mockProjects.find((p) => p.id === id);

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
