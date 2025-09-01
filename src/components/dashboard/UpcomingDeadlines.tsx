import { Calendar, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const deadlines = [
  {
    id: 1,
    client: "ABC Electronics",
    type: "GSTR-1",
    dueDate: "2024-01-11",
    daysLeft: 3,
    priority: "high",
    amount: "₹2,45,000"
  },
  {
    id: 2,
    client: "XYZ Fashions", 
    type: "GSTR-3B",
    dueDate: "2024-01-20",
    daysLeft: 12,
    priority: "medium",
    amount: "₹1,85,000"
  },
  {
    id: 3,
    client: "PQR Industries",
    type: "GSTR-1",
    dueDate: "2024-01-15",
    daysLeft: 7,
    priority: "medium",
    amount: "₹3,20,000"
  },
  {
    id: 4,
    client: "LMN Services",
    type: "GSTR-3B",
    dueDate: "2024-01-25",
    daysLeft: 17,
    priority: "low",
    amount: "₹95,000"
  }
];

export function UpcomingDeadlines() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Upcoming Deadlines
        </CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deadlines.map((deadline) => (
            <div
              key={deadline.id}
              className="flex items-center justify-between p-3 rounded-lg border hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  deadline.priority === 'high' 
                    ? 'bg-destructive' 
                    : deadline.priority === 'medium' 
                    ? 'bg-warning' 
                    : 'bg-success'
                }`} />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-medium">{deadline.client}</p>
                    <Badge variant="outline" className="text-xs">
                      {deadline.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {deadline.daysLeft} days left
                    </span>
                    <span>Due: {deadline.dueDate}</span>
                    <span className="font-medium">{deadline.amount}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {deadline.priority === 'high' && (
                  <AlertCircle className="h-4 w-4 text-destructive" />
                )}
                <Button size="sm" variant="ghost">
                  Process
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}