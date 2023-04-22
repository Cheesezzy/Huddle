import { ReactNode } from "react"


interface Props {
    children: ReactNode;
}
const DefaultLayout = (props: Props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default DefaultLayout
