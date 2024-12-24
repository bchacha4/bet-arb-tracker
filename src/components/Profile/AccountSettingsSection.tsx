import { useState } from 'react';
import { Button } from "@/components/ui/button";
import EmailUpdateModal from './EmailUpdateModal';
import PasswordUpdateModal from './PasswordUpdateModal';

interface AccountSettingsSectionProps {
  userEmail?: string;
}

const AccountSettingsSection = ({ userEmail }: AccountSettingsSectionProps) => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Account Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">Email</h4>
              <p className="text-sm text-gray-500">{userEmail}</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setIsEmailModalOpen(true)}
            >
              Change Email
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">Password</h4>
              <p className="text-sm text-gray-500">••••••••</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setIsPasswordModalOpen(true)}
            >
              Change Password
            </Button>
          </div>
        </div>
      </div>

      <EmailUpdateModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        currentEmail={userEmail}
      />
      
      <PasswordUpdateModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      />
    </div>
  );
};

export default AccountSettingsSection;