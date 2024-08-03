export const getQuestionsBySurveyAndChapter = async(surveyId, chapterId) => {
    try {
        const response = await fetch(`http://localhost:5501/questions?chapter_id=${chapterId}&survey_id=${surveyId}`);
        const questions = await response.json();
        return questions;
    } catch (error) {
        console.error(error);
    }

}