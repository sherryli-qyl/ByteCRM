import queryString from 'query-string';

import { del, get, put, post } from './axios';

const API_COURSE_URL = '/courses';
const mockImage = 'https://sdtimes.com/wp-content/uploads/2018/03/jW4dnFtA_400x400.jpg';
const getApiCourseUrlWithId = id => `${API_COURSE_URL}/${id}`;

export const fetchCourses = (pageNum = 1, pageSize = 10, query) => {
    const stringified = queryString.stringify({
        pageSize,
        query,
        page: pageNum,
    });
    const url = `${API_COURSE_URL}?${stringified}`;

    return get(url).then(res => ({
        courses: res.data.data.map(course => ({ ...course, image: mockImage })),
        pagination: res.data.pagination,
    }));
};
    

export const fetchCourseById = id => {
    const url = getApiCourseUrlWithId(id);
    return get(url).then(res => ({ ...res.data.data, image: mockImage }));
};

export const saveCourseById = (id, course) => {
    const url = getApiCourseUrlWithId(id);
    return put(url, course);
};

export const createCourse = course => {
    return post(API_COURSE_URL, course).then(res => res.data.data);
};

export const deleteCourseById = id => {
    const url = getApiCourseUrlWithId(id);
    return del(url);
};