
                                    // Event listener for the 'ahh' button to change the background color to a random color
document.getElementById('ahh').addEventListener('click', function() {
   
    const colors = ['#ffe5d9', '#ffcad4', '#d8e2dc','#ccd5ae'];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.style.backgroundColor = randomColor;
});

                                    // Event listener for the 'previous' element to go back to the previous page

document.getElementById("next-page").addEventListener("click", function(){
    window.location.href = 'test.html';
});

document.getElementById("previous-page").addEventListener("click", function(){
    window.history.back('index.html');
});


