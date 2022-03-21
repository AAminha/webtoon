import React from "react";
import "components/css/MyPage.css";

const MyPage = ({ webtoons, userObj }) => {

  return (
    <div className="main_container">
	    <div>로그인한 계정</div>
			<div>
				<img src={userObj._delegate.photoURL} />
				<div>{userObj._delegate.displayName}</div>
				<div>{userObj._delegate.email}</div>

			</div>
    </div>
  )
}

export default MyPage;