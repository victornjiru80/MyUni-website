import React from 'react'
import './Programs.css'
import program1 from '../../assets/program1.png'
import program2 from '../../assets/program2.png'
import program3 from '../../assets/program3.png'
import programIcon1 from '../../assets/program-icon-1.png'
import programIcon2 from '../../assets/program-icon-2.png'
import programIcon3 from '../../assets/program-icon-3.png'




const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program1} />
            <div className="caption">
                <img src={programIcon1} />
                <p>Undegraduate Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} />
            <div className="caption">
                <img src={programIcon2} />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} />
            <div className="caption">
                <img src={programIcon3} />
                <p>PostGraduate Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs