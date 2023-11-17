import { useState } from 'react'
import EditNavBar from '../EditNavBar/EditNavBar'
import './Edit.css'
import ScheduleEdit from '../ScheduleEdit/ScheduleEdit'
import TaskEdit from '../TaskEdit/TaskEdit'
import EditClass from '../EditClass/EditClass'
import AnnouncementEdit from '../AnnouncementEdit/AnnouncementEdit'

function Edit() {
  const NavOptions = ["Classes", "Tasks", "Annou", "Schedule"]
  const [PageSelected, setPageSelected] = useState(NavOptions[0])
  
  return (
    <div className='sub--main--container'>
      <h1 className='sub--main--title'>{PageSelected}</h1>
      <div className='edit--container'>
        <div className='edit--page'>
          {PageSelected == NavOptions[3] && <ScheduleEdit />}
          {PageSelected == NavOptions[2] && <AnnouncementEdit />  }
          {PageSelected == NavOptions[1] && <TaskEdit />}
          {PageSelected == NavOptions[0] && <EditClass />}
        </div>
        <EditNavBar
          PageSelected={PageSelected}
          NavOptions={NavOptions}
          setPageSelected={setPageSelected}
        />
      </div>
    </div>
  )
}

export default Edit