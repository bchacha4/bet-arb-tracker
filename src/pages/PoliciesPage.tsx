import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const PoliciesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6 hover:bg-gray-100">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        
        <div className="space-y-12">
          {/* Terms of Service Section */}
          <section>
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="text-sm text-gray-600 mb-4">Effective Date: 01/01/2025</p>
            <p className="mb-6">Welcome to Bettor-IQ ("we," "our," or "us"). By accessing or using our website and services, you agree to the following Terms of Service. Please read these terms carefully before using our tools, including Arbitrage Tracker and Odds Scout.</p>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p>By accessing or using Bettor-IQ's website and services, you acknowledge that you have read, understood, and agree to these Terms of Service. If you do not agree to these terms, do not use our website or services.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">2. Eligibility</h2>
                <p>Our services are intended for individuals who are at least 21 years old and legally allowed to gamble in their jurisdiction. By using our services, you confirm that you meet these eligibility requirements.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">3. Services Provided</h2>
                <p>Bettor-IQ offers tools such as:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Arbitrage Tracker: Identifies arbitrage betting opportunities across sportsbooks.</li>
                  <li>Odds Scout: Provides comparative data on player prop bets to help users find the best odds.</li>
                </ul>
                <p className="mt-2">Our services are for informational purposes only. We do not facilitate actual betting or guarantee outcomes.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">4. Scheduled Updates</h2>
                <p>Due to current limitations, we do not offer real-time updates. However, we plan to implement this feature in the future to enhance user experience. While we strive to provide timely and accurate data, updates occur on an automated schedule approximately every 25 minutes. Bettor-IQ is not liable for discrepancies or outdated information.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">5. User Responsibilities</h2>
                <ul className="list-disc ml-6">
                  <li>Ensure your gambling activities comply with local laws and regulations.</li>
                  <li>Use our tools for personal, non-commercial purposes only.</li>
                  <li>Do not misuse our services for fraudulent or illegal activities.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">6. Intellectual Property</h2>
                <p>All content on Bettor-IQ, including tools, graphics, and code, is the intellectual property of Bettor-IQ. Unauthorized use, reproduction, or distribution is prohibited.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
                <p>Bettor-IQ is not responsible for any financial losses, data inaccuracies, or other issues arising from the use of our tools. Users assume all risks associated with their gambling decisions.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">8. Modifications</h2>
                <p>We reserve the right to modify these Terms of Service at any time. Continued use of our services after changes are made constitutes acceptance of the revised terms.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">9. Contact</h2>
                <p>For questions or concerns, contact us at support@bettor-iq.com.</p>
              </div>
            </div>
          </section>
          
          <Separator className="my-12" />
          
          {/* Privacy Policy Section */}
          <section>
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-sm text-gray-600 mb-4">Effective Date: 01/01/2025</p>
            <p className="mb-6">At Bettor-IQ, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.</p>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
                <ul className="list-disc ml-6">
                  <li>Personal Information: When you create an account or contact us, we may collect your name, email address, and other details.</li>
                  <li>Usage Data: We collect information about how you use our website, including your IP address, browser type, and activity.</li>
                  <li>Cookies: We use cookies to improve your experience and analyze site performance.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul className="list-disc ml-6">
                  <li>Provide and improve our services.</li>
                  <li>Respond to inquiries and support requests.</li>
                  <li>Analyze website traffic and user behavior.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">3. Data Sharing</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. However, we may share data with trusted partners to:</p>
                <ul className="list-disc ml-6">
                  <li>Improve our tools and services.</li>
                  <li>Comply with legal obligations or enforce our Terms of Service.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
                <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc ml-6">
                  <li>Access the personal information we hold about you.</li>
                  <li>Request corrections to inaccurate information.</li>
                  <li>Opt out of certain data collection practices, such as cookies.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">6. Third-Party Links</h2>
                <p>Our website may contain links to third-party sites, such as sportsbooks. We are not responsible for the privacy practices or content of these sites.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">7. Updates to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Continued use of our website after updates are posted constitutes acceptance of the revised policy.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">8. Contact</h2>
                <p>For questions or concerns about this Privacy Policy, contact us at support@bettor-iq.com.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliciesPage;