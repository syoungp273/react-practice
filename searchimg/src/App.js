import { useState } from "react";
import searchImg from "./imgApi";
import SearchBar from "./components/SearchBar";
import ListImg from "./components/ListImg";

function App() {
  const [images, setImages] = useState([]);
  // 들어오는 결과값이 배열이라 빈배열로 기본값 걸기.

  const handleKeyword = async (keyword) => {
    const result = await searchImg(keyword);
    // api를 가져오고 유저가 입력한 검색값이 들어감.
    // 데이터를 요청하는 로직이 담긴 searchImg에 await을 걸어서 기다리라고 명령.

    setImages(result);
    // result에 결과값이 다 담겨있는데 state로 관리하는지?
    // -> 데이터(결과값)의 변화가 일어날 때에도 새로 뿌려줘야하니까.
    console.log(result);
  };
  return (
    <div>
      <SearchBar searching={handleKeyword} />
      <ListImg images={images} />
    </div>
  );
}

export default App;
