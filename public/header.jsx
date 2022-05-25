function Header(props){
    return(
    <React.Fragment>
        <header>
            <PlusMinus section='header' handle={props.handle}/>
            <div className="section">Header:{props.data.header}</div>
            <Data data={props.data}/>
        </header>
    </React.Fragment>
    )
}