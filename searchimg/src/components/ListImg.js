import ItemImg from "./ItemImg";

function ListImg({ images }) {
  // 전달받은 결과값(배열 데이터값)을 props로 받아옴.
  const renderImages = images.map((image) => {
    // 전달받은 데이터들의 하나하나의 이미지.
    return <ItemImg key={image.id} image={image} />;
    // 자식컴포넌트에게 프롭스로 전달.
    // 변하는 값들만 골라서 재랜더링 할 수 있게 => 효율적으로 값을 관리하기 위해 id마다 고유 키 값을 부여.
    // 키 값 부여 시 주의사항.
    //1. 문자열 혹은 숫자열로만 키 값을 부여할 수 있음.
    //2. 한 리스트 안에서만 유니크한 키 값을 가지면 됨.
    //3. 키값은 불변해야함. (=고정되어야, 일정해야함.)
    // 서버로부터 정보를 받아오는 것이 아니라면 index값을 받아서 key에 인덱스넘버로 받아와도 됨. -> 차안, 삼안급..
  });

  return <ul>{renderImages}</ul>;
  //map으로 차곡차곡 쌓인 images들 return 해주기.
}

export default ListImg;
