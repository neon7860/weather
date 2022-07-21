import React from "react"

export default function Info(){
    return(
    <div className="Info--body">
        <img src={require('./ibby2.jpg')} />
        <h1>Muhammad Ibrahim</h1>
        <p className="Info--role">Frontend Developer</p>
        <a className="Info--portfolio" href="url">https://neon7860.github.io/</a>
        <div className="Info--buttons">
        <a href="mailto:neon7860@gmail.com"><button className="button1"><i className="fa-solid fa-envelope"></i>Email</button></a>
        <a href="https://www.linkedin.com/in/muhammad-ibrahim-3b8768205/"><button type="button" className="button2" href="https://www.linkedin.com/in/muhammad-ibrahim-3b8768205/"><i className="fa-brands fa-linkedin"></i>LinkedIn</button></a>
        </div>
    </div>
    )
}