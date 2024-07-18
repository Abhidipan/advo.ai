import {account} from "../appwriteConfig";

const SocialAuth = () => {

    const googleAuth = (e) => {
        e.preventDefault();
        try{
            account.createOAuth2Session('google', 'https://localhost:5173/', 'https://localhost:5173/login');
        }catch(e){
            console.log(e.message);
        }
    }

    const appleAuth = (e) => {
        e.preventDefault();
        try{
            account.createOAuth2Session('apple', 'https://localhost:5173/', 'https://localhost:5173/login');
        }catch(e){
            console.log(e.message);
        }
    }

    return (
        <div className='container1'>
            <div className="auth-lines">
                <div className="auth-line"></div>
                <p>or continue with</p>
                <div className="auth-line"></div>
            </div>

            <div className="social-auth-container">
                <button className="social-auth-button google" onClick={(e)=> googleAuth(e)}>Google</button>
            </div>
            <div className="social-auth-container">
                <button className="social-auth-button apple" onClick={(e)=> googleAuth(e)}>Apple</button>
            </div>
        </div>
    );
};

export default SocialAuth;