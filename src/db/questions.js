export const getQuestionsBySurveyAndChapter = async(surveyId, chapterId) => {
    try {
        const response = await fetch(`https://apiencuestas.onrender.com/questions?chapter_id=${chapterId}&survey_id=${surveyId}`);
        const questions = await response.json();
        return questions;
    } catch (error) {
        console.error(error);
    }

}