                                    //  page-change

document.getElementById("next-page").addEventListener("click", function(){
    window.location.href = 'test.html';
});

document.getElementById("previous-page").addEventListener("click", function(){
    window.history.back('index.html');
});


// Function to generate a random color
document.getElementById('thimechange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
})
  