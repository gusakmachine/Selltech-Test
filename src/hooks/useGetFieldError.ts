import {Form} from "antd";

export default function useGetFieldError(name?: string) {
    const form = Form.useFormInstance();
    const {status} = Form.Item.useStatus();
    return (name && status === 'error')? form.getFieldError(name) : [];
}