import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Bell, Mail, Clock, Globe } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
            <Bell className="h-5 w-5" />
            Notifications
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="desktop-notifications">Desktop Notifications</Label>
              <Switch id="desktop-notifications" defaultChecked />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5" />
            Time Tracking
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-pause">Auto-pause after inactivity</Label>
              <Switch id="auto-pause" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="round-time">Round time entries</Label>
              <Switch id="round-time" defaultChecked />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
            <Globe className="h-5 w-5" />
            Language & Region
          </h3>
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="language">Language</Label>
              <select
                id="language"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
              >
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="fr">Français</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="timezone">Timezone</Label>
              <select
                id="timezone"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
              >
                <option value="utc">UTC</option>
                <option value="est">Eastern Time</option>
                <option value="cet">Central European Time</option>
              </select>
            </div>
          </div>
        </Card>
      </div>

      <Separator />

      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}