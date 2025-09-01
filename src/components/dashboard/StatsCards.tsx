import { TrendingUp, Users, FileText, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total Clients",
    value: "24",
    change: "+2 this month",
    changeType: "positive",
    icon: Users,
    color: "text-primary"
  },
  {
    title: "Pending Returns",
    value: "8",
    change: "Due in 5 days",
    changeType: "warning",
    icon: AlertTriangle,
    color: "text-warning"
  },
  {
    title: "Reports Generated",
    value: "156",
    change: "+12 this week",
    changeType: "positive",
    icon: FileText,
    color: "text-success"
  },
  {
    title: "Total Revenue",
    value: "₹12.4L",
    change: "+18% from last month",
    changeType: "positive",
    icon: TrendingUp,
    color: "text-info"
  }
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${
              stat.changeType === 'positive' 
                ? 'text-success' 
                : stat.changeType === 'warning' 
                ? 'text-warning' 
                : 'text-muted-foreground'
            }`}>
              {stat.change}
            </p>
          </CardContent>
          <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${
            stat.changeType === 'positive' 
              ? 'from-success/20 to-success' 
              : stat.changeType === 'warning' 
              ? 'from-warning/20 to-warning' 
              : 'from-muted/20 to-muted'
          }`} />
        </Card>
      ))}
    </div>
  );
}