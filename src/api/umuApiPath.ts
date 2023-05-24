const base = {
    login:"/proxy/passport/ajax/account/login", // POST
    getExamid:"/proxy/session/quiz/", // GET
    getQuestionList:"/proxy/napi/v1/quiz/question-list", //GET
    getAnswer:"/proxy/napi/v1/quiz/question-right-answer", //GET
    startExam:"/proxy/megrez/exam/v1/startExam", //POST
    endExam:"/proxy/megrez/exam/v1/endExam", //POST
    saveAnswer:"/proxy/megrez/exam/v1/saveAnswer", //POST
    retakeExam:"/proxy/api/exam/takeexamagain" //POST
}

export default base;