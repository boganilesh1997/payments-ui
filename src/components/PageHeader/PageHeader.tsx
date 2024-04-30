import Menu from "./Menu";
import './PageHeader.css'

const PageHeader = ():JSX.Element => {
    return(
        <div className="pageHeader">
            <h1>Payments Application</h1>
            <Menu/>
        </div>
    )
}

export default PageHeader;