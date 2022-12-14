import "./index.css";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import basketball_img from "./Images/Basketball1.jpeg";
import chess_img from "./Images/Chess1.jpeg";
import dance_img from "./Images/Dance.jpeg";
import football_img from "./Images/Football1.jpeg";
import instruments_img from "./Images/Instruments.jpeg";
import karate_img from "./Images/karate.jpeg";
import math_img from "./Images/Math1.jpeg";
import science_img from "./Images/Science1.jpeg";
import { pushStudentInfo } from "./lib/init-firebase";

function SignUp() {
  const [page, setPage] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [basketball, setBasketball] = useState(false);
  const [dance, setDance] = useState(false);
  const [chess, setChess] = useState(false);
  const [football, setFootball] = useState(false);
  const [instruments, setInstruments] = useState(false);
  const [karate, setKarate] = useState(false);
  const [math, setMath] = useState(false);
  const [science, setScience] = useState(false);


  return (
    <>
      {page === 0 ? (
        <Form className="sign-up-box">
          <h1 className="sign-up-title">New? Sign Up</h1>
          <Form.Group className="mb-3 sign-up-input" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 sign-up-input" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 sign-up-input"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
          </Form.Group>
          <svg
            width="112"
            height="40"
            viewBox="0 0 112 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setPage(1)}
            style={{ cursor: "pointer" }}
          >
            <rect x="1" y="1" width="110" height="38" rx="7" fill="white" />
            <path
              d="M17.294 26V14.3636H24.5099V15.875H19.0497V19.4205H23.9929V20.9261H19.0497V26H17.294ZM26.5327 26V17.2727H28.2315V26H26.5327ZM27.3906 15.9261C27.0952 15.9261 26.8414 15.8277 26.6293 15.6307C26.4209 15.4299 26.3168 15.1913 26.3168 14.9148C26.3168 14.6345 26.4209 14.3958 26.6293 14.1989C26.8414 13.9981 27.0952 13.8977 27.3906 13.8977C27.6861 13.8977 27.938 13.9981 28.1463 14.1989C28.3584 14.3958 28.4645 14.6345 28.4645 14.9148C28.4645 15.1913 28.3584 15.4299 28.1463 15.6307C27.938 15.8277 27.6861 15.9261 27.3906 15.9261ZM32.2159 20.8182V26H30.517V17.2727H32.1477V18.6932H32.2557C32.4564 18.2311 32.7708 17.8598 33.1989 17.5795C33.6307 17.2992 34.1742 17.1591 34.8295 17.1591C35.4242 17.1591 35.9451 17.2841 36.392 17.5341C36.839 17.7803 37.1856 18.1477 37.4318 18.6364C37.678 19.125 37.8011 19.7292 37.8011 20.4489V26H36.1023V20.6534C36.1023 20.0208 35.9375 19.5265 35.608 19.1705C35.2784 18.8106 34.8258 18.6307 34.25 18.6307C33.8561 18.6307 33.5057 18.7159 33.1989 18.8864C32.8958 19.0568 32.6553 19.3068 32.4773 19.6364C32.303 19.9621 32.2159 20.3561 32.2159 20.8182ZM42.6193 26.1932C42.0663 26.1932 41.5663 26.0909 41.1193 25.8864C40.6723 25.678 40.3182 25.3769 40.0568 24.983C39.7992 24.589 39.6705 24.1061 39.6705 23.5341C39.6705 23.0417 39.7652 22.6364 39.9545 22.3182C40.1439 22 40.3996 21.7481 40.7216 21.5625C41.0436 21.3769 41.4034 21.2367 41.8011 21.142C42.1989 21.0473 42.6042 20.9754 43.017 20.9261C43.5398 20.8655 43.964 20.8163 44.2898 20.7784C44.6155 20.7367 44.8523 20.6705 45 20.5795C45.1477 20.4886 45.2216 20.3409 45.2216 20.1364V20.0966C45.2216 19.6004 45.0814 19.2159 44.8011 18.9432C44.5246 18.6705 44.1117 18.5341 43.5625 18.5341C42.9905 18.5341 42.5398 18.661 42.2102 18.9148C41.8845 19.1648 41.6591 19.4432 41.5341 19.75L39.9375 19.3864C40.1269 18.8561 40.4034 18.428 40.767 18.1023C41.1345 17.7727 41.5568 17.5341 42.0341 17.3864C42.5114 17.2348 43.0133 17.1591 43.5398 17.1591C43.8883 17.1591 44.2576 17.2008 44.6477 17.2841C45.0417 17.3636 45.4091 17.5114 45.75 17.7273C46.0947 17.9432 46.3769 18.2519 46.5966 18.6534C46.8163 19.0511 46.9261 19.5682 46.9261 20.2045V26H45.267V24.8068H45.1989C45.089 25.0265 44.9242 25.2424 44.7045 25.4545C44.4848 25.6667 44.2027 25.8428 43.858 25.983C43.5133 26.1231 43.1004 26.1932 42.6193 26.1932ZM42.9886 24.8295C43.4583 24.8295 43.8598 24.7367 44.1932 24.5511C44.5303 24.3655 44.786 24.1231 44.9602 23.8239C45.1383 23.5208 45.2273 23.197 45.2273 22.8523V21.7273C45.1667 21.7879 45.0492 21.8447 44.875 21.8977C44.7045 21.947 44.5095 21.9905 44.2898 22.0284C44.0701 22.0625 43.8561 22.0947 43.6477 22.125C43.4394 22.1515 43.2652 22.1742 43.125 22.1932C42.7955 22.2348 42.4943 22.3049 42.2216 22.4034C41.9527 22.5019 41.7367 22.6439 41.5739 22.8295C41.4148 23.0114 41.3352 23.2538 41.3352 23.5568C41.3352 23.9773 41.4905 24.2955 41.8011 24.5114C42.1117 24.7235 42.5076 24.8295 42.9886 24.8295ZM50.8878 14.3636V26H49.1889V14.3636H50.8878ZM53.1733 26V17.2727H54.8722V26H53.1733ZM54.0312 15.9261C53.7358 15.9261 53.482 15.8277 53.2699 15.6307C53.0616 15.4299 52.9574 15.1913 52.9574 14.9148C52.9574 14.6345 53.0616 14.3958 53.2699 14.1989C53.482 13.9981 53.7358 13.8977 54.0312 13.8977C54.3267 13.8977 54.5786 13.9981 54.7869 14.1989C54.9991 14.3958 55.1051 14.6345 55.1051 14.9148C55.1051 15.1913 54.9991 15.4299 54.7869 15.6307C54.5786 15.8277 54.3267 15.9261 54.0312 15.9261ZM56.9759 26V24.8352L61.7031 18.8295V18.75H57.1293V17.2727H63.8224V18.5114L59.277 24.4432V24.5227H63.9815V26H56.9759ZM69.4972 26.1761C68.6373 26.1761 67.8968 25.9924 67.2756 25.625C66.6581 25.2538 66.1809 24.733 65.8438 24.0625C65.5104 23.3883 65.3438 22.5985 65.3438 21.6932C65.3438 20.7992 65.5104 20.0114 65.8438 19.3295C66.1809 18.6477 66.6506 18.1155 67.2528 17.733C67.8589 17.3504 68.5672 17.1591 69.3778 17.1591C69.8703 17.1591 70.3475 17.2405 70.8097 17.4034C71.2718 17.5663 71.6866 17.822 72.054 18.1705C72.4214 18.5189 72.7112 18.9716 72.9233 19.5284C73.1354 20.0814 73.2415 20.7538 73.2415 21.5455V22.1477H66.304V20.875H71.5767C71.5767 20.428 71.4858 20.0322 71.304 19.6875C71.1222 19.339 70.8665 19.0644 70.5369 18.8636C70.2112 18.6629 69.8286 18.5625 69.3892 18.5625C68.9119 18.5625 68.4953 18.6799 68.1392 18.9148C67.7869 19.1458 67.5142 19.4489 67.321 19.8239C67.1316 20.1951 67.0369 20.5985 67.0369 21.0341V22.0284C67.0369 22.6117 67.1392 23.108 67.3438 23.517C67.5521 23.9261 67.8419 24.2386 68.2131 24.4545C68.5843 24.6667 69.018 24.7727 69.5142 24.7727C69.8362 24.7727 70.1297 24.7273 70.3949 24.6364C70.66 24.5417 70.8892 24.4015 71.0824 24.2159C71.2756 24.0303 71.4233 23.8011 71.5256 23.5284L73.1335 23.8182C73.0047 24.2917 72.7737 24.7064 72.4403 25.0625C72.1108 25.4148 71.696 25.6894 71.196 25.8864C70.6998 26.0795 70.1335 26.1761 69.4972 26.1761Z"
              fill="black"
            />
            <path
              d="M86.1666 20H97.8333"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M92 14.1667L97.8333 20L92 25.8333"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect
              x="1"
              y="1"
              width="110"
              height="38"
              rx="7"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </Form>
      ) : (
        <div className="sign-up-box">
          <h1 className="sign-up-title">What do you Jream about?</h1>
          <div>
            <img
              src={chess_img}
              title="Chess"
              className={`${
                chess ? "option" : "grey-picture-button"
              } picture-button sign-up-option`}
              onClick={() => setChess(!chess)}
            />
            <img
              src={basketball_img}
              title="Basketball"
              className={`${
                basketball ? "option" : "grey-picture-button"
              } picture-button sign-up-option`}
              onClick={() => setBasketball(!basketball)}
            />
          
            <img
              src={dance_img}
              title="Dance"
              className={`${
                dance ? "option" : "grey-picture-button"
              } picture-button sign-up-option`}
              onClick={() => setDance(!dance)}
            />
            <img
              src={football_img}
              title="Football"
              className={`${
                football ? "option" : "grey-picture-button"
              } picture-button sign-up-option`}
              onClick={() => setFootball(!football)}
            />
            </div>
          <div>
            <img
              src={instruments_img}
              title="Music"
              className={`${
                instruments ? "option" : "grey-picture-button"
              } picture-button sign-up-option`}
              onClick={() => setInstruments(!instruments)}
            />
            <img
              src={karate_img}
              title="Karate"
              className={`${
                karate ? "option" : "grey-picture-button"
              } picture-button sign-up-option`}
              onClick={() => setKarate(!karate)}
            />
            <img
              src={math_img}
              title="Math"
              className={`${
                math ? "option" : "grey-picture-button"
              } picture-button sign-up-option`}
              onClick={() => setMath(!math)}
            />
            <img
              src={science_img}
              title="Science"
              className={`${
                science ? "option" : "grey-picture-button"
              } picture-button sign-up-option`}
              onClick={() => setScience(!science)}
            />
          </div>
          <a href="./profile" >
          <Button
            variant="primary"
            type="submit"
            className="sign-up-button"
            onClick={() =>
              pushStudentInfo(email, name, pass, basketball, football, instruments, karate, math, science)
            } 
          >
            Sign Up
          </Button>
          </a>
        </div>
      )}
    </>
  );
}

export default SignUp;
