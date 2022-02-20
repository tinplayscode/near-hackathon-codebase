import React, { useContext } from "react";
import { Container, Stack, Button } from "react-bootstrap";
import { MdHome } from "react-icons/md";
import Link from "next/link";
import { login } from "../config/nearUtils";
import { Context } from "../context/AppContext";
import { useRouter } from "next/router";

function Login() {
  const [state, _] = useContext(Context);
  const router = useRouter();

  if (state.isLoggedIn) {
    router.push("/");
  }

  return (
    <>
      <Container fluid="sm">
        <Stack direction="horizontal" gap={3}>
          <h1 className="display-6">Login</h1>
          <Link href="/" passHref>
            <a className="ms-auto d-inline-flex align-items-center">
              <MdHome />
              <span>Trang chủ</span>
            </a>
          </Link>
        </Stack>

        <Container className="col-xl-10 col-xxl-9 px-4 py-2">
          <div className="row align-items-center py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 mb-3">
                The HCMUS Blockchain Portal
              </h1>
              <p className="col-lg-12 fs-4">
                The HCMUS Blockchain Portal là một ứng dụng web cho phép sinh
                viên dễ dàng quản lý học phần của mình.
                <br />
                Giáo viên dễ dàng chấm điểm, Giáo vụ dễ dàng quản lý học phần.
                <br /> Bằng việc sử dụng mạng Blockchain NEAR Protocol, với tất
                cả record đăng ký học phần, thanh toán học phí đều được minh
                bạch, chi phí giao dịch bằng 0, nhà trường không phải chi trả
                bất cứ chi phí nào cho việc mở rộng portal.
              </p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <Stack gap={2} className="justify-content-center">
                {/* Login with wallet button */}
                <Button onClick={() => login()}>
                  Đăng nhập với NEAR wallet
                </Button>

                {/* Forgot */}
                <Link href="/forgot" passHref>
                  <Button
                    variant="outline-secondary"
                    className="d-block text-center"
                  >
                    Quên mật khẩu ví?
                  </Button>
                </Link>
                <small className="text-muted">
                  Bạn có thể gửi yêu cầu khôi phục ví cho ban giáo vụ nhà trường
                  khi quên mật khẩu truy cập ví
                </small>
              </Stack>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Login;
