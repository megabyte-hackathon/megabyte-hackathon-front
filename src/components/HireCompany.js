import styled from "styled-components";

const HireCompany = ({
  deadline,
  id,
  condition,
  company,
  department,
  position,
  career,
  hirestate,
  liClick,
  setClicked,
  index,
  taste,
}) => {
  return (
    <HireLi
      onClick={(e) => {
        liClick(e, index);
        setClicked(id);
      }}
    >
      {taste !== index ? (
        <div>
          <div className="top">
            <h2>
              마감일: {deadline} ({condition})
            </h2>
          </div>
          <h1>{company}</h1>
          <p>
            {department}
            <br />
            {position}
          </p>
          <div className="career">
            <span>{career === 0 ? "경력무관" : career + " 년 이상"}</span>
            <span>{hirestate}</span>
          </div>
          <button>
            <svg
              width="16"
              height="7"
              viewBox="0 0 16 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6H15L10 1"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className="taste">
          <h1>{company} 근처에</h1>
          <p>
            총 <span className="count">128</span>개의 <span>맛집</span>이{" "}
          </p>
          <p>당신을 기다리고 있어요</p>
          <button>맛집보기</button>
        </div>
      )}
    </HireLi>
  );
};

const HireLi = styled.li`
  display: block;
  background-color: #ffffff;
  height: 224px;
  border: 1px solid #e5e5ec;
  box-sizing: border-box;
  border-radius: 16px;
  position: relative;
  margin: 0 10px;
  div {
    .top {
      width: 190px;
      border-bottom: 1px solid #f0f0f7;
      margin: 0 24px;
      h2 {
        color: #ff3636;
        font-size: 14px;
        line-height: 20px;
      }
    }
    h1 {
      color: #505050;
      font-size: 14px;
      line-height: 20px;
      margin-top: 8px;
    }
    p {
      color: #111111;
      font-size: 16px;
      line-height: 23px;
      margin-top: 4px;
    }
    button {
      border: none;
      width: 36px;
      height: 36px;
      background-color: #4876ef;
      box-sizing: border-box;
      border-radius: 24px;
      position: absolute;
      bottom: 24px;
      right: 24px;
      padding-bottom: 6px;
    }
  }
  .taste {
    width: 238px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #767676;
      margin-top: 38px;
      margin-bottom: 20px;
    }
    p {
      margin: 0;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #505050;
    }
    span {
      font-weight: bold;
      font-size: 1rem;
    }
    .count {
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      color: #4876ef;
      margin: 0;
    }

    button {
      border: none;
      width: 107px;
      height: 35px;
      box-sizing: border-box;
      border-radius: 24px;
      position: absolute;
      bottom: 24px;
      left: 66px;
      padding-bottom: 6px;
      color: #4876ef;
      border: 1px solid #4876ef;
      background-color: #ffffff;
      padding-top: 5px;
      &:hover {
        background-color: #4876ef;
        color: #ffffff;
      }
    }
  }
`;

export default HireCompany;
