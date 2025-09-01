import { FileText, Upload, Download, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    type: "upload",
    client: "ABC Electronics",
    action: "Uploaded sales data",
    time: "2 hours ago",
    status: "completed",
    icon: Upload
  },
  {
    id: 2,
    type: "report",
    client: "XYZ Fashions",
    action: "Generated GSTR-1 report",
    time: "4 hours ago", 
    status: "completed",
    icon: FileText
  },
  {
    id: 3,
    type: "download",
    client: "PQR Industries",
    action: "Downloaded reconciliation report",
    time: "1 day ago",
    status: "completed",
    icon: Download
  },
  {
    id: 4,
    type: "filing",
    client: "LMN Services",
    action: "GST return filed successfully",
    time: "1 day ago",
    status: "completed",
    icon: CheckCircle
  },
  {
    id: 5,
    type: "upload",
    client: "DEF Trading",
    action: "Uploaded purchase data",
    time: "2 days ago",
    status: "processing",
    icon: Upload
  }
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <activity.icon className="w-4 h-4 text-primary" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">
                    {activity.client}
                  </p>
                  <Badge 
                    variant={activity.status === 'completed' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {activity.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.action}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}