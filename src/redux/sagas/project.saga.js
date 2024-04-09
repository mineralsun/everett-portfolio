import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProjects() {
    try {
        const projects = yield axios.get('/api/projectlist');
        console.log('current project list:', projects.data)
        yield put({ type: 'SET_PROJECTS', payload: projects.data});
    } catch (error) {
        console.log(`Error in fetchProjects ${error}`);
        alert('Something went wrong with project saga')
    }
}

function* projectSaga() {
    yield takeEvery('FETCH_PROJECTS', fetchProjects);
}

export default projectSaga;