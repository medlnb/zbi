import { useContext } from 'react'
import './Classes.css'
import { ClassesContext } from '../../Contexts/Class'
import Class from '../Class/Class'

interface ClassType {
  Module: string,
  Teacher: string,
  description?: string,
  Chapter?: string
}
function Classes() {
  const { state } = useContext(ClassesContext)

  if (!state)
    return

  if (state[0][0].Module == "default_value")
    return

  const classesData: ClassType[] = []

  state.map(element => {
    classesData.push(element[0])
  })

  const classes = classesData.map((element, index) =>
    <Class
      key={index}
      Module={element.Module}
      Teacher={element.Teacher}
      description={element.description}
    />
  )
  return (
    <div className='sub--main--container'>
      <h1 className='sub--main--title'>Classes</h1>
      <div className='classes--container'>
        {classes}
      </div>
    </div>
  )
}

export default Classes