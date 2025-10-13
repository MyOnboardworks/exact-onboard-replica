// Google Sheets configuration
const SHEET_ID = "1fIT1lKGZTIn5lVEdW6XXSiD3dr5W67F2IkMlzYKQlcw";
const SHEET_NAME = "Sheet1"; // Change this if your sheet has a different name

interface Certificate {
  id: string;
  name: string;
  program: string;
  date: string;
  status: string;
}

export async function fetchCertificatesFromGoogleSheets(): Promise<Certificate[]> {
  try {
    // Use Google Sheets CSV export (works if sheet is public)
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${SHEET_NAME}`;
    
    const response = await fetch(url);
    const csvText = await response.text();
    
    // Parse CSV
    const lines = csvText.split('\n');
    const certificates: Certificate[] = [];
    
    // Skip header row (index 0)
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // Parse CSV line (handle quoted values)
      const values = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
      const cleanValues = values.map(v => v.replace(/^"|"$/g, '').trim());
      
      if (cleanValues.length >= 4) {
        certificates.push({
          id: cleanValues[0] || "",
          name: cleanValues[1] || "",
          program: cleanValues[2] || "",
          date: cleanValues[3] || "",
          status: cleanValues[4] || "Valid"
        });
      }
    }
    
    return certificates;
  } catch (error) {
    console.error("Error fetching certificates from Google Sheets:", error);
    return [];
  }
}
