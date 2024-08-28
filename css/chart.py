import pandas as pd

# Load task data
tasks_df = pd.read_csv('tasks.csv')

# Define updates
updates = {
    1: {'Description': 'New Description 1', 'Start Date': '2024-08-27', 'Due Date': '2024-08-28', 'Status': 'In progress'},
    2: {'Description': 'New Description 2', 'Start Date': '2024-08-28', 'Due Date': '2024-08-29', 'Status': 'Completed'},
    # Add more updates as needed
}

# Apply updates
for task_id, changes in updates.items():
    for key, value in changes.items():
        tasks_df.loc[tasks_df['Task ID'] == task_id, key] = value

# Save updated tasks
tasks_df.to_csv('updated_tasks.csv', index=False)
