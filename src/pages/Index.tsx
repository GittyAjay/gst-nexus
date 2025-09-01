import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { UpcomingDeadlines } from "@/components/dashboard/UpcomingDeadlines";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your GST compliance status.
          </p>
        </div>
        
        <StatsCards />
        
        <div className="grid gap-6 md:grid-cols-2">
          <UpcomingDeadlines />
          <RecentActivity />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
