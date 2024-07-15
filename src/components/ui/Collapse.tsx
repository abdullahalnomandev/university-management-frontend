"use client"

import React from 'react';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

interface ICollapsePageProps {
    items: {
        key: string;
        label: string;
        children: React.ReactNode;
    }[],
    onChange: (key: string | string[]) => void;
    defaultActiveKey: string[];
}

// Define the CollapsePage component
const UMCollapse: React.FC<ICollapsePageProps> = ({ items, onChange, defaultActiveKey = ['1'] }) => {

    return (
        <Collapse defaultActiveKey={defaultActiveKey} onChange={onChange} bordered={false}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        >
            {
                items?.map((item) => (
                    <Panel header={item?.label} key={item?.key}>
                        <p style={{ paddingLeft: 24 }}>{item?.children}</p>
                    </Panel>
                ))
            }
        </Collapse>
    );
};

export default UMCollapse;