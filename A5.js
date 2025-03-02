// resent-time

    // 6btn clik and work
document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("hidden").style.display = "none";
})

document.getElementById("btn1").addEventListener("click", function () {
    document.getElementById("comment1").style.display = "block";
});
document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("comment2").style.display = "block";
});
document.getElementById("btn3").addEventListener("click", function () {
    document.getElementById("comment3").style.display = "block";
});
document.getElementById("btn4").addEventListener("click", function () {
    document.getElementById("comment4").style.display = "block";
});
document.getElementById("btn5").addEventListener("click", function () {
    document.getElementById("comment5").style.display = "block";
});
document.getElementById("btn6").addEventListener("click", function () {
    document.getElementById("comment6").style.display = "block";
});

// 6btn clik and work
function updateValues(button) {
    let value1 = document.getElementById("task1");
    let value2 = document.getElementById("task2");

    value1.innerText = parseInt(value1.innerText) -1;

    
    value2.innerText = parseInt(value2.innerText) +1;

   
    alert("Board Updated Successfully");
    
    if (parseInt(value1.innerText) === 0) {
       
        alert("Congratulation !!! You have completed all the curent task");
    }

    
    button.disabled = true;
}


    let buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        updateValues(button);
    });
});

                                        
                                    // button color  change
                                    
document.getElementById('ahh').addEventListener('click', function() {
   
    const colors = ['#ffe5d9', '#ffcad4', '#d8e2dc','#ccd5ae'];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.style.backgroundColor = randomColor;
});

                                    // page change

document.getElementById("next-page").addEventListener("click", function(){
    window.location.href = 'test.html';
});

document.getElementById("previous-page").addEventListener("click", function(){
    window.history.back('index.html');
});

