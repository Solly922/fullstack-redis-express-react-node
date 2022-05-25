function Right(props){
    return(<React.Fragment>
        <aside>
            <PlusMinus section='right' handle={props.handle}/>
            <div className="section">Right:{props.data.right}</div>
            <Data data={props.data}/>
        </aside>
    </React.Fragment>)
}