import React, {
    Component
} from "react";
import {
    Layout
} from "antd";
import {
    withRouter
} from "react-router-dom";

import AppRoute from "./route";
import "./app.less";
import Header from "comps/Header";
import Footer from "comps/Footer";

/**
 * AppLayout for amking the app main layout
 */
class AppLayout extends Component {
    render() {
        return (
            <div className="app-container">
                <Layout>
                    <Layout.Content className="layout-container">
                        <Header/>
                            <AppRoute/>
                        <Footer/>
                    </Layout.Content>
                </Layout>
            </div>
        );
    }
}

export default withRouter(AppLayout);
