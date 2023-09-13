import '../styles/Columns.css';

function Columns(){

    return (
        <div className="container">

            <div className="column story">
                <h1>Story</h1>
                
            </div>

            <div className="column progress">
                <h1>Progress</h1>
            </div>

            <div className="column test">
                <h1>Test</h1>
            </div>

            <div className="column done">
                <h1>Done</h1>
            </div>

        </div>
    );
}

export default Columns;