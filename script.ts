//refernce of form and display area

const form= document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement =document.getElementById('resume-display') as HTMLDivElement;


//handle form submission

form.addEventListener('submit',(event: Event)=> {
    event.preventDefault();  

    //collect input value

    const name =(document.getElementById('name')as HTMLInputElement).value
    const email =(document.getElementById('email')as HTMLInputElement).value
    const phone =(document.getElementById('phone')as HTMLInputElement).value
    const education =(document.getElementById('education')as HTMLInputElement).value
    const experience =(document.getElementById('experience')as HTMLInputElement).value
    const skills =(document.getElementById('skills')as HTMLInputElement).value

    //genereate resume content dynamicly
    const resumeHTML =`
    <h2><b> EditableResume</b></h2>
    <h3> Personal information</h3>
    <p><b>Name:<b/><span contenteditable="true">${name}</span></p>
     <p><b>Email:<b/><span contenteditable="true"${email}</span></p>
      <p><b>Phone:<b/><span contenteditable="true"${phone}</span></p>
     
      <h3> Education </h3>
      <p  contenteditable="true">${education}</p>

     <h3>Experience</h3>
      <p  contenteditable="true">${experience}</p>

      <h3> Skills</h3>
      <p  contenteditable="true">${skills}</p>
      `;
//display genert resume
if (resumeDisplayElement){
    resumeDisplayElement.innerHTML=resumeHTML;
}else{
    console.error('Resume dispaly element is missing');
}

})