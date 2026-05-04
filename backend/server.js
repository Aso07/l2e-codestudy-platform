const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/run", async (req, res) => {
    const { code } = req.body;

    try {
        const response = await axios.post(
            "https://emkc.org/api/v2/piston/execute",
            {
                language: "go",
                version: "1.20.0",
                files: [{ content: code }]
            }
        );

        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Execution failed" });
    }
});

app.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});