import './EditNavBar.css'

interface props {
  PageSelected: string,
  NavOptions: string[],
  setPageSelected: any
}

function EditNavBar({ PageSelected, NavOptions, setPageSelected }: props) {

  const NavEelemnts = NavOptions.map((element, index) => (
    <div
      className={PageSelected == element ? "EditNavBarEelemnt SelectedPage" : "EditNavBarEelemnt"}
      key={index}
      onClick={() => { setPageSelected(element) }}>
      <h3>{element}</h3>
    </div>
  ))
  return (
    <div className='editnavbar--container'>
      {NavEelemnts}
    </div>
  )
}

export default EditNavBar