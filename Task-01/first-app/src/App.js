import logo from './logo.svg';
import './App.css';
import InputGroup from "./components/InputGroup";
import Button from "./components/Button";

// App.jsx

function App() {
    return (
        <div style={{
            width: '50%',
            margin: '2rem auto',
            padding: '2rem',
            backgroundColor: '#fff',
        }}>
            <div style={{
                textAlign: 'center',
                marginBottom: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}>
                <h3 style={{
                    fontFamily: 'Arial',
                    fontSize: '2rem',
                    color: '#222',
                }}>Sign Up</h3>
                <p style={{
                    fontFamily: 'Arial',
                    fontSize: '1rem',
                    color: '#666',
                }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, similique!
                </p>
            </div>

            <form>
                {/*<div style={{*/}
                {/*    display: 'flex',*/}
                {/*    flexDirection: 'column',*/}
                {/*    gap: '0.5rem',*/}
                {/*    marginBottom: '1rem',*/}
                {/*}}>*/}
                {/*    <label style={{*/}
                {/*        fontFamily: 'Arial',*/}
                {/*        fontSize: '1rem',*/}
                {/*        color: '#424242',*/}
                {/*        fontWeight: 'bold',*/}
                {/*    }} htmlFor="name">What is your name?</label>*/}
                {/*    <input style={{*/}
                {/*        padding: '0.5rem 1rem',*/}
                {/*        outline: 'none',*/}
                {/*        border: '1px solid #ddd',*/}
                {/*        borderRadius: '0.15rem',*/}
                {/*        fontSize: '0.9rem',*/}
                {/*        color: '#666',*/}
                {/*        fontFamily: 'Arial',*/}
                {/*    }} type="text" id="name"/>*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    <label htmlFor="email">What is your email?</label>*/}
                {/*    <input type="email" id="email"/>*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    <label htmlFor="password">What is your password?</label>*/}
                {/*    <input type="password" id="password"/>*/}
                {/*</div>*/}

                <InputGroup label = "What is your name?" type="text" id="name"/>
                <InputGroup label = "What is your email?" type="email" id="email"/>
                <InputGroup label = "What is your password?" type="password" id="password"/>

                <div>
                    {/*<button type="reset">Reset</button>*/}
                    {/*<button type="submit">Submit</button>*/}
                    <Button type="reset" text="Reset" variant="warning" size="small"/>
                    <Button type="submit" text="Submit" variant="primary" size="medium"/>
                    <Button type="button" text="Cancel" variant="error" size="large"/>
                </div>
            </form>
        </div>
    );
}

export default App;
