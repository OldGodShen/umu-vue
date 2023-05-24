import umuGet from "../utils/get"
import path from "./umuApiPath"

const getapi = {
    getQuestionList(element_id:number){
        const options = {
            url: path.getQuestionList,
            params: {_type: '1', element_id: element_id},
            //headers: {Cookie: 'umuU=' + umuU + ';JSESSID=' + JSESSID}
        };
        return umuGet.request(options)
    },
    getAnswer(element_id:number,question_id:any){
        const options = {
            url: path.getAnswer,
            params: {_type: '1', element_id: element_id, question_ids: question_id},
            //headers: {Cookie: 'umuU=' + umuU + ';JSESSID=' + JSESSID}
        };
        return umuGet.request(options)
    },
    getElementId(quiz:string){
        const options = {
            url: path.getExamid + quiz,
            //headers: {Cookie: 'umuU=' + umuU + ';JSESSID=' + JSESSID}
        };
        return umuGet.request(options)
    }
}

export default getapi;