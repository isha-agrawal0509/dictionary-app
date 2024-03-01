const url="https://api.dictionaryapi.dev/api/v2/entries/en/"
const btn=document.getElementById("btn");
const sound_btn=document.getElementById("sound-btn");
const sound=document.getElementById("audio");
const result=document.querySelector(".result");
btn.addEventListener("click",()=>{
    let input_word=document.getElementById("input-word").value;
    fetch(`${url}${input_word}`)
    .then((data)=>{
        return data.json();
    })
    .then((item)=>{
        console.log(item);
        result.innerHTML=`
        <div class="word">
        <h3>${input_word}</h3>
        <button id="sound-btn" onClick="playSound()">
            <i class="fa-solid fa-volume-high"></i>
        </button>
    </div>
    <div class="details">
        <p>${item[0].meanings[0].partOfSpeech}</p>
        <p>/${item[0].phonetic}/</p>
    </div>
    <p class="word-meaning">
       ${item[0].meanings[0].definitions[0].definition}
</p>
    <p class="example">
      ${item[0].meanings[0].definitions[0].example || ""}
    </p>

</div>`;
sound.setAttribute("src",`${item[0].phonetics[0].audio}`);

    })
    .catch(()=>{
        result.innerHTML=`<h1 class="error">Couldn't find the word</h1>`;
    })
});
function playSound(){
    sound.play();
}