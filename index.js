
//Creates rating objects
  const ratingOne = document.querySelector('#rating1');
  
  const ratingTwo = document.querySelector('#rating2');

  const ratingThree = document.querySelector('#rating3');

  const ratingFour = document.querySelector('#rating4');
                      
  const ratingFive = document.querySelector('#rating5');
  
  //array of rating objects
  const ratings = [ratingOne, ratingTwo, ratingThree, ratingFour, ratingFive];
  
  /**
   * Checks if HTML element is ready
   * Actions to perform when a rating is clicked
   */
  function checkReady(){
    let currentTargetId = '';
   const ratingContainer = document.querySelector('.rating-container');

    if(ratingContainer){
      ratingContainer.onclick = (e) => {
        for(let i = 0; i < ratings.length; i++){//revert all elements upon click
          revert(ratings[i]);
        }
        currentTargetId = e.target.id;
        let currentRating = e.target.innerText;
        sessionStorage.setItem('currentRating', currentRating);//save the inner text of the selected element
      
        switch(currentTargetId){
          case 'rating1':
            clickAction(ratingOne);
            break;
          case 'rating2':
            clickAction(ratingTwo);
            break;
          case 'rating3':
            clickAction(ratingThree);
            break;
          case 'rating4':
            clickAction(ratingFour);
            break;
          case 'rating5':
            clickAction(ratingFive);
            break;
          default:
            break;
        }
      }
    }
  }
  
  checkReady();

  /**
   * Get the current rating stored in the session storage
   * store it in a new currentRating variable
   */
  let currentRating = sessionStorage.getItem('currentRating')
  
   /**
   * Change background and text color when a rating is clicked.
   * @param {*} obj A rating object
   */
  const revert = (obj) =>{
    obj.style.color = `rgb(${124},${135},${152})`;
    obj.style.backgroundColor = `rgb(${63},${75},${90})`;
  }
  
  /**
   * Change background and text color when a rating is clicked.
   * @param {*} obj A rating object
   */
  const clickAction = (obj) => {
    obj.style.color = `rgb(${255},${255},${255})`;
    obj.style.backgroundColor = `rgb(${149},${158},${172})`;
  }
  
  
  
  /**
   * Action to perform when button is clicked.
   * Open second page
   */
  const buttonAction = () => {
   top.location.href = 'indexSecondary.html';
  }
    

  /**
   * Check if span tag is not null/ whether HTML element is 'ready'
   * span(id: rate) is in second html file so will not be ready while on first page
   */
  function checkSpan(){
    const rate = document.querySelector('#rate');
    if(rate){
      rate.innerHTML=currentRating;
    }
  }

  /**
   * Check if button is not null/ whether HTML element is 'ready'
   */
  function checkButtonReady(){
    const button = document.querySelector('.submit-button');
    if(button){
      button.addEventListener('click',buttonAction);
    }  
    checkSpan()
  }

checkButtonReady();


