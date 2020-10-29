import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://gorest.co.in/public-api'
  });

export async function getTasks() {
    let tasks = [];
    try {
        const response = await instance.get('/todos')
        if(response.status === 200) {
            tasks = response.data.data;
            return { status: true, data: tasks };
        }
    } catch (error) {
        return { status: false, data: error.message};
    }
}