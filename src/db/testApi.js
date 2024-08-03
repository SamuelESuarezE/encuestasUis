import express from 'express';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5501;

// Assume your JSON data is stored in a file named 'data.json'
const dataPath = join(__dirname, 'combined_questions_responses.json');

app.get('/questions', async (req, res) => {
    try {
        const { chapter_id, survey_id } = req.query;
        
        // Read the JSON file
        const data = await fs.readFile(dataPath, 'utf8');
        const jsonData = JSON.parse(data);
        
        // Filter the questions based on chapter_id and survey_id
        const filteredQuestions = jsonData.questions.filter(question => 
            question.chapter_id == chapter_id && question.survey_id == survey_id
        );
        
        res.json(filteredQuestions);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});