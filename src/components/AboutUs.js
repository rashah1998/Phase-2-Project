
function AboutUs(){

    const githubIcon = "https://camo.githubusercontent.com/4133dc1cd4511d4a292b84ce10e52e4ed92569fb2a8165381c9c47be5edc2796/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f706e672f6769746875622e706e67"
    const linkedinIcon ="https://camo.githubusercontent.com/c8a9c5b414cd812ad6a97a46c29af67239ddaeae08c41724ff7d945fb4c047e5/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6c696e6b6564696e2e737667"
     function myClick() {
        alert("Too Bad, Deal with it tho 🙂");
    }
    return(
            <div>
                <h1>idk what to write here for now</h1>
                <div className="iconBox">
                    <a href="https://github.com/WaelAGomaa" class="icon-wrapper">
                        <img className="icon" src={githubIcon}/>
                    </a>
                    <a href="https://www.linkedin.com/in/wael-gomaa-b7a827231/" class="icon-wrapper">
                        <img className="icon" src={linkedinIcon}/>
                    </a>
                    <a href="https://github.com/rashah1998" class="icon-wrapper">
                        <img className="icon" src={githubIcon}/>
                    </a>
                    <a href="https://www.linkedin.com/in/rahulshah98/" class="icon-wrapper">
                        <img className="icon" src={linkedinIcon}/>
                    </a>
                   
                    <button id="problemBtn"onClick={myClick}>
                   Facing a Problem?
                </button>
        
                </div>
            </div>
    )
}
export default AboutUs;
