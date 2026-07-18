export function Button(props) {
    return <div style={{padding: "10px 30px", cursor: "pointer", border: "1px solid black", borderRadius: 5, display:"flex"}} onClick={props.onClick}>
        <div style={{display: "flex", alignItems: "center", paddingRight: 10}}>
            {props.leftIcon}
        </div>
        {props.children}
        <div style={{display: "flex", alignItems: "center", paddingLeft: 10}}>
            {props.rigthIcon}
        </div>

    </div>
}