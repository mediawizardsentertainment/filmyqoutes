let clickCountTwo=0;const linksTwo=["https://irritatepillssurly.com/n5zeue1rt?key=4118d6de05154a8b409f693189aa5c8b","https://irritatepillssurly.com/mda3nbcax3?key=d0b8d02243b60d8fe5149eaa478213ef","https://irritatepillssurly.com/hqcy31erjz?key=cab5ae9f04479c27ecf27ed5f4a7496b","https://irritatepillssurly.com/dzuxwijy?key=d6a729b20e0b3c46d15e4478d0ee1d4b","https://irritatepillssurly.com/y4gsdhs1?key=364bb8c942775bcd18321c760529b9bd"];function decodeHTMLTwo(html){var parser=new DOMParser();var doc=parser.parseFromString(html,"text/html");return doc.body.textContent||doc.body.innerText}
async function fetchGrammarlyCookiesTwo(){const url="https://filmyqoutes.com/cookies/get-netflix-premium-cookies-update-hourly/";const preContainer=document.getElementById("cookieContainerTwo");const loader=document.getElementById("loadingSpinnerTwo");const copyAllButton=document.getElementById("copyAllButtonTwo");const timerContainer=document.getElementById("timerContainerTwo");const countdownTimer=document.getElementById("countdownTimerTwo");const cookiesUpdatedMessage=document.getElementById("cookiesUpdatedMessageTwo");const customHeading=document.getElementById("customHeadingTwo");loader.style.display="block";preContainer.style.display="none";copyAllButton.style.display="none";timerContainer.style.display="none";customHeading.style.display="none";try{const response=await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);if(!response.ok)throw new Error("Failed to fetch the page content");const htmlText=await response.text();const textHostRegex=/var\s+textHostContent\s*=\s*"([\s\S]*?)";/;const matches=htmlText.match(textHostRegex);if(matches&&matches[1]){let grammarlyCookies=matches[1];grammarlyCookies=decodeHTMLTwo(grammarlyCookies).replace(/\\"/g,'"').replace(/\\\\/g,"\\").replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\\//g,"/").trim();let timeLeft=60;timerContainer.style.display="block";const timerInterval=setInterval(function(){countdownTimer.textContent=timeLeft;timeLeft--;if(timeLeft<0){clearInterval(timerInterval);preContainer.textContent=grammarlyCookies;preContainer.style.display="block";copyAllButton.style.display="block";timerContainer.style.display="none";loader.style.display="none";const currentDate=new Date();const formattedDate=currentDate.toLocaleString();cookiesUpdatedMessage.textContent=`Cookies Updated: ${formattedDate}`;cookiesUpdatedMessage.style.display="block";customHeading.style.display="block"}},1000)}else{showErrorTwo("Failed to extract cookies from the content.")}}catch(error){console.error(`First fetch attempt failed: ${error.message}`);setTimeout(()=>{fetchGrammarlyCookiesTwo()},2000);showErrorTwo(`Error: ${error.message}`)}}
function showErrorTwo(message){const preContainer=document.getElementById("cookieContainerTwo");const loader=document.getElementById("loadingSpinnerTwo");loader.style.display="none";preContainer.textContent=message;preContainer.style.display="block"}
function handleCopyButtonClickTwo(){clickCountTwo++;const copyAllButton=document.getElementById("copyAllButtonTwo");if(clickCountTwo<6){copyAllButton.textContent=`${6 - clickCountTwo} click${6 - clickCountTwo > 1 ? "s" : ""} left to copy code`;const link=linksTwo[clickCountTwo-1];window.open(link,"_blank")}else if(clickCountTwo===6){copyContentTwo()}}
function copyContentTwo(){const preContainer=document.getElementById("cookieContainerTwo");const textToCopy=preContainer.textContent||preContainer.innerText;const copyAllButton=document.getElementById("copyAllButtonTwo");if(!textToCopy||preContainer.style.display==="none"){console.error("No content available to copy.");return}
navigator.clipboard.writeText(textToCopy).then(()=>{copyAllButton.textContent="Copied!";setTimeout(()=>{copyAllButton.textContent="Copy Code"},2000)}).catch(err=>{console.error("Failed to copy:",err);fallbackCopyTwo(textToCopy,copyAllButton)})}
function fallbackCopyTwo(text,button){const tempTextarea=document.createElement("textarea");tempTextarea.value=text;tempTextarea.style.position="fixed";tempTextarea.style.opacity="0";document.body.appendChild(tempTextarea);tempTextarea.select();const successful=document.execCommand("copy");document.body.removeChild(tempTextarea);if(successful){button.textContent="Copied!";setTimeout(()=>{button.textContent="Copy Code"},2000)}else{console.error("Failed to copy content.")}}
document.addEventListener("DOMContentLoaded",function(){setTimeout(fetchGrammarlyCookiesTwo,11000)});