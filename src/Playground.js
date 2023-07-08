import React from "react";
import "./Playground.less";
import { getCommentListWithSubscription } from './CommentListWithSubscription';
import { getStudentListWithSubscription } from './StudentListWithSubscription';

// write your component here
function Playground() {
    const id = 1;
    const CommentListWithSubscription = getCommentListWithSubscription(id);
    const StudentListWithSubscription = getStudentListWithSubscription(id);
    return (
        <div>
            <div>first comment list</div>
            <CommentListWithSubscription />
            <div>second student list</div>
            <StudentListWithSubscription />
        </div>
    )
}

export default Playground;
