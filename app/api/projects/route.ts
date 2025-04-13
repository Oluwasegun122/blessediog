import { NextResponse } from "next/server";

const projects = [
  {
    id: "1",
    title: "Bank Churn Analysis Dashboard",
    image: "/images/bank_churn_dashboard.jpg",
    description:
      "Power BI dashboard analyzing 10,000 bank customers to identify churn patterns and high-risk segments.",
    slug: "bank-churn-dashboard",
    tags: ["Power BI", "Customer Analytics", "DAX", "Data Visualization"],
    date: "2023-11-05",
    githubUrl: "https://github.com/BLESSEDIOG/bank-churn-analysis",
  },
  {
    id: "2",
    title: "Rocket Launch Dashboard",
    image: "/images/rocket_dashboard.png",
    description:
      "Interactive Power BI dashboard analyzing 4,600+ global rocket launches to reveal space mission trends.",
    slug: "rocket-launch-dashboard",
    tags: ["Power BI", "Space Analytics", "Historical Trends", "Dashboard"],
    date: "2024-01-20",
    githubUrl: "https://github.com/BLESSEDIOG/rocket-launch-analysis",
  },
  {
    id: "3",
    title: "Car Advertisement Insights Dashboard",
    image: "/images/car_ads_dashboard.png",
    description:
      "Power BI dashboard analyzing 9,000+ car listings to reveal Pakistan's automotive market trends.",
    slug: "car-advertisement-insights",
    tags: ["Power BI", "Market Analysis", "Automotive", "Data Visualization"],
    date: "2023-12-15",
    githubUrl: "https://github.com/BLESSEDIOG/car-advertisement-analysis",
  },
  {
    id: "4",
    title: "Hotel Booking Analysis Dashboard",
    image: "/images/hotel_booking_dashboard.jpg",
    description:
      "Interactive dashboard analyzing 266K hotel bookings and $14M revenue across 614 properties.",
    slug: "hotel-booking-dashboard",
    tags: ["Power BI", "Hospitality Analytics", "Revenue Analysis", "DAX"],
    date: "2024-02-10",
    githubUrl: "https://github.com/BLESSEDIOG/hotel-booking-analysis",
  },
  {
    id: "5",
    title: "Bike Sales Analysis Dashboard",
    image: "/images/bike_sales_dashboard.jpg",
    description:
      "Power BI dashboard analyzing $95M in bike sales to identify profitable products and customer segments.",
    slug: "bike-sales-dashboard",
    tags: [
      "Power BI",
      "Retail Analytics",
      "Profit Analysis",
      "Sales Visualization",
    ],
    date: "2024-03-15",
    githubUrl: "https://github.com/BLESSEDIOG/bike-sales-analysis",
  },
];

export async function GET() {
  return NextResponse.json(projects);
}
