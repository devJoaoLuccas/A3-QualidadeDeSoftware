import { jest } from '@jest/globals';


const db = {
    get: jest.fn(),
    run: jest.fn(),
    exec: jest.fn(),
    all: jest.fn()
};

const openDb = () => Promise.resolve(db);
export { openDb, db };