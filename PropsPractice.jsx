import React from "react";

const PropsPractice = (props) => {
  const { data, name, children, age } = props;
  return (
    <div>
      props 연습 - {data} <br />
      props 연습2 - {name} <br />
      컴포넌트 사이의 내용 - {children} <br />
      props 연습3 - {age}
    </div>
  );
};

PropsPractice.defaultProps = {
  age: "17살입니다",
};
export default PropsPractice;
