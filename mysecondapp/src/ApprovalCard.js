import React from "react";

const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      <div className="comment">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui bassic green button">Approve</div>
          <div className="ui bassic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
