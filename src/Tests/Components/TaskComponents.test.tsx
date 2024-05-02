import {renderWithProviders} from "../Utils/RenderWithProviders";
import AddTask from "../../Components/Tasks/Components/AddTask";
import userEvent from "@testing-library/user-event";
import {screen} from "@testing-library/react";
import Tasks from "../../Components/Tasks";
import {setupStore} from "../../Store";

async function UserAddTask() {
  await userEvent.type(screen.getByPlaceholderText('Task date'),'2024-12-25')
  await userEvent.type(screen.getByPlaceholderText('Task description'),'Test description')
  await userEvent.type(screen.getByPlaceholderText('Task title'),'Test')
  await userEvent.click(screen.getByText(/Add task/i))

}

test('Should have user inputed title',async ()=>{

  renderWithProviders(<AddTask/>)

  await userEvent.type(screen.getByPlaceholderText('Task title'),'Test')
  const titleInput = screen.getByPlaceholderText('Task title')
  expect(titleInput).toHaveValue('Test')
})

test('Should have user inputed description',async ()=>{

  renderWithProviders(<AddTask/>)

  await userEvent.type(screen.getByPlaceholderText('Task description'),'Test description')
  const titleInput = screen.getByPlaceholderText('Task description')
  expect(titleInput).toHaveValue('Test description')
})

test('Should have user inputed date',async ()=>{

  renderWithProviders(<AddTask/>)

  await userEvent.type(screen.getByPlaceholderText('Task date'),'2024-12-25')
  const titleInput = screen.getByPlaceholderText('Task date')
  expect(titleInput).toHaveValue('2024-12-25')
})

test('Should after register clear inputs',async ()=>{

  const store = setupStore()
  renderWithProviders(<Tasks/>,{store})
  await UserAddTask()

  const getTitleInput = screen.getByPlaceholderText('Task title')
  const getDescriptionInput = screen.getByPlaceholderText('Task description')
  const getDateInput = screen.getByPlaceholderText('Task date')

  expect(getDateInput).toHaveValue('')
  expect(getDescriptionInput).toHaveValue('')
  expect(getTitleInput).toHaveValue('')
})

test('Should render task in ListTasks after added',async ()=>{

  const store = setupStore()
  renderWithProviders(<Tasks/>,{store})
  await UserAddTask()

  const getListTaskItemTitle = screen.getByText('Test')
  expect(getListTaskItemTitle).toBeInTheDocument();
})

test('Should register user Task',async ()=>{

  const store = setupStore()
  const {store: renderedStore} = renderWithProviders(<Tasks/>,{store})
  await UserAddTask()

  expect(renderedStore.getState().tasks.tasks).not.toEqual({})
})

test('Should remove user selected Task',async ()=>{

  const store = setupStore()
  const {store: renderedStore} = renderWithProviders(<Tasks/>,{store})
  await UserAddTask()

  await userEvent.click(screen.getByRole('removeTask'))

  expect(renderedStore.getState().tasks.tasks).toEqual({})
})

test('Should set a Task to be edited',async ()=>{

  const store = setupStore()
  renderWithProviders(<Tasks/>,{store})
  await UserAddTask()

  await userEvent.click(screen.getByRole('editTask'))

  const getTitle = screen.getByPlaceholderText('Task title')
  const getDescription = screen.getByPlaceholderText('Task description')
  const getDate = screen.getByPlaceholderText('Task date')

  expect(getTitle).toHaveValue('Test')
  expect(getDescription).toHaveValue('Test description')
  expect(getDate).toHaveValue('2024-12-25')
})

test('Should save an edited Task and render edited task',async ()=>{

  const store = setupStore()
  renderWithProviders(<Tasks/>,{store})
  await UserAddTask()

  await userEvent.click(screen.getByRole('editTask'))

  await userEvent.type(screen.getByPlaceholderText('Task description'),' edited')
  await userEvent.type(screen.getByPlaceholderText('Task title'),' edited')

  await userEvent.click(screen.getByText(/Save changes/i))

  const getListTaskItemTitle = screen.getByText('Test edited')
  const getListTaskItemDescription = screen.getByText('Test description edited')

  expect(getListTaskItemDescription).toBeInTheDocument()
  expect(getListTaskItemTitle).toBeInTheDocument()

})
