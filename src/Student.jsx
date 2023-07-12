import React from 'react'
import Grades from './Grades'

const Student = ({name, classification, id, email, classes}) => {

    // let name = props.name
    // let classification = 'Senior'
    // let id = 12345
    // let email = 'gina@awesome.com'
    // let classes = ['English', 'Math']
    
    let letterGrades = ['A','B','C','D']
    let grades = []

    for(let i=0; i<classes.length; i++){

        let randomNum = Math.floor(Math.random(4)*4)
        let randomGrade = letterGrades[randomNum]

        grades.push([classes[i], randomGrade])

    }


    

  return (
    <>
    <h1>This is my student component</h1>
    <h2>Name: {name} </h2>
    <h3>Classification: {classification} </h3>
    <h3>ID: {id} </h3>
    <h3>Email: {email} </h3>
    <h3>Classes: {classes} </h3>
    <Grades gradesArray={grades} />
    
    </>
  )
}

export default Student