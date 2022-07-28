import "./Form.css";
import {Result} from "./FormTypes";
import React, {FC, useCallback, useState} from 'react';
import {Button, Form as AntdForm} from "antd";
import SelectCompanyRelation from "../SelectCompanyRelation/SelectCompanyRelation";
import SelectCompanyPosition from "../SelectCompanyPosition/SelectCompanyPosition";
import TextArea from "../TextArea/TextArea";
import TextInput from "../TextInput/TextInput";
import PrintJSON from "../PrintJSON/PrintJSON";
import * as Definitions from "./Definitions";

const Form:FC = () => {
    const [result, setResult] = useState<Result>(null);
    const [form] = AntdForm.useForm();
    const onFinish = useCallback((value: Result) => {
        setResult(value);
    }, []);
    const backToForm = useCallback(() => {
        setResult(null);
    }, []);

    if (result) {
        return (
            <div className='centering result'>
                <PrintJSON header='Result:' data={result}/>
                <Button onClick={backToForm}>Back to form</Button>
            </div>
        )
    }

    return (
        <div className='centering form'>
            <h1>Form:</h1>
            <AntdForm form={form} onFinish={onFinish}>
                <AntdForm.Item name="selectCompanyRelation" rules={Definitions.selectRules} help=''>
                    <SelectCompanyRelation label={'Company Relation'} />
                </AntdForm.Item>
                <AntdForm.Item name="selectCompanyPosition" rules={Definitions.selectRules} help=''>
                    <SelectCompanyPosition  label={'Company Position'} />
                </AntdForm.Item>
                <AntdForm.Item name="textInput" rules={Definitions.inputRules} help=''>
                    <TextInput label={'Text Input'} />
                </AntdForm.Item>
                <AntdForm.Item name="textArea" rules={Definitions.inputRules} help=''>
                    <TextArea label={'Text Area'} />
                </AntdForm.Item>
                <AntdForm.Item>
                    <Button htmlType="submit">Send</Button>
                </AntdForm.Item>
            </AntdForm>
        </div>
    );
};

export default Form;