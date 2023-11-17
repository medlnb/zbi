import { useEffect, useState } from 'react'
import './Announcement.css'
import AnnouncementElement from '../AnnouncementElement/AnnouncementElement'

interface AnnouncementType {
  Publisher: string,
  Content: string,
  Date: Date
}

function Announcement() {
  const [AnnouncementsData, setAnnouncementsData] = useState<AnnouncementType[]>([])
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://student-space-backend.onrender.com/api/announcement")
      const json = await response.json()
      setAnnouncementsData(json)
    }
    getData()
  }, [])

  const Announcements = AnnouncementsData.map((element, index) => (
    <AnnouncementElement
      key={index}
      Publisher={element.Publisher}
      Content={element.Content}
      Date={element.Date}
    />
  )
  )
  return (
    <div className='sub--main--container'>
      <h1 className='sub--main--title'>Announcement</h1>
      {Announcements}
    </div>
  )
}

export default Announcement