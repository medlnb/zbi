import { BrowserRouter } from 'react-router-dom'
import Main from '../../Components/Main/Main'
import NavBar from '../../Components/NavBar/NavBar'
import SideBar from '../../Components/SideBar/SideBar'
import './HomePage.css'
import { ScheduleContextProvider } from '../../Contexts/ScheduleContext'
import { TasksContextProvider } from '../../Contexts/TaskContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClassesContextProvider } from '../../Contexts/Class'

export const notify = (toastType: "success" | "info" | "warn" | "error", toastMsg: string) =>
  toast[toastType](`${toastMsg}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });


function HomePage() {
  return (
    <div className='homepage--container'>
    <BrowserRouter>
      <ClassesContextProvider>
        <TasksContextProvider>
          <ScheduleContextProvider>
           <>
              <NavBar />
              <Main />
              <SideBar />
              <ToastContainer />
            </> 
          </ScheduleContextProvider>
        </TasksContextProvider>
      </ClassesContextProvider>
    </BrowserRouter >
    </div >
  )
}

export default HomePage