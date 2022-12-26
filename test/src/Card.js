import "./Card.css";
import style from "./Card.module.css";
import styled from "styled-components";

const Round = styled.figure`
  border-radius: 0.9rem;
  /* 태그된 템플릿(Tagged templates)
함수 뒤에 템플릿리터럴을 붙이면, 붙여준 템플릿리터럴을 원소로하는 배열을 첫번째 인자로 함수가 실행되도록 합니다.

이때 실행되는 함수를 태그 함수, 사용된 템플릿리터럴을 태그된 템플릿이라 부릅니다. */
`;

const Strong = styled.strong`
  color: ${(props) => props.txtColor};
`;

function Card({ title, text, imgUrl }) {
  const txtColor =
    title === "랫서판다" ? "red" : title === "북극여우" ? "blue" : "yellow";

  return (
    <Round className={`w-1/3 max-w-sm rounded overflow-hidden shadow-lg px-2`}>
      {/* <figure className={`w-1/3 max-w-sm rounded overflow-hidden shadow-lg px-2 ${style.rounded}`}> */}
      <img
        src={imgUrl}
        alt=""
        className="w-full object-cover object-top h-48"
      />
      <figcaption className="px-6 py-4">
        <Strong txtColor={txtColor} className="font-bold text-xl mb-2">
          {title}
        </Strong>
        {/* <strong className="font-bold text-xl mb-2">{title}</strong> */}
        <p className="text-gray-700 text-base">{text}</p>
      </figcaption>
      {/* </figure> */}
    </Round>
  );
}

export default Card;
