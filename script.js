//your JS code here. If required.
let arr = ['applause','boo','gsap','tada','victory','wrong','stop'];
let div = document.getElementById('buttons')
let frag = document.createDocumentFragment()
for(let i=0 ; i<arr.length; i++){
	let btn = document.createElement('button')
	let aud = document.createElement('audio')
	aud.setAttribute('src',`sounds/${arr[i]}.mp3`)
	aud.setAttribute('id',`${arr[i]}`)
	btn.setAttribute('class','btn')
	btn.setAttribute('class','stop')
	btn.textContent = arr[i]
	btn.addEventListener('click', () => {
        aud.play();
    });
	frag.appendChild(aud)
	frag.appendChild(btn)
}
div.appendChild(frag)



 // <audio id="myAudio" src="path/to/your/audio.mp3"></audio>
 //    <button id="playButton">Play Audio</button>
 // const myAudio = document.getElementById('myAudio');
 //    const playButton = document.getElementById('playButton');

 //    playButton.addEventListener('click', () => {
 //        myAudio.play();
 //    });
