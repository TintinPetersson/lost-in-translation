import LoginForm from "./LoginForm"


const Login = () => {

    return (
        <div className="container">
            <div className="row justify-content-center text-center pt-5">
                <div className="col-md-4 pt-5">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title pb-3 fw-bold">Login</h4>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
            <div className="robot-image">
                <img src='img/Logo-Hello.png'
                    className='img-fluid imgs'
                    alt='robot' />
            </div>
        </div>
    )
}

export default Login