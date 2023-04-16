
interface PrintMenuProps {
    strArray?: string[]
}

function PrintMenu(props: PrintMenuProps) {
    console.log(props.strArray)
    return (
        props.strArray && props.strArray.map(string => (
            <div className="cursor-pointer hover:bg-slate-800" onClick={() => { console.log("클릭") }}>{string}</div>
        ))
    )
}

export default PrintMenu