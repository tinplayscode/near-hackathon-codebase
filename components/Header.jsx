import React, { useContext } from "react";
import { MdAccountCircle, MdLogin, MdLogout } from "react-icons/md";
import { Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { logout } from "../config/nearUtils";
import { Context as AppContext } from "../context/AppContext";

function Header() {
  // Cach 1
  const [state, _dispatch] = useContext(AppContext);

  // // Cach 2
  // const arr = useContext(AppContext);
  // const state = arr[0]
  // const dispatch = arr[1]

  return (
    <>
      <header className="header">
        <Container>
          <Row>
            <Col className="text-light py-1">
              {state.isLoggedIn ? (
                <>
                  <div className="d-inline-flex gap-3 align-items-center">
                    <span className="d-inline-flex gap-1 align-items-center">
                      <Link href={`/profile/${state.user.accountId}`} passHref>
                        <a className="text-light">
                          <MdAccountCircle />
                          <span>
                            {state.user.name} | {state.user.accountId}
                          </span>
                        </a>
                      </Link>
                    </span>

                    {/* <Link href="/logout" passHref> */}
                    <a
                      onClick={() => logout()}
                      className="text-light d-inline-flex gap-1 align-items-center"
                    >
                      <MdLogout />
                      Đăng xuất
                    </a>
                    {/* </Link> */}
                  </div>
                </>
              ) : (
                <>
                  <div className="login-style">
                    <MdLogin />
                    <Link title="Login" rel="nofollow" href="/login" passHref>
                      <a className="text-white d-inline-block ms-1">Login</a>
                    </Link>
                    &nbsp;&nbsp;
                    <div className="language-object" />
                  </div>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </header>
      <Row>
        <HeaderNavigation />
      </Row>
    </>
  );
}

function HeaderNavigation() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <>
      <div className="p-4 d-flex justify-content-center">
        <Nav
          variant="pills"
          activeKey="1"
          onSelect={handleSelect}
          className="gap-2"
        >
          <Nav.Item>
            <Nav.Link eventKey="1" href="#/home">
              <span className="uppercase">Trang chủ</span>
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="SINH VIÊN" id="nav-dropdown">
            <NavDropdown.Item eventKey="2.1">
              Thông Tin Cá Nhân
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="2.2">Đăng Ký Học Phần</NavDropdown.Item>
            <NavDropdown.Item eventKey="2.3">Đánh Giá Môn Học</NavDropdown.Item>
            <NavDropdown.Item eventKey="2.3">Kết Quả Học Phần</NavDropdown.Item>
            <NavDropdown.Item eventKey="2.4">Kết Quả Học Tập</NavDropdown.Item>
            <NavDropdown.Item eventKey="2.5">Tra Cứu Lịch Thi</NavDropdown.Item>
            <NavDropdown.Item eventKey="2.6">Tra Cứu Học Phí</NavDropdown.Item>
            <NavDropdown.Item eventKey="2.7">
              Đăng Ký Chuyên Ngành
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="THƯ VIỆN" id="nav-dropdown">
            <NavDropdown.Item eventKey="2.1">Danh mục sách</NavDropdown.Item>
            <NavDropdown.Item eventKey="2.1">Mượn sách</NavDropdown.Item>
            <NavDropdown.Item eventKey="2.1">
              Quy định - Quy trình
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>

      <style jsx>
        {`
          .uppercase {
            text-transform: uppercase;
          }
        `}
      </style>
    </>
  );
}

export default Header;
