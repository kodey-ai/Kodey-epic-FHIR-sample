import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/allergy_intolerance_search', async (req, res) => {
    const { patient, clinicalStatus } = req.query;
    try {
        const response = await axios.get(`${process.env.FHIR_BASE_URL}/allergyintolerance?patient=${patient}&clinical-status=${clinicalStatus}`, {
            headers: {
                'Authorization': `Bearer ${process.env.FHIR_API_TOKEN}`,
                'Content-Type': 'application/fhir+json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching allergy intolerance data');
    }
});

app.get('/index', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
