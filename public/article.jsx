function Article(props){
    return(<React.Fragment>
        <article>
            <PlusMinus section='article' handle={props.handle}/>
            <div className="section">Article:{props.data.article}</div>
            <Data data={props.data}/>
        </article> 
    </React.Fragment>)
}