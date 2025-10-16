// tests/unit/taskService.test.js
const TaskService = require('../../src/services/taskService');
const Task = require('../../src/models/Task');

describe('TaskService', () => {
  test('should create a new task with valid data', async () => {
    const taskData = {
      title: 'Test Task',
      description: 'Test Description',
      assignedTo: 1
    };
    
    const task = await TaskService.createTask(taskData);
    expect(task).toHaveProperty('id');
    expect(task.title).toBe('Test Task');
  });

  test('should throw error for invalid task data', async () => {
    const invalidData = { title: '' };
    await expect(TaskService.createTask(invalidData))
      .rejects.toThrow('Title is required');
  });
});
