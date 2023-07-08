import React from 'react';
import { List } from 'antd';
import { WithSubscription } from "./subscribeData";
import { DataSource } from "./utils";

function StudentList({data}) {
    return <List dataSource={data} renderItem={item=>(
        <List.Item>this is a student {item}</List.Item>
    )} />
}

export const getStudentListWithSubscription = (id) => {
    return WithSubscription(StudentList, () => DataSource.getStudents(id))
};
