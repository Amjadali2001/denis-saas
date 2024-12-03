"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";
import { Settings, Building, Users, Laptop2, Network, Receipt } from "lucide-react";

const settingsTabs = [
  {
    value: "general",
    label: "General Settings",
    icon: Settings,
    href: "/settings"
  },
  {
    value: "company",
    label: "Company",
    icon: Building,
    href: "/company"
  },
  {
    value: "roles",
    label: "Role Templates",
    icon: Users,
    href: "/settings/role-templates"
  },
  {
    value: "devices",
    label: "Devices",
    icon: Laptop2,
    href: "/devices"
  },
  {
    value: "port",
    label: "Port",
    icon: Network,
    href: "/port"
  },
  {
    value: "invoice",
    label: "Invoice",
    icon: Receipt,
    href: "/settings/invoice"
  }
];

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  
  const currentTab = settingsTabs.find(tab => 
    pathname.includes(tab.value) || 
    (pathname === "/settings" && tab.value === "general") ||
    (pathname === "/company" && tab.value === "company") ||
    (pathname === "/devices" && tab.value === "devices") ||
    (pathname === "/port" && tab.value === "port")
  )?.value || "general";

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your organization settings and preferences
        </p>
      </div>

      <Tabs value={currentTab} className="space-y-6">
        <TabsList className="h-auto flex flex-wrap gap-2 bg-transparent p-0">
          {settingsTabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              onClick={() => router.push(tab.href)}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2 px-4 py-2"
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={currentTab} className="border rounded-lg p-6">
          {children}
        </TabsContent>
      </Tabs>
    </div>
  );
}