import axios from "axios";

export const STUDENT_CODE = "20262363";
export const BASE_URL = "https://congachu.dev";

const client = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const todoApi = {
  getTodos: async () => {
    console.log("GET: 할 일 목록 조회 호출됨");
    const response = await client.get(`/api/todos?code=${STUDENT_CODE}`);
    return response.data;
  },

  createTodo: async (content) => {
    console.log("POST: 할 일 생성 호출됨", content);
    const response = await client.post(`/api/todos?code=${STUDENT_CODE}`, {
      content,
    });
    return response.data;
  },

  toggleTodo: async (id, completed) => {
    console.log("POST: 할 일 상태 토글 호출됨", id, completed);
    const response = await client.post(
      `/api/todos/${id}?code=${STUDENT_CODE}`,
      { completed },
    );
    return response.data;
  },

  deleteTodo: async (id) => {
    console.log("DELETE: 할 일 삭제 호출됨", id);
    const response = await client.delete(
      `/api/todos/${id}?code=${STUDENT_CODE}`,
    );
    return response.data;
  },
};
