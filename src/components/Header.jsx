function Header(props) {
    // props => { title: "Home Title" }

    return (
        <header style={{ background: props.color }}>
            <h1>{props.title}</h1>
            <p>Name: {props.user.name}</p>
            <p>Age: {props.user.age}</p>
            <p>Phone: {props.user.phone}</p>
            <button onClick={props.sayWelcome}>Welcome</button>
        </header>
    );
}

export default Header;
