import { Building2 } from "lucide-react";

const TrustedLogos = () => (
  <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
    {["Microsoft", "Salesforce", "Adobe", "Slack", "Shopify", "Stripe"].map(
      (company) => (
        <div
          key={company}
          className="flex items-center space-x-2 hover:opacity-100 transition-opacity"
        >
          <Building2 className="w-6 h-6" />
          <span className="font-semibold">{company}</span>
        </div>
      )
    )}
  </div>
);

export default TrustedLogos;
