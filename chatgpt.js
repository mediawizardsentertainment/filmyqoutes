let clickCountTwo=0;const linksTwo=["https://irritatepillssurly.com/n5zeue1rt?key=4118d6de05154a8b409f693189aa5c8b","https://irritatepillssurly.com/mda3nbcax3?key=d0b8d02243b60d8fe5149eaa478213ef","https://irritatepillssurly.com/hqcy31erjz?key=cab5ae9f04479c27ecf27ed5f4a7496b","https://irritatepillssurly.com/dzuxwijy?key=d6a729b20e0b3c46d15e4478d0ee1d4b","https://irritatepillssurly.com/y4gsdhs1?key=364bb8c942775bcd18321c760529b9bd"];function decodeHTMLTwo(e){var t=(new DOMParser).parseFromString(e,"text/html");return t.body.textContent||t.body.innerText}async function fetchGrammarlyCookiesTwo(){const e=document.getElementById("cookieContainerTwo"),t=document.getElementById("loadingSpinnerTwo"),o=document.getElementById("copyAllButtonTwo"),n=document.getElementById("timerContainerTwo"),c=document.getElementById("countdownTimerTwo"),l=document.getElementById("cookiesUpdatedMessageTwo"),i=document.getElementById("customHeadingTwo");t.style.display="block",e.style.display="none",o.style.display="none",n.style.display="none",i.style.display="none";try{const s=await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent("https://filmyqoutes.com/cookies/get-chatgpt-premium-cookies-update-hourly/")}`);if(!s.ok)throw new Error("Failed to fetch the page content");const a=await s.text(),d=/var\s+textHostContent\s*=\s*"([\s\S]*?)";/,r=a.match(d);if(r&&r[1]){let s=r[1];s=decodeHTMLTwo(s).replace(/\\"/g,'"').replace(/\\\\/g,"\\").replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\\//g,"/").trim();let a=60;n.style.display="block";const d=setInterval((function(){if(c.textContent=a,a--,a<0){clearInterval(d),e.textContent=s,e.style.display="block",o.style.display="block",n.style.display="none",t.style.display="none";const c=(new Date).toLocaleString();l.textContent=`Cookies Updated: ${c}`,l.style.display="block",i.style.display="block"}}),1e3)}else showErrorTwo("Failed to extract cookies from the content.")}catch(e){console.error(`First fetch attempt failed: ${e.message}`),setTimeout((()=>{fetchGrammarlyCookiesTwo()}),2e3),showErrorTwo(`Error: ${e.message}`)}}function showErrorTwo(e){const t=document.getElementById("cookieContainerTwo");document.getElementById("loadingSpinnerTwo").style.display="none",t.textContent=e,t.style.display="block"}function handleCopyButtonClickTwo(){clickCountTwo++;const e=document.getElementById("copyAllButtonTwo");if(clickCountTwo<6){e.textContent=`${6-clickCountTwo} click${6-clickCountTwo>1?"s":""} left to copy code`;const t=linksTwo[clickCountTwo-1];window.open(t,"_blank")}else 6===clickCountTwo&&copyContentTwo()}function copyContentTwo(){const e=document.getElementById("cookieContainerTwo"),t=e.textContent||e.innerText,o=document.getElementById("copyAllButtonTwo");t&&"none"!==e.style.display?navigator.clipboard.writeText(t).then((()=>{o.textContent="Copied!",setTimeout((()=>{o.textContent="Copy Code"}),2e3)})).catch((e=>{console.error("Failed to copy:",e),fallbackCopyTwo(t,o)})):console.error("No content available to copy.")}function fallbackCopyTwo(e,t){const o=document.createElement("textarea");o.value=e,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select();const n=document.execCommand("copy");document.body.removeChild(o),n?(t.textContent="Copied!",setTimeout((()=>{t.textContent="Copy Code"}),2e3)):console.error("Failed to copy content.")}document.addEventListener("DOMContentLoaded",fetchGrammarlyCookiesTwo);
