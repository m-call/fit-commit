const populateLeaderList = async () => {
    const scoreList = document.querySelector('#display-scores');
    const scoreLinks = document.querySelector('#display-scores-list');
    const scores = scoreList.children;
    numScore = scores.length
    for(var i=0; i<numScores; i++){
      fetch(`/api/users/${scores[i].innerHTML}`).then((response) => {
        // return response.text()
        return response.json();
      }).then((res) => {
        // let friend = document.createElement("p");  
        // friend.innerHTML = `${res.full_name}`;
        
        // try{
        //   friend.innerHTML += ` ${res.scores[0].weekly_score}`
        // }
        // catch{
        //   friend.innerHTML += ` 0`;
        // }
  
        friendLinks.appendChild(friend); 
      });
    }
  }

  populateLeaderList(); 