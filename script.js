console.log("Hello from script");
console.log(window);
console.log(window.outerHeight);


// alert("Connected")

// example 1

document.
    getElementById("changeTextButton")
    .addEventListener('click',function(){
           let paragraph = document.getElementById("myParagraph")
paragraph.innerHTML = `🌾 Why did the scarecrow win an award?<br>Because he was outstanding in his field! 🏆😊`; 

})

// example 2

document.getElementById("highlightFirstCity").addEventListener("click", function () {
        let citiesList = document.getElementById("citiesList");
        citiesList.firstElementChild.classList.add("highlight");
        console.log(citiesList.firstElementChild.classList);
    })

// example 3

document.getElementById("changeOrder").addEventListener("click",function(){
    // document.getElementById("coffeeType").innerText = "Espresso"
    document.getElementById("coffeeType").textContent = "Espressoo"
    document.getElementById("coffeeType").style.backgroundColor = "yellow"
    document.getElementById("coffeeType").style.color = "black"
    document.getElementById("coffeeType").style.padding = "6px 10px"
})


// Example 4
document.getElementById("addNewItem").addEventListener("click",function(){
    let newItem = document.createElement("li")
    newItem.textContent = "Butter";
    document.getElementById("shoppingList").appendChild(newItem)
})

//example 5
document.getElementById("removeLastTask").addEventListener("click",function(){
    let taskList = document.getElementById("taskList")
    if (taskList.lastElementChild !== null) {
        taskList.lastElementChild.remove()
    }
})

// Example 6:

document.getElementById("clickMeButton").addEventListener("dblclick",function(){
    alert("Bhavik Bhuva")
})

// Example 7:

document.getElementById("teaList").addEventListener("click", function (event) {
    if (event.target && event.target.matches(".teaItem")) {
        alert("you selected " + event.target.textContent);
    }
});

// Example 8

document.getElementById("feedbackform").addEventListener("submit", function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent = `feedback is : ${feedback}`;
})

// Example 9

document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("domStatus").textContent = "Document Loaded Successfully."
})

// Example 10

document.getElementById("toggleHighlight").addEventListener("click",function(){
    let descriptionText = document.getElementById("descriptionText")
    descriptionText.classList.toggle("highlight1")
})



//for example 1 in light theme
// function showCode(type, example) {
//     const htmlCode = document.getElementById('htmlCode');
//     const jsCode = document.getElementById('jsCode');
    
//     // Show the appropriate code block based on the selected tab
//     if (type === 'html') {
//         htmlCode.style.display = 'block';
//         jsCode.style.display = 'none';
//         document.querySelector('.tab-button.active').classList.remove('active');
//         document.querySelector('.tab-button:nth-child(1)').classList.add('active');
//     } else {
//         htmlCode.style.display = 'none';
//         jsCode.style.display = 'block';
//         document.querySelector('.tab-button.active').classList.remove('active');
//         document.querySelector('.tab-button:nth-child(2)').classList.add('active');
//     }
// }

// html example-2
// js example-2
function showCode(type, exampleId) {
    const exampleContainer = document.getElementById(exampleId);
    const htmlCode = exampleContainer.querySelector('.htmlcode');
    const jsCode = exampleContainer.querySelector('.jscode');

console.log(jsCode);
    

    // console.log(exampleContainer);
    // console.log(htmlCode + htmlCode.textContent);
        // console.log(jsCode + jsCode.textContent);
    
    
    // Show the appropriate code block based on the selected tab
    if (type === 'html') {
        htmlCode.style.display = 'block';
        jsCode.style.display = 'none';
        exampleContainer.querySelector('.tab-button.active').classList.remove('active');
        exampleContainer.querySelector('.tab-button:nth-child(1)').classList.add('active');
    } else {
        htmlCode.style.display = 'none';
        jsCode.style.display = 'block';
        exampleContainer.querySelector('.tab-button.active').classList.remove('active');
        exampleContainer.querySelector('.tab-button:nth-child(2)').classList.add('active');
    }
}




// function copyCode(elementId) {
//     const codeElement = document.getElementById(elementId).querySelector('code');
//     const codeText = codeElement.textContent.trim(); // Use trim to remove any extra whitespace

//     console.log(elementId + codeElement + codeText);
    
    
//     navigator.clipboard.writeText(codeText).then(() => {
//         const button = document.querySelector(`#${elementId} .copy-button`); // Select the button within the specific code block
//         button.textContent = 'Copied';
        
//         // Reset the button text after 2 seconds
//         setTimeout(() => {
//             button.textContent = 'Copy';
//         }, 2000);
//     }).catch(err => {
//         console.error('Failed to copy text: ', err);
//     });
// }

// htmlCode2
function copyCode(exampleId) {
    const exampleContainer = document.getElementById(exampleId);
    console.log(exampleContainer.textContent);
    console.log(exampleContainer);
    
    const codeElement = exampleContainer.querySelector('code'); // Target the code inside the specific example block
    const codeText = codeElement.textContent.trim(); // Use trim to remove any extra whitespace

    navigator.clipboard.writeText(codeText).then(() => {
        const button = exampleContainer.querySelector('.copy-button'); // Select the button within the specific example block
        button.textContent = 'Copied';
        
        // Reset the button text after 2 seconds
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}














