import LoginForm from "../components/Login/LoginForm"


const Login = () => {

    return (
        <div className="container pt-5">
            <div className="row justify-content-center text-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title pb-3 fw-bold">Login</h4>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login