import React, { Component } from 'react';
import { message, PwdStatus } from 'basicUI';
import { Form, Modal, Button, Radio, Select, Input } from 'antd';
import { userService } from 'services';
import { hashHistory } from 'react-router';
const FormItem = Form.Item;

class ResetPwdForm extends Component {
  state = {
    confirmDirty: false,
    pwdValue: '',
    value: ''
  };
  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    this.setState({ pwdValue: value });
    if (this.passwordVerification(value) == true) {
      callback();
    } else {
      callback('密码长度为6到20');
    }
  };
  passwordVerification(value) {
    if (value && (value.length > 20 || value.length < 6)) {
      return '密码最少6位';
    } else {
      return true;
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 6 }
    };
    //对动作的操作的样式
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 2 }
      }
    };
    const pwdOpt = {
      value: this.state.pwdValue
    };
    return (
      <div style={{ marginTop: '30px' }}>
        <Form>
          <FormItem {...formItemLayout} label="新密码">
            {getFieldDecorator('new_password', {
              rules: [
                {
                  validator: this.checkConfirm
                }
              ],
              initialValue: ''
            })(
              <span>
                <Input type="password" />
                <PwdStatus {...pwdOpt} />
              </span>
            )}
          </FormItem>
        </Form>
      </div>
    );
  }
}
const ResetPwd = Form.create()(ResetPwdForm);
export default ResetPwd;
