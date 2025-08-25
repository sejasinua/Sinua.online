export default function Links(props) {
    return(
        <li className="p-link relative after:content-[''] after:w-full after:h-[3px] after:bg-black after:absolute after:bottom-[-3px] after:left-0 after:rounded-[8px] after:transition-transform after:duration-[600ms] after:scale-x-[0] after:origin-right hover:after:scale-x-[1] hover:after:origin-left">
            <a href={props.link} target={props.target} >{props.name}</a>
        </li>
    )
}