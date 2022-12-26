import { useState } from "react";

// 하위컴포넌트에서 프롭스를 걸어 상위컴포넌트인 App.js로 보내기.
function SearchBar({ searching }) {
  //input 값 관리
  const [keyword, setKeyword] = useState("");
  const handleInp = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // form의 기본동작때문에 keyword값을 불러올 수 없음. preventDefault로 핸들링.
    searching(keyword);
  };
  return (
    <nav>
      {/*폼에 onSubmit걸면 엔터를 칠때 자동으로 검색할 수 있음.*/}
      <form onSubmit={handleSubmit}>
        <label htmlFor="keyword">검색어를 입력하세요</label>
        <input
          type="text"
          id="keyword"
          value={keyword} //유저가 입력하는 값
          onChange={handleInp}
        ></input>
        <button>검색</button>
      </form>
    </nav>
  );
}

export default SearchBar;
