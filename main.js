// const result = document.createElement("div");
// result.id = "result";
// result.style.position = "fixed";
// result.style.top = "50%";
// result.style.left = "50%";

// document.body.append(result);
// const texts = [];

// if ("webkitSpeechRecognition" in window) {
//   const speechRecognizer = new webkitSpeechRecognition();
//   speechRecognizer.continuous = true;
//   speechRecognizer.interimResults = true;

//   speechRecognizer.lang = "ko-KR";
//   speechRecognizer.start();

//   let finalTranscripts = "";
//   speechRecognizer.onresult = (e) => {
//     result.innerHTML = "";
//     document.body.style.backgroundColor = e.results[0][0];
//     Object.entries(e.results).forEach(([key, value]) => {
//       result.innerHTML += value[0].transcript + "</br>";
//     });
//     // for (let i = e.resultIndex; i < e.results.length; i++) {
//     //   let transcript = e.results[i][0].transcript;
//     //   console.log(transcript);
//     //   result.innerHTML += transcript;
//     // }
//     console.log(e.results);
//   };

//   speechRecognizer.onnomatch = (event) => {
//     console.log("no match");
//     diagnostic.textContent = "I didn't recognize that color.";
//   };

//   speechRecognizer.onspeechstart = () => {
//     console.log("start");
//     speechRecognizer.stop();
//   };

//   speechRecognizer.onspeechend = () => {
//     console.log("stop");
//     speechRecognizer.stop();
//   };
// }
const result = document.getElementById("result");

const texts = [];

if ("webkitSpeechRecognition" in window) {
  const speechRecognizer = new webkitSpeechRecognition();
  speechRecognizer.continuous = true;
  speechRecognizer.interimResults = true;

  speechRecognizer.lang = "ko-KR";
  speechRecognizer.start();

  let finalTranscripts = "";
  speechRecognizer.onresult = (e) => {
    result.innerHTML = "";
    Object.entries(e.results).forEach(([key, value]) => {
      result.innerHTML += value[0].transcript+'</br>';
    });
    // for (let i = e.resultIndex; i < e.results.length; i++) {
    //   let transcript = e.results[i][0].transcript;
    //   console.log(transcript);
    //   result.innerHTML += transcript;
    // }
    console.log(e.results);
  };

  speechRecognizer.onnomatch = (event) => {
    console.log("no match");
    diagnostic.textContent = "I didn't recognize that color.";
  };

  speechRecognizer.onspeechend = () => {
    console.log("stop");
    speechRecognizer.stop();
  };
}
