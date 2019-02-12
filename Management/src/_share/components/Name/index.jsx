import React from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types'
const FormItem = Form.Item;

export default class Name extends React.Component {
    constructor() {
        super()
        this.state={
            value:''
        }
    }
    handleChange(value){
        this.setState({value})
        this.props.onChange&&this.props.onChange(value)
    }

    render() {
        const { getFieldDecorator, formItemLayout, fieldId, required, initialValue, formControll,message,label } = this.props;
        return (
            formControll ?
                <FormItem label={label} {...formItemLayout}>
                    {getFieldDecorator(fieldId,{
                        initialValue:initialValue,
                        rules:[{
                            required:required,message:message
                        }]
                    })(
                        <Input {...this.props}/>
                    )}
                </FormItem>
                :
                <Input {...this.props} value={this.state.value} onChange={this.handleChange.bind(this)} />
        )
    }
}

Name.PropTypes = {
    getFieldDecorator:PropTypes.func.isRequired, //form内必须
    formItemLayout:PropTypes.object,//表单的布局
    fieldId:PropTypes.string,//表单的id
    required:PropTypes.bool,//表单是否必填
    initialValue:PropTypes.string,//表单初始值
    formControll:PropTypes.bool,//是否启用表单
    label:PropTypes.string,//表单项文本
    message:PropTypes.string//表单状态必填时的提示信息
}

Name.defaultProps = {
    formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}},
    fieldId:"name",
    required:true,
    formControll:false,
    message:"名称必填",
    initialValue:'',
    label:'名称'
}