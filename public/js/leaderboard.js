const populateLeaderList = async () => {
    // console.log('tesdfasdf');
    const scoreList = document.querySelector('#display-scores');
    const scoreLinks = document.querySelector('#display-scores-list');
    const scores = scoreList.children;
    numScore = scores.length
    // console.log(typeof friends[1].innerHTML);
    for(var i=0; i<numScores; i++){
      fetch(`/api/users/${scores[i].innerHTML}`).then((response) => {
        // return response.text()
        // console.log(response.json());
        return response.json();
      }).then((res) => {
        console.log(res);
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