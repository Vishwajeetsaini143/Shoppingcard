
import './Model.css'

const Model = ({children,setOpen}) => {
  return (
    <div className='model'>
      <div className="model-header">
        <p onClick={()=>setOpen(false)}>&times;</p>
      </div>
   
        {children}
    </div>
  )
}

export default Model