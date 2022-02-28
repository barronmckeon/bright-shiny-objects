// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘


function createUser (firstName, lastName) {
    let fullName= {
        firstName: firstName,
        lastName : lastName
    }
return fullName;
}

function setAge (user, age) {
    user.age = age
return user
}



function incrementAge ( user, increaseage ){
    increaseage = user.age++
return  user
}


function fixCar (car) {
    car.needsMaintenance = false;
return car;
}

function addGrades (  student, newGrades){
    for (let i=0 ; i <  newGrades.length; i++  )
    student.grades.push(newGrades[i])

return student;
}

function getDataType (  object, key ){
    return typeof object[key]
}


function addToDo (toDo, newToDo)  {
    toDo.push(newToDo);
    return toDo
}



Newsong 


// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
