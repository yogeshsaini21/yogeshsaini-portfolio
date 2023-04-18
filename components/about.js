let aboutsection = () => {
    return `
    <div class="heading">
        <h2>About Me</h2>
        <span>Introduction</span>
    </div>
    <br>
    <!-- About Content -->
    <div class="about-container">
        <div class="about-img">
            <img src="./Images/pic3.png" alt="">
        </div>
        <div class="about-text">
            <p>I am very passionate about coding and strongly interested in enhancing the product experience.
                Problem Solving, collaborative, team player who is proficient in working with interdisciplinary
                teams and executing goal-oriented projects</p>
            <div class="information">
                <!-- Box 1 -->
                <div class="info-box">
                    <i class='bx bxs-user'></i>
                    <span>Yogesh Saini</span>
                </div>
                <!-- Box 2 -->
                <div class="info-box">
                    <i class='bx bxs-phone'></i>
                    <span>+91 9352269804</span>
                </div>
                <!-- Box 3 -->
                <div class="info-box">
                    <i class='bx bxs-envelope'></i>
                    <span> <a style="color: black;" href="mailto:yogesh000saini@gmail.com" target="_blank">yogesh000saini@gmail.com</a></span>
                </div>
            </div>
            <a download href="https://drive.google.com/file/d/1hO0BxIGOt8wyWwkQ7l99sfSae8AMONJF/view?usp=sharing" target="_blank" class="btn">Resume</a>
             <a download href="./Images/Resume.pdf" target="_blank" class="btn">Download</a>
           
          
        </div>
    </div>
    `
}

export default aboutsection;