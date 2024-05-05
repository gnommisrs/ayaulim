function work(){ 
    let input = document.getElementById("diasUberiTelefon") 
    let name = input.value; 
    let newText = document.createElement("h2"); 
    newText.innerHTML = "Привет, " + name + "! В Алматы прилетел метеор, на котором сидел инопланетянин, твои действия:"; 
 
    let gamebox = document.getElementById("gamebox"); 
    gamebox.appendChild(newText) 

    let input2 = document.createElement("input")
    input2.placeholder="Введите действие"
     gamebox.appendChild(input2) 
    
    let but = document.createElement("a")
    but.innerHTML="продолжить"
    but.setAttribute("onclick","work2()")
     gamebox.appendChild(but) 
}
function work2(){
	let text2 = document.createElement("h2");
    text2.innerHTML = "Вы приняли правильное решение, победа!!"
    let gamebox = document.getElementById("gamebox");
    gamebox.appendChild(text2) 
}
