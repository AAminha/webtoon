import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "components/css/MyPage.css";
import { dbService, authService } from "fbase";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "components/css/MyPage.css";

const MyPage = ({ userObj }) => {
	const history = useHistory();
	const [myWebtoon, setMyWebtoon] = useState([]);
	const [test, setTest] = useState([]);
	var newArr=[];
	
	useEffect(()=>{
		onCreate();
	},[])

	const onCreate = async() => {
		await dbService.collection("webtoon")
		.get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				if(doc.data().userId === userObj.uid) {
					newArr.push({
						key : doc.data().webtoonId,
						url : doc.data().url,
						image: doc.data().image,
						title: doc.data().title, 
						reader: doc.data().reader, 
						category: doc.data().category, 
						author: doc.data().author, 
						weekday: doc.data().weekday
					});
					setMyWebtoon(newArr);
					// 아래 코드는 의미없는 코드.. 원인을 모르겠음.
					setTest(test.concat({
						key : doc.data().webtoonId,
						url : doc.data().url,
						image: doc.data().image,
						title: doc.data().title, 
						reader: doc.data().reader, 
						category: doc.data().category, 
						author: doc.data().author, 
						weekday: doc.data().weekday
					}))
				}
			})
		})
	}

	const onClickLogOut = () => {
		authService.signOut();
		history.push("/");
		window.alert("로그아웃 되었습니다.");
	}


	return (
		<>
    <div className="mypage_container">
	    <div className="account_title">로그인한 계정</div>
			<div className="account_container">
				<img className="account_img" src={userObj._delegate.photoURL} />
				<div className="account_info">
					<div className="account_des">이름 : {userObj._delegate.displayName}</div>
					<div className="account_des">메일 : {userObj._delegate.email}</div>
					<button className="account_logBtn" onClick={onClickLogOut}>로그아웃</button>
				</div>
			</div>
    </div>
		<div className="mypage_container">
			<div className="fav_title">즐겨찾기한 웹툰</div>
			{myWebtoon.map((webtoon) => (
				<FavWebtoon
					key={webtoon.key}
					webtoon = {webtoon}
				/>)
			)}
		</div>
		</>
  )
}

const FavWebtoon = ({webtoon}) => {
	
	return(
		<>
			<div className="container">
        <a className="fav_info_container" href={webtoon.url}>
          <img className="fav_image" src={webtoon.image} />
          <div className="fav_info_main">
            <h2 className="fav_info_title">{webtoon.title}</h2>
            <div className="fav_info_sub">
              <FontAwesomeIcon className="user_icon" icon={faUser} />
              {`${((webtoon.reader) / 10000).toFixed(1)}만명 | ${webtoon.category} | ${webtoon.author}`}
            </div>
            <div className="fav_info_sub">
              {`연재 요일 / ${webtoon.weekday}`}
            </div>
          </div>
        </a>
      </div>
    </>
	)
}

export default MyPage;