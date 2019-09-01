import React from "react";
import {
    Form,
    Input
} from "antd";
import {
    Constants
} from "../../constants";
import {
    withRouter
} from "react-router-dom";
import GenericButton from "../GenericButton";

const {
    TextArea
} = Input;

/**
 * Add Article component 
 * @prop {object} this.props.form, using ant-design form
 */
class Add extends React.Component {

    goToListView = () => {
        this
            .props
            .history
            .push(Constants.articleList);
    }

    handleSubmit = e => {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    this.props.addArticle(values);
                    this.goToListView();
                }
            });
    };

    render() {
        
        const {
            getFieldDecorator
        } = this.props.form;

        return (
            <Form
                style={{
                padding: 20
            }}
                onSubmit={this.handleSubmit}>
                <Form.Item label="Title">
                    {getFieldDecorator("title", {
                        rules: [
                            {
                                required: true,
                                message: Constants.inputYourTitle
                            }
                        ]
                    })(<Input/>)}
                </Form.Item>
                <Form.Item label="Article">
                    {getFieldDecorator("article", {
                        rules: [
                            {
                                required: true,
                                message:  Constants.writeYourArticle
                            },
                            {
                                min: 100,
                                message: Constants.addMinCharacters
                            }
                        ]
                    })(<TextArea rows={10}/>)}
                </Form.Item>
                <Form.Item label="Image URL">
                    {getFieldDecorator("imgUrl", {})(<Input/>)}
                </Form.Item>
                <Form.Item>
                <GenericButton
                        type="link"
                        text="Send the article"
                        style={{
                        background: "white",
                        color: "#006ecf",
                        width: "170px",
                        padding: "0 10px",
                        border: "1px solid #006ecf",
                        float: "right"
                    }}/>
                </Form.Item>
            </Form>
        );
    }
}

const AddArticle = withRouter(Form.create({
    name: "article-form"
})(Add));

export default AddArticle;