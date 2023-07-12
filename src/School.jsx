import Grades from "./Grades";
import Student from "./Student";

function School() {

  let person1 = {
    name:'Gina',
    classification:'Senior',
    id: 12345,
    email: 'gina@awesome.com',
    classes: ['English', 'Math']
  }

  let person2 = {
    name:'Robby',
    classification:'Junior',
    id: 75852,
    email: 'robby@awesome.com',
    classes: ['English', 'Spanish','Math']
  }

  let person3 = {
    name:'Jeff B.',
    classification:'Freshman',
    id: 55585,
    email: 'jeff@awesome.com',
    classes: ['Math', 'Physics', 'History']
  }

  let person4 = {
    name:'Sarah',
    classification:'Sophomore',
    id: 48763,
    email: 'sarah@awesome.com',
    classes: ['English', 'History', 'Math']
}

let person5 = {
    name:'Adam',
    classification:'Senior',
    id: 14527,
    email: 'adam@awesome.com',
    classes: ['Math', 'Physics', 'Chemistry']
}

let person6 = {
    name:'Eva',
    classification:'Freshman',
    id: 76432,
    email: 'eva@awesome.com',
    classes: ['Biology', 'Math', 'English']
}

let person7 = {
    name:'Lucas',
    classification:'Junior',
    id: 92837,
    email: 'lucas@awesome.com',
    classes: ['Physics', 'Math', 'Computer Science']
}

let person8 = {
    name:'Anna',
    classification:'Senior',
    id: 37691,
    email: 'anna@awesome.com',
    classes: ['English', 'Philosophy', 'History']
}

let person9 = {
    name:'Robert',
    classification:'Sophomore',
    id: 98473,
    email: 'robert@awesome.com',
    classes: ['Chemistry', 'Math', 'Biology']
}

let person10 = {
    name:'Isabella',
    classification:'Junior',
    id: 23764,
    email: 'isabella@awesome.com',
    classes: ['English', 'History', 'French']
}

let person11 = {
    name:'Sam',
    classification:'Senior',
    id: 85732,
    email: 'sam@awesome.com',
    classes: ['Math', 'Physics', 'English'],
}

let person12 = {
    name:'Emily',
    classification:'Freshman',
    id: 13572,
    email: 'emily@awesome.com',
    classes: ['English', 'Spanish', 'History']
}

let array = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10, person11, person12]


  return (
    <>
      Hello World

      { array.map( (person, index) => {
        
        return ( <Student 
        key={index}
        name={person.name}
        id={person.id}
        classification={person.classification}
        email={person.email}
        classes={person.classes}
        /> 
        )

      })  }



      {/* <Student 
      name={array[0].name}
      id={array[0].id}
      classification={array[0].classification}
      email={array[0].email}
      classes={array[0].classes}
      />

    <Student 
      name={array[1].name}
      id={array[1].id}
      classification={array[1].classification}
      email={array[1].email}
      classes={array[1].classes}
      />

    <Student 
      name={array[2].name}
      id={array[2].id}
      classification={array[2].classification}
      email={array[2].email}
      classes={array[2].classes}
      /> */}


      {/* <Student/>
      <Student/> */}
    
    </>
  );
}

export default School;
