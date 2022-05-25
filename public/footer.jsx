function Footer(props) {
    return(<React.Fragment>
        <footer>
            <PlusMinus section='footer' handle={props.handle}/>
            <div className="section">Footer:{props.data.footer}</div>
            <Data data={props.data}/>
        </footer>
    </React.Fragment>)
}