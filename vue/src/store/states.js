export default {
	state: {
		context: 'http://localhost:8080/',
		person: {},
		sidebars : [
                {menu:"학생목록",link:"/students"},
                {menu:"조건별 학생검색",link:"/studentsFindSome"},
				{menu:"학생성적수정",link:"/update"},
				{menu:"ID 학생검색",link:"/studentFindOne"}
			],
		authCheck: false,
		headerMessage: '공통 화면'
	}
}