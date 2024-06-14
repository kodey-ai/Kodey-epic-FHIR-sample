import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { getOAuthToken } from './utils';

dotenv.config();

const app = express();

app.get('/allergy_intolerance_search', async (req, res) => {
    const token = await getOAuthToken();
    const patientId = req.query.patientId;
    const clinicalStatus = req.query.clinicalStatus;
    try {
        const response = await axios.get(`${process.env.FHIR_BASE_URL}/allergyintolerance?patient=${patientId}&clinical-status=${clinicalStatus}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
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
