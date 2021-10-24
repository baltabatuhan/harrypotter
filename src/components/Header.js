import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";

const { Header: AntHeader } = Layout;

function Header() {
    return (
        <Layout>
            <AntHeader className="header" style={{ backgroundColor: "#3D0000" }}>

                <Menu theme="dark" mode="horizontal" className="header-menu" style={{ backgroundColor: "#3D0000" }}>
                    <Menu.Item key="1" style><Link to="/">Agents</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/weapons">Weapons</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/maps">Maps</Link></Menu.Item>


                </Menu>
            </AntHeader>
        </Layout>
    );
}

export default Header;