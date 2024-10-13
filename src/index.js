const handleClick = (ramen) => {
  const detailImg = document.querySelector('#ramen-detail > .detail-image');
  const detailName = document.querySelector('#ramen-detail > .name');
  const detailRestaurant = document.querySelector('#ramen-detail > .restaurant');
  const detailsRating = document.getElementById('rating-display');
  const detailsComment = document.getElementById('comment-display');

  detailImg.src = ramen.image;
  detailImg.alt = ramen.name;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  detailsRating.textContent = ramen.rating;
  detailsComment.textContent = ramen.comment;
};


const addSubmitListener = () => {
  const ramenForm = document.getElementById('new-ramen');
  
  ramenForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newRamen = {
      name: ramenForm['new-name'].value,
      restaurant: ramenForm['new-restaurant'].value,
      image: ramenForm['new-image'].value,
      rating: ramenForm['new-rating'].value,
      comment: ramenForm['new-comment'].value,
    };


    const ramenMenuDiv = document.getElementById('ramen-menu');
    const img = document.createElement('img');
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener('click', () => handleClick(newRamen));
    ramenMenuDiv.appendChild(img);

    
    ramenForm.reset();
  });
};


const displayRamens = () => {
  fetch('http://localhost:3000/ramens')
    .then((response) => response.json())
    .then((ramens) => {
      const ramenMenuDiv = document.getElementById('ramen-menu');
      ramens.forEach((ramen) => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenuDiv.appendChild(img);
      });
    })
    .catch((error) => console.error('Error fetching ramens:', error));
};


const main = () => {
  displayRamens(); 
  addSubmitListener(); 
};

main();


export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

