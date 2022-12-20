import React,{useRef,useState, useEffect} from 'react'
import { countries } from './data'
import microPhoneIcon from "./../assets/mic.svg"
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import './Translate.css';



const Translate = () => {

  // Defined Commands From Users
  const commands = [
    {
      command: "open *",
      callback: (website) => {
        window.open("http://" + website.split(" ").join(""));
      },
    },
    {
      command: "change background colour to *",
      callback: (color) => {
        document.body.style.background = color;
      },
    },
    {
      command: "reset",
      callback: () => {
        handleReset();
      },
    },
    ,
    {
      command: "reset background colour",
      callback: () => {
        document.body.style.background = `rgba(0, 0, 0, 0.8)`;
      },
    },
  ];

  // Transcript is the speech from user
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);

  // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  //   return (
  //     <div className="mircophone-container">
  //       Browser is not Support Speech Recognition.
  //     </div>
  //   );
  // }

  // Start Listening Speech...
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  // To Stop Listening
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };

  // Reset Button to reset the transcript
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };


  // Translation Logic
  useEffect(() =>{
      const fromText = document.querySelector(".from-text");
      const  toText = document.querySelector(".to-text");
      const exchageIcon = document.querySelector(".exchange");
      const selectTag = document.querySelectorAll("select");
      const icons = document.querySelectorAll(".row i");
      const translateBtn = document.querySelector("button");

      selectTag.forEach((tag, id) => {
          for (let country_code in countries) {
              let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "hi-IN" ? "selected" : "";
              let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
              tag.insertAdjacentHTML("beforeend", option);
          }
      });

      exchageIcon.addEventListener("click", () => {
          let tempText = fromText.value,
          tempLang = selectTag[0].value;
          fromText.value = toText.value;
          toText.value = tempText;
          selectTag[0].value = selectTag[1].value;
          selectTag[1].value = tempLang;
      });
      
      fromText.addEventListener("keyup", () => {
          if(!fromText.value) {
              toText.value = "";
          }
      });

      translateBtn.addEventListener("click", () => {
          let text = fromText.value.trim();
          let translateFrom = selectTag[0].value;
          let translateTo = selectTag[1].value;
          if(!text) return;
          toText.setAttribute("placeholder", "Translating...");
          let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
          fetch(apiUrl).then(res => res.json()).then(data => {
              toText.value = data.responseData.translatedText;
              data.matches.forEach(data => {
                  if(data.id === 0) {
                      toText.value = data.translation;
                  }
              });
              toText.setAttribute("placeholder", "Translation");
          });
      });
        
        
      icons.forEach(icon => {
          icon.addEventListener("click", ({target}) => {
              if(!fromText.value || !toText.value) return;
              if(target.classList.contains("fa-copy")) {
                  if(target.id == "from") {
                      navigator.clipboard.writeText(fromText.value);
                  } else {
                      navigator.clipboard.writeText(toText.value);
                  }
              } else {
                  let utterance;
                  if(target.id == "from") {
                      utterance = new SpeechSynthesisUtterance(fromText.value);
                      utterance.lang = selectTag[0].value;
                  } else {
                      utterance = new SpeechSynthesisUtterance(toText.value);
                      utterance.lang = selectTag[1].value;
                  }
                  speechSynthesis.speak(utterance);
              }
          });
      });

    },[]);
    
    // Translate the user speech in different language
    {transcript && (document.getElementById('contentSpeech').value = transcript)}

  return (
    <>
    <div className='outer'>
    <div className="microphone-wrapper inner left1">
      <div className="mircophone-container">
        <div
          className="microphone-icon-container"
          ref={microphoneRef}
          onClick={handleListing}
        >
          <img src={microPhoneIcon} className="microphone-icon" />
        </div>
        <div className="microphone-status">
          {isListening ? "Listening........." : "Click to start Listening"}
        </div>
        {isListening && (
          <button className="microphone-stop btn" onClick={stopHandle}>
            Stop
          </button>
        )}
      </div>
      {transcript && (
        <div className="microphone-result-container">
          <div className="microphone-result-text">{transcript}</div>
          <button className="microphone-reset btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </div>


    <div className="container1 inner right1">
      <div className="wrapper">
        <div className="text-input">
          <textarea spellcheck="false" className="from-text" placeholder="Enter text" id='contentSpeech'></textarea>
          <textarea spellcheck="false" readonly disabled className="to-text" placeholder="Translation"></textarea>
        </div>
        <ul className="controls">
          <li className="row from">
            <div className="icons">
              <i id="from" className="fas fa-volume-up"></i>
              <i id="from" className="fas fa-copy"></i>
            </div> 
            <select></select>
          </li>
          <li className="exchange"><i className="fas fa-exchange-alt"></i></li>
          <li className="row to">
            <select></select>
            <div className="icons">
              <i id="to" className="fas fa-volume-up"></i>
              <i id="to" className="fas fa-copy"></i>
            </div>
          </li>
        </ul>
      </div>
      <button>Translate Text</button>
    </div>
    </div>
    
    </>
  )
}

export default Translate