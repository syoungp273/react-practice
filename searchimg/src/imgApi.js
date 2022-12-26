// const searchImg = async () => {
//   let json;
//   const response = await fetch(
//     "https://api.unsplash.com/search/photos?query=flower&client_id=dq3lbmV6-6WQhCQvNFpqHbMsyTQR5BTilp5aTrJHa7E",
// 뿌리 api 주소, search/photo - 사진 찾아야하니까.
// query=flower - 꽃 사진들. client_id=____ - key(token)
// 서버에 꽃과 관련된 사진을 요청하는데, 이 시간을 기다리기 위해 await을 사용.
// pending - 아직 이행하지도, 거부하지도 않은 상태.
//     {
//       method: "GET",
//     }
//   );
//   if (response.ok) {
//     json = await response.json();
//     // body부분 또한 읽어들일 때 까지 기다려라.
//   } else {
//     alert("http error", +response.status);
//     // 어떤 식의 응답이 왔는지 확인해야함. error 핸들링을 만들어야함.
//   }

//   console.log(json);
// };
// 위 까지가 async, await, fetch를 이용해서 불러오기.

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

import axios from "axios";
// axios: 서버와 클라이언트 사이를 쉽게 통신하게 해주는 라이브러리.
const searchImg = async (keyword) => {
  // axios.method(->get)('url','객체형태의 서버로 보내는 정보들.')
  // axios는 기본적으로 json으로 응답받음.
  // responseType 사용해 전달받을 데이터 타입을 설정할 수도 있음.
  const response = await axios
    .get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID dq3lbmV6-6WQhCQvNFpqHbMsyTQR5BTilp5aTrJHa7E",
      },
      params: {
        query: keyword,
        //photos 뒤의 쿼리.
      },
    })
    // https://axios-http.com/kr/docs/interceptors 에러핸들링도 가능.
    .catch(function (error) {
      if (error.response) {
        // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
        // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
        // node.js에서는 http.ClientRequest 인스턴스입니다.
        console.log(error.request);
      } else {
        // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
        console.log("Error", error.message);
      }
      console.log(error.config);
    });

  return response.data.results;
};

export default searchImg;
