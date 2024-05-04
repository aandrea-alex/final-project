const imgRef = document.querySelector('.sale-big-img');
console.log(imgRef);

imgRef && imgRef.addEventListener('click', () => {
    imgRef.classList.toggle('rotated'); 
    setTimeout(() => {
        imgRef.classList.toggle('rotated');
    }, 4000);
});
