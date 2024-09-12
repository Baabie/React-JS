function Login() {
    return(
        <div>
            <label htmlFor="email">E-mail</label>
            <input type="text" id="email"/>
            <ButtonReact label= "Home" bordaArredondada/>
            <Link to="/home">
                
            </Link>
        </div>
    )
}

export default Login