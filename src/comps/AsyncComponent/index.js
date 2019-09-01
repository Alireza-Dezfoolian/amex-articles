import React, {
    Component
} from "react";

/**
 * Async component to load the comp asynchronouslly
 * @prop {style} style
 */
export default function AsyncComponent(importComponent) {

    class AsyncComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                component: null
            };
        }

        // use async await to load bundle
        async componentDidMount() {
            // load the default component from the loaded bundle
            const {default: component} = await importComponent();
            this.setState({component});
        }

        render() {
            const Component = this.state.component;
            return Component
                ? <Component {...this.props}/>
                : <div
                    style={{
                    margin: "0 auto",
                    width: "100%",
                    height: "1000px"
                }}>
                </div>;
        }
    }

    return AsyncComponent;
}
