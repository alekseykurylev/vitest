import '@testing-library/jest-dom';
import { server } from './mocks/server'


// Запуск перед тестами
beforeAll(() => server.listen());
// Сброс моков после каждого теста
afterEach(() => server.resetHandlers());
// Остановка после всех тестов
afterAll(() => server.close());