"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useDepartmentQuery, useUpdateDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

interface IDProps {
  params: any;
}
const EditDepartmentPage = ({ params }: IDProps) => {

  const { id } = params;
  const { data, isLoading } = useDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();
 
  const onSubmit = async (values: {title:string}) => {
    message.loading("updating...");

    try {
      console.log("DELETE",{ id, body: values })
      await updateDepartment({ id, body: values });

      message.success("Department updated successfully.");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
console.log('getData', data);
//   @ts-ignore
  const defaultValues = {
    title:data?.title || "",
  }
  console.log('default values',defaultValues);
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `super_admin`, link: `/super_admin` },
          { label: "department", link: `/super_admin/management/department` },
        ]}
      />

      <ActionBar title="Update Department" />
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartmentPage;
