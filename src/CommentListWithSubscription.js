import React from 'react';
import { List } from 'antd';
import { WithSubscription } from "./subscribeData";
import { DataSource } from "./utils";

function CommentList({data}) {
    return <List dataSource={data} renderItem={item=>(
        <List.Item>{item}</List.Item>
    )} />
}

export const getCommentListWithSubscription = (id) => {
    return WithSubscription(CommentList, () => DataSource.getStudents(id))
};