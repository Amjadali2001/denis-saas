import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Building, MapPin, Phone, Mail, Globe } from "lucide-react";

export default function CompanyPage() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-20 w-20 rounded-lg bg-primary/10 flex items-center justify-center">
            <Building className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Company Profile</h3>
            <p className="text-sm text-muted-foreground">
              Manage your company information and settings
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="company-name">Company Name</Label>
            <Input id="company-name" placeholder="Enter company name" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <div className="flex gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <Input id="address" placeholder="Enter company address" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex gap-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <Input id="phone" placeholder="Enter phone number" />
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="email">Business Email</Label>
              <div className="flex gap-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <Input id="email" type="email" placeholder="Enter business email" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="website">Website</Label>
              <div className="flex gap-2">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <Input id="website" placeholder="Enter website URL" />
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Business Hours</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <Label>Working Days</Label>
            <div className="flex gap-2 flex-wrap">
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                <Button
                  key={day}
                  variant="outline"
                  className="min-w-[60px]"
                  data-selected="true"
                >
                  {day}
                </Button>
              ))}
              {["Sat", "Sun"].map((day) => (
                <Button
                  key={day}
                  variant="outline"
                  className="min-w-[60px] opacity-50"
                >
                  {day}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-2">
            <Label>Working Hours</Label>
            <div className="flex items-center gap-2">
              <Input type="time" defaultValue="09:00" />
              <span>to</span>
              <Input type="time" defaultValue="17:00" />
            </div>
          </div>
        </div>
      </Card>

      <Separator />

      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}