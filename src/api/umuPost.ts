import umuPost from "../utils/post"
import path from "./umuApiPath"

const postapi = {
    async login(username:string,passwd:string){
        const options = {
            url: path.login,
            data: {
                username: username,
                passwd: passwd
            }
        };
        return await umuPost.request(options);
    },
    startExam(element_id: number,exam_submit_id: number){
        const options = {
            url: path.startExam,
            // headers: {
            //     Cookie: 'umuU=' + umuU + ';JSESSID=' + JSESSID,
            // },
            data: {
                session_id: element_id,
                student_id: '0',
                exam_submit_id: exam_submit_id
            }
        };
        return umuPost.request(options);
    },
    endExam(element_id:number,exam_submit_id:number){
        const options = {
            url: path.endExam,
            data: {
                session_id: element_id,
                status: '2',
                name: '',
                submit_type: '2',
                student_id: 0,
                exam_submit_id: exam_submit_id
            }
        };
        return umuPost.request(options);
    },
    retakeExam(element_id: number){
        const options = {
            url: path.retakeExam,
            data: {session_id: element_id}
        };
        return umuPost.request(options);
    },
    saveAnswer(element_id: number,answerlist: any,student_id: number,exam_submit_id: number){
        const options = {
            url: path.saveAnswer,
            data: {
                session_id: element_id,
                answer_list: answerlist,
                student_id: student_id,
                exam_submit_id: exam_submit_id
            }
        };
        return umuPost.request(options);
    }
}

export default postapi;