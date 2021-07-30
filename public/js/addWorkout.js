let exercise = null;
const areAllNumbers = (numArray) => {
    allNums = true;
  
    numArray.forEach(element => {
      allNums &= typeof element === 'number';
    })
    return allNums;
}

const submitHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the new workout form
    const weight = document.querySelector('#weight').value.trim();
    const sets = document.querySelector('#sets').value.trim();
    const reps = document.querySelector('#reps').value.trim();
    const cardio = document.querySelector('#cardio').value.trim();
    
    //have to get user id still
    const id = document.querySelector('#id').value;

    if (weight && sets && reps && exercise) {
        if(areAllNumbers([weight, sets, reps])){
            const response = await fetch(`/api/newWorkout/${id}`, {
                method: 'POST',
                body: JSON.stringify({ exercise, weight, sets, reps }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        
            if (response.ok) {
                document.location.replace('/profile');
            } else {
                alert('Failed to create project');
            }
        }
        else{
            alert('Bad input');
        }
        
    }
    else if(cardio && exercise){
        if(areAllNumbers([cardio])){
            const response = await fetch(`/api/newWorkout/${id}`, {
                method: 'POST',
                body: JSON.stringify({ exercise, cardio }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        
            if (response.ok) {
                document.location.replace('/profile');
            } else {
                alert('Failed to create project');
            }
        }
        else{
            alert('Bad input');
        }
    }
};

const exerciseHandler = (event) => {
    exercise = event.target.innerHTML;
}

const addListeners = () => {
    var execiseArray = document.getElementById("exercise").childNodes;
    for(i=0; i< exerciseArray.length; i++){
        execiseArray[i].addEventListener('click', exerciseHandler);
    }
    
}

addListeners();
document
    .querySelector('#submit')
    .addEventListener('submit', submitHandler)

  