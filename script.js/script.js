const resumeDoc = document.getElementById('resume-doc');
const resumeWrapper = document.getElementById('resume-wrapper');
const closeResumeBtn = document.getElementById('close-resume-btn');

if (resumeDoc && resumeWrapper) {
  resumeDoc.addEventListener('click', () => {
    resumeWrapper.style.display = 'flex';
    void resumeWrapper.offsetWidth;
    resumeWrapper.classList.add('open');
  });
}

if (closeResumeBtn && resumeWrapper) {
  closeResumeBtn.addEventListener('click', () => {
    resumeWrapper.classList.remove('open');
    setTimeout(() => { resumeWrapper.style.display = 'none'; }, 300);
  });
}

   
const sandsDoc = document.getElementById('sands-doc');
const sandsWrapper = document.getElementById('sands-wrapper');
const closeSandsBtn = document.getElementById('close-sands-btn');

sandsDoc.addEventListener('click', () => {
  sandsWrapper.style.display = 'block';
  setTimeout(() => {
    sandsWrapper.classList.add('open');
  }, 10);
});

closeSandsBtn.addEventListener('click', () => {
  sandsWrapper.classList.remove('open');
  setTimeout(() => {
    sandsWrapper.style.display = 'none';
  }, 300);
});