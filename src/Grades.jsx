import React from 'react'

const Grades = ({gradesArray}) => {

  return (
    <>
    {gradesArray.map( (grades, index) =>{

        return (
            
            <ul key={index}>
                <li > Class: {grades[0]}</li>
                <li> Grade: {grades[1]}</li>
            </ul>

        )
    })}
    </>
  )
}

export default Grades