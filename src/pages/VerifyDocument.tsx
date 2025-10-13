import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample certificate database - replace with your Excel/Google Sheets API
const certificateDatabase = [
  {
    id: "OBW2024001",
    name: "John Doe",
    program: "Full Stack Web Development",
    date: "2024-01-15",
    status: "Valid"
  },
  {
    id: "OBW2024002",
    name: "Jane Smith",
    program: "Data Science Bootcamp",
    date: "2024-02-20",
    status: "Valid"
  },
  {
    id: "OBW2024003",
    name: "Rahul Kumar",
    program: "Python Programming",
    date: "2024-03-10",
    status: "Valid"
  },
  {
    id: "OBW2024004",
    name: "Priya Singh",
    program: "Digital Marketing",
    date: "2024-03-25",
    status: "Valid"
  },
  {
    id: "OBW2024005",
    name: "Michael Chen",
    program: "UI/UX Design",
    date: "2024-04-05",
    status: "Valid"
  },
  {
    id: "OBW2024006",
    name: "Sarah Williams",
    program: "Cloud Computing",
    date: "2024-04-18",
    status: "Valid"
  },
  {
    id: "OBW2024007",
    name: "Amit Patel",
    program: "Machine Learning",
    date: "2024-05-02",
    status: "Valid"
  },
  {
    id: "OBW2024008",
    name: "Emily Johnson",
    program: "React Development",
    date: "2024-05-15",
    status: "Valid"
  },
  {
    id: "OBW2024009",
    name: "David Brown",
    program: "Cybersecurity",
    date: "2024-06-08",
    status: "Valid"
  },
  {
    id: "OBW2024010",
    name: "Anjali Sharma",
    program: "Mobile App Development",
    date: "2024-06-22",
    status: "Valid"
  },
  // Add more certificates here or connect to external data source
];

const VerifyDocument = () => {
  const [certificateId, setCertificateId] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isSearched, setIsSearched] = useState(false);

  const handleVerify = () => {
    setIsSearched(true);
    const result = certificateDatabase.find(
      (cert) => cert.id.toLowerCase() === certificateId.toLowerCase().trim()
    );
    setSearchResult(result || null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleVerify();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-neon-green via-emerald to-lime bg-clip-text text-transparent">
              OnboardWorks Document Verification
            </h1>
            <p className="text-base text-muted-foreground mb-2">
              Verify your certificate authenticity using the unique Certificate ID.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Enter your Certificate ID below to verify if your certificate is officially issued by OnboardWorks. 
              This tool helps maintain transparency and trust in our certification process.
            </p>
          </div>

          {/* Search Section */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Input
                type="text"
                placeholder="Enter Certificate ID (e.g., OBW2024001)"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button
                onClick={handleVerify}
                className="bg-gradient-to-r from-neon-green to-emerald hover:from-emerald hover:to-lime text-black px-6"
              >
                <Search className="mr-2 h-4 w-4" />
                Verify
              </Button>
            </div>

            {/* Results Section */}
            {isSearched && (
              <div className="mt-6">
                {searchResult ? (
                  <div className="bg-gradient-to-br from-emerald/10 to-neon-green/10 border border-neon-green/30 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="h-8 w-8 text-neon-green mr-3" />
                      <h3 className="text-xl font-semibold text-neon-green">
                        Valid Certificate
                      </h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <span className="font-semibold text-foreground min-w-[140px]">Certificate ID:</span>
                        <span className="text-muted-foreground">{searchResult.id}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <span className="font-semibold text-foreground min-w-[140px]">Candidate Name:</span>
                        <span className="text-muted-foreground">{searchResult.name}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <span className="font-semibold text-foreground min-w-[140px]">Program:</span>
                        <span className="text-muted-foreground">{searchResult.program}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <span className="font-semibold text-foreground min-w-[140px]">Completion Date:</span>
                        <span className="text-muted-foreground">{searchResult.date}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <span className="font-semibold text-foreground min-w-[140px]">Status:</span>
                        <span className="text-neon-green font-semibold">✅ {searchResult.status} (Issued by OnboardWorks)</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
                    <div className="flex items-center mb-2">
                      <XCircle className="h-8 w-8 text-destructive mr-3" />
                      <h3 className="text-xl font-semibold text-destructive">
                        Invalid Certificate ID
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The certificate ID you entered was not found in our database. 
                      Please check the ID and try again.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Contact Support Section */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Need help verifying your certificate?
            </p>
            <Button
              variant="outline"
              className="border-neon-green/30 text-neon-green hover:bg-neon-green/10"
              asChild
            >
              <a href="https://wa.me/9882287863?text=I%20need%20help%20verifying%20my%20certificate" target="_blank" rel="noopener noreferrer">
                Contact Support
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VerifyDocument;
