//app_service.js

import RequestService from './base_service';

import serverConfig from '../config';
const serviceUrl = serverConfig.server.main_url;

import { ajax } from './base_service';


function makeUrl(url) {
    if(url){
        return serviceUrl + url
    }
    return serviceUrl;

}

export function getTaskSubjectList(keywords,city,page_size,curr_location) {

    return new Promise((resolve,reject) => {
        ajax({
            url:makeUrl('/search2015/search'),
            data:{
                keywords: keywords,
                city: city,
                page_size: page_size,
                curr_location: curr_location
            },
            method:'GET',
            success:function (res) {
                resolve(res);
            },
            fail:function (err) {
                reject(err);
            }

        })
    })
}

export function findTaskSubjectById(subjectId) {
    return new Promise((resolve,reject) => {
        ajax({
            url:makeUrl('/task/findTaskSubjectById'),
            data:{
                subjectId
            },
            method:'POST',
            success:function (res) {
                resolve(res);
            },
            fail:function (err) {
                reject(err);
            }

        })
    })

}



export function updateTaskSubject(subject,content,id,userId) {
    return new Promise((resolve,reject) => {
        ajax({
            url:makeUrl('/task/updateTaskSubject'),
            data:{
                subject,
                content,
                id,
                userId
            },
            method:'POST',
            success:function (res) {
                resolve(res);
            },
            fail:function (err) {
                reject(err);
            }

        })
    });
    // return RequestService.post(
    //     makeUrl('/deleteTaskSubject'),
    //     {
    //         subjectId: subjectId
    //     }
    // );
    // return Promise.resolve({
    //     "errorCode": "success",
    //     "errorMsg": null,
    //     "result": null
    // })
}
export function deleteTaskSubject(subjectId) {
    return new Promise((resolve,reject) => {
        ajax({
            url:makeUrl('/task/deleteTaskSubject'),
            data:{
                subjectId: subjectId
            },
            method:'POST',
            success:function (res) {
                resolve(res);
            },
            fail:function (err) {
                reject(err);
            }

        })
    });
    // return RequestService.post(
    //     makeUrl('/deleteTaskSubject'),
    //     {
    //         subjectId: subjectId
    //     }
    // );
    // return Promise.resolve({
    //     "errorCode": "success",
    //     "errorMsg": null,
    //     "result": null
    // })
}

export function saveTaskSubject(subject,content,userid) {
    return new Promise((resolve,reject) => {
        ajax({
            url:makeUrl('/task/saveTaskSubject'),
            data:{
                subject,
                content,
                userid
            },
            method:'POST',
            success:function (res) {
                resolve(res);
            },
            fail:function (err) {
                reject(err);
            }

        })
    });
}

export function getTaskFinishedList(taskSubjectId,page,rows) {
    return new Promise((resolve,reject) => {
        ajax({
            url:makeUrl('/task/getTaskFinishedList'),
            data:{
                taskSubjectId: taskSubjectId,
                page: page || 1,
                rows: rows || 10
            },
            method:'POST',
            success:function (res) {
                resolve(res);
            },
            fail:function (err) {
                reject(err);
            }
        })
    });
}

export function findTaskFinishedById(id) {
    return new Promise((resolve,reject) => {
        ajax({
            url:makeUrl('/task/findTaskFinishedById'),
            data:{
                id
            },
            method:'POST',
            success:function (res) {
                resolve(res);
            },
            fail:function (err) {
                reject(err);
            }

        })
    })

}


export function saveTaskFinished(content,taskSubjectId,userId) {
    return new Promise((resolve,reject) => {
        ajax({
            url:makeUrl('/task/saveTaskFinished'),
            data:{
                content,
                taskSubjectId,
                userId
            },
            method:'POST',
            success:function (res) {
                resolve(res);
            },
            fail:function (err) {
                reject(err);
            }

        })
    })
}


export function deleteTaskFinished(finishedId) {
    return new Promise((resolve,reject) => {
        ajax({
            url:makeUrl('/task/deleteTaskFinished'),
            data:{
                finishedId
            },
            method:'POST',
            success:function (res) {
                resolve(res);
            },
            fail:function (err) {
                reject(err);
            }

        })
    })
}


export function saveFinishedComment(content,taskFinishedId) {
    return new Promise((resolve,reject) => {
        ajax({
            url:makeUrl('/task/saveFinishedComment'),
            data:{
                content,
                taskFinishedId
            },
            method:'POST',
            success:function (res) {
                resolve(res);
            },
            fail:function (err) {
                reject(err);
            }

        })
    })
}



export function deleteFinishedComment(id) {
    return new Promise((resolve,reject) => {
        ajax({
            url:makeUrl('/task/deleteFinishedComment'),
            data:{
                id
            },
            method:'POST',
            success:function (res) {
                resolve(res);
            },
            fail:function (err) {
                reject(err);
            }

        })
    })
}


export function saveFinishedPraise(taskFinishedId,userId) {
    return new Promise((resolve,reject) => {
        ajax({
            url:makeUrl('/task/saveFinishedPraise'),
            data:{
                taskFinishedId,
                userId
            },
            method:'POST',
            success:function (res) {
                resolve(res);
            },
            fail:function (err) {
                reject(err);
            }

        })
    })
}


export function deleteFinishedPraise(id) {
    return new Promise((resolve,reject) => {
        ajax({
            url:makeUrl('/task/deleteFinishedPraise'),
            data:{
                id
            },
            method:'POST',
            success:function (res) {
                resolve(res);
            },
            fail:function (err) {
                reject(err);
            }

        })
    })
}
