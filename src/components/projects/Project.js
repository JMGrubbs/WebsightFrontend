const DisplayProject = (props) => {
    return(
        <li>
            <div>
                <h3>Project One</h3>
                <p><a href="https://todos.johnmgrubbs.io" sx={{}}>Link to sight</a></p>
                <p>Stuff about this Project</p>
                <iframe src="https://todos.johnmgrubbs.io" width="400" height="150" title="todos"></iframe>
            </div>
        </li>
    )
}

export default DisplayProject;