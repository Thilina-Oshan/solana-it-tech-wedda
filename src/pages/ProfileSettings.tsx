
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Mail, Lock, Bell, Shield } from "lucide-react";

const ProfileSettings = () => {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    college: "Tech University",
    course: "Computer Science",
    year: "Final Year"
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveProfile = () => {
    console.log("Saving profile:", profileData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tech-text-gradient mb-4">Profile Settings</h1>
            <p className="text-xl text-gray-700">Manage your account settings and preferences.</p>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <User className="w-6 h-6 text-tech-blue mr-2" />
                  <h3 className="text-xl font-bold text-tech-dark">Personal Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleProfileChange}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleProfileChange}
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">College/University</label>
                    <Input
                      name="college"
                      value={profileData.college}
                      onChange={handleProfileChange}
                      placeholder="Enter your institution"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
                    <Input
                      name="course"
                      value={profileData.course}
                      onChange={handleProfileChange}
                      placeholder="Enter your course"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                    <Input
                      name="year"
                      value={profileData.year}
                      onChange={handleProfileChange}
                      placeholder="Enter your year"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button onClick={handleSaveProfile} className="bg-tech-orange hover:bg-tech-orange/90 text-white">
                    Save Changes
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="account" className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <Mail className="w-6 h-6 text-tech-blue mr-2" />
                  <h3 className="text-xl font-bold text-tech-dark">Account Settings</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Danger Zone</h4>
                    <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
                      <div>
                        <h5 className="font-medium text-red-900">Delete Account</h5>
                        <p className="text-sm text-red-700">Once you delete your account, there is no going back.</p>
                      </div>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <Bell className="w-6 h-6 text-tech-blue mr-2" />
                  <h3 className="text-xl font-bold text-tech-dark">Notification Preferences</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Email Notifications</h4>
                      <p className="text-sm text-gray-600">Receive updates about your projects and consultations</p>
                    </div>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Push Notifications</h4>
                      <p className="text-sm text-gray-600">Get instant notifications on your device</p>
                    </div>
                    <input type="checkbox" className="toggle" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Marketing Emails</h4>
                      <p className="text-sm text-gray-600">Receive news and updates about Tech Wadda</p>
                    </div>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <Shield className="w-6 h-6 text-tech-blue mr-2" />
                  <h3 className="text-xl font-bold text-tech-dark">Security Settings</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Change Password</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <Input type="password" placeholder="Enter current password" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <Input type="password" placeholder="Enter new password" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                        <Input type="password" placeholder="Confirm new password" />
                      </div>
                      <Button className="bg-tech-blue hover:bg-tech-blue/90 text-white">
                        Update Password
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t">
                    <h4 className="font-medium text-gray-900 mb-4">Two-Factor Authentication</h4>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h5 className="font-medium text-gray-900">Enable 2FA</h5>
                        <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfileSettings;
