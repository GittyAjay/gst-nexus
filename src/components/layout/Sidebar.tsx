import { useState } from "react";
import { 
  LayoutDashboard, 
  Users, 
  Upload, 
  FileText, 
  Settings, 
  BarChart3,
  HelpCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    isActive: true
  },
  {
    title: "Clients",
    icon: Users,
    href: "/clients"
  },
  {
    title: "Upload Data",
    icon: Upload,
    href: "/upload"
  },
  {
    title: "Reports",
    icon: FileText,
    href: "/reports"
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics"
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings"
  },
  {
    title: "Help",
    icon: HelpCircle,
    href: "/help"
  }
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={cn(
      "relative flex flex-col border-r bg-background transition-all duration-300",
      collapsed ? "w-16" : "w-64",
      className
    )}>
      <div className="flex h-16 items-center justify-between px-4 border-b">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GST</span>
            </div>
            <span className="font-bold text-lg">Nexus</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      <nav className="flex-1 space-y-1 p-4">
        {sidebarItems.map((item) => (
          <Button
            key={item.href}
            variant={item.isActive ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start gap-3 h-10",
              collapsed && "px-2 justify-center"
            )}
          >
            <item.icon className="h-4 w-4 flex-shrink-0" />
            {!collapsed && <span>{item.title}</span>}
          </Button>
        ))}
      </nav>
      
      <div className="p-4 border-t">
        <div className={cn(
          "rounded-lg bg-gradient-primary p-4 text-white",
          collapsed && "p-2"
        )}>
          {!collapsed ? (
            <>
              <h4 className="font-semibold text-sm mb-1">Upgrade to Pro</h4>
              <p className="text-xs text-white/80 mb-3">
                Get unlimited clients and advanced features
              </p>
              <Button size="sm" variant="secondary" className="w-full">
                Upgrade Now
              </Button>
            </>
          ) : (
            <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
              <span className="text-xs">⭐</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}