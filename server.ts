import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory storage for contacts
  const contacts: any[] = [];

  // API Routes
  app.get("/api/contacts", (req, res) => {
    res.json(contacts);
  });

  app.post("/api/contact", async (req, res) => {
    const { name, company, phone, email, message } = req.body;
    const newContact = { 
      id: Date.now(),
      name, 
      company, 
      phone,
      email, 
      message, 
      timestamp: new Date().toISOString() 
    };
    
    contacts.push(newContact);
    console.log("New Contact Submission:", newContact);

    // Forward to Google Sheets if WEBAPP_URL is configured
    const webappUrl = process.env.GOOGLE_SHEET_WEBAPP_URL;
    if (webappUrl) {
      try {
        await fetch(webappUrl, {
          method: "POST",
          body: JSON.stringify(newContact),
          headers: { "Content-Type": "application/json" }
        });
        console.log("Successfully sent to Google Sheets");
      } catch (error) {
        console.error("Failed to send to Google Sheets:", error);
        // We still return success to the user as we saved it in memory
      }
    }
    
    res.json({ 
      success: true, 
      message: "상담 신청이 완료되었습니다. 확인 후 연락드리겠습니다." 
    });
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
