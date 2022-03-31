import './header.scss';

function Header() {
  return (
    <div className='d-header'>
      <div className=' d-container d-header__container'>
        <img
          src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTYiIGhlaWdodD0iNDQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNTYgNDQiPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTcwLjg4OSAxMC44MTd2MjAuMDE0Yy4wNTQuMzY2LS4yMTYuNjgtLjU5NS43MzJoLTIuNzU4Yy0uMzc4LjA1Mi0uNzAzLS4yMS0uNzU3LS41NzV2LTEuMjAyYy0xLjEzNSAxLjQxMS0yLjgxMSAyLjI0Ny01LjEzNiAyLjI0Ny00LjIxOCAwLTcuNzMzLTMuNTAxLTcuNzMzLTguMSAwLTQuNTk4IDMuNTE1LTguMSA3LjczMy04LjEgMi4zMjUgMCA0IC44MzcgNS4xMzYgMi4yNDh2LTcuMjY0Yy0uMDU0LS4zNjYuMjE3LS42OC41OTUtLjczMmgyLjc1OGMuMzc4LS4wNTIuNzAzLjIxLjc1Ny41NzV2LjE1N3ptLTQuMTEgMTMuMDY0Yy4xMDktMi4zNTEtMS44MzgtNC4zMzctNC4yNzEtNC4zOS0yLjQzNC0uMTA0LTQuNDg4IDEuNzc3LTQuNTQyIDQuMTI5di4zMTNjLS4xMDkgMi4zNTIgMS44MzggNC4zMzggNC4yNzEgNC4zOSAyLjQzNC4xMDQgNC40ODgtMS43NzcgNC41NDItNC4xMjh2LS4zMTR6TTg1Ljc1OSAxNi4yYy4zNzgtLjA1My43MDMuMjA5Ljc1Ny41NzR2MTQuMDU3Yy4wNTQuMzY2LS4yMTcuNjgtLjU5NS43MzJoLTIuNzU4Yy0uMzc4LjA1Mi0uNzAzLS4yMS0uNzU3LS41NzV2LS45OTNjLS44NjUgMS4zMDctMi4zNzkgMS45ODYtNC4zMjYgMS45ODYtMi45NzQgMC01LjE5LTIuMTk1LTUuMTktNS45NTdWMTYuOTNjLS4wNTUtLjM2Ni4yMTYtLjY4LjU5NC0uNzMyaDIuNzU4Yy4zNzktLjA1Mi43MDMuMjEuNzU3LjU3NXY4LjkzN2MwIDEuNzc2IDEuMDgxIDIuNjEyIDIuNTQxIDIuNjEyIDEuNjIyIDAgMi44NjYtLjg4OCAyLjg2Ni0zLjI0di04LjE1MmMtLjA1NC0uMzY2LjIxNi0uNjguNTk1LS43MzJoMi43NTh6TTEwMi4xOTcgMzEuNTYzaC0zLjAyOGMtLjM3OSAwLS43MDMtLjE1Ny0uOTItLjQxOGwtNS4xOS02LjQ4djYuMTY2Yy4wNTQuMzY2LS4yMTcuNjgtLjU5NS43MzJoLTIuNzU4Yy0uMzc5LjA1Mi0uNzAzLS4yMS0uNzU3LS41NzVWMTAuODE3Yy0uMDU0LS4zNjYuMjE2LS42OC41OTUtLjczMmgyLjc1OGMuMzc4LS4wNTIuNzAyLjIxLjc1Ni41NzV2MTIuMzMzbDQuOTIxLTYuMzIzYy4yMTYtLjMxNC41NC0uNDcuOTItLjQ3aDMuMDI3Yy41OTUgMCAuODExLjQxOC40MzMuODg4bC01LjM1MyA2Ljc0MSA1LjYyMyA2Ljg5OGMuNDMzLjQ3LjIxNy44MzYtLjQzMi44MzZ6TTExMC42MzIgMTUuNzgxYzMuNTE1IDAgNi40ODkgMi4wMzkgNi40ODkgNi4wMXY5LjA0Yy4wNTQuMzY2LS4yMTcuNjgtLjU5NS43MzJoLTIuNjVjLS4zNzguMDUyLS43MDMtLjIxLS43NTctLjU3NXYtLjczMmMtLjkxOSAxLjA5OC0yLjI3MSAxLjcyNS00LjMyNSAxLjcyNS0yLjgxMiAwLTUuMzU0LTEuNjItNS4zNTQtNC44MDggMC0zLjE4NyAyLjU0Mi00LjgwNyA1LjM1NC00LjgwNyAxLjU2OC0uMTA1IDMuMTM2LjQxOCA0LjMyNSAxLjM1OHYtMS42MmMwLTEuODI4LS45NzMtMi41Ni0yLjQ4Ny0yLjU2LTEuMTkgMC0yLjEwOS40Ny0yLjM3OSAxLjMwNi0uMTYyLjQxOC0uMzI1LjYyNy0uNzU3LjYyN2gtMi41NDJjLS4zNzguMDUzLS43MDItLjIwOS0uNzU3LS41NzR2LS4yMWMuNDMzLTMuMTM1IDMuMjQ1LTQuODYgNi40MzUtNC45MTJ6bTIuNDg3IDExLjM5MmMwLTEuMjAxLTEuMTM1LTEuOTMzLTIuOTItMS45MzMtMS43ODQgMC0yLjY0OS43ODQtMi42NDkgMS45MzMgMCAxLjE1Ljg2NSAxLjkzNCAyLjY0OSAxLjkzNCAxLjc4NSAwIDIuOTItLjgzNiAyLjkyLTEuOTM0ek0xMjYuMjA1IDE1Ljc4MWMzLjUxNSAwIDYuNDg5IDIuMDM5IDYuNDg5IDYuMDF2OS4wNGMuMDU0LjM2Ni0uMjE3LjY4LS41OTUuNzMyaC0yLjY1Yy0uMzc4LjA1Mi0uNzAzLS4yMS0uNzU3LS41NzV2LS43MzJjLS45MTkgMS4wOTgtMi4yNzEgMS43MjUtNC4zMjUgMS43MjUtMi44MTIgMC01LjM1NC0xLjYyLTUuMzU0LTQuODA4IDAtMy4xODcgMi41NDItNC44MDcgNS4zNTQtNC44MDcgMS41NjgtLjEwNSAzLjEzNi40MTggNC4zMjUgMS4zNTh2LTEuNjJjMC0xLjgyOC0uOTczLTIuNTYtMi40ODctMi41Ni0xLjE5IDAtMi4xMDkuNDctMi4zNzkgMS4zMDYtLjE2Mi40MTgtLjMyNS42MjctLjc1Ny42MjdoLTIuNTQyYy0uMzc4LjA1My0uNzAyLS4yMDktLjc1Ny0uNTc0di0uMjFjLjQzMy0zLjEzNSAzLjE5MS00Ljg2IDYuNDM1LTQuOTEyem0yLjQzMyAxMS4zOTJjMC0xLjIwMS0xLjEzNS0xLjkzMy0yLjkyLTEuOTMzLTEuNzg0IDAtMi42NDkuNzg0LTIuNjQ5IDEuOTMzIDAgMS4xNS44NjUgMS45MzQgMi42NDkgMS45MzQgMS43ODUgMCAyLjkyLS44MzYgMi45Mi0xLjkzNHpNMTQzLjE4NCAxNS43ODFjMi45NzQgMCA1LjEzNyAyLjE5NSA1LjEzNyA1Ljk1OHY5LjA5MmMuMDU0LjM2Ni0uMjE3LjY4LS41OTUuNzMyaC0yLjc1OGMtLjM3OC4wNTItLjcwMy0uMjEtLjc1Ny0uNTc1di04LjkzNmMwLTEuNzc2LTEuMDgxLTIuNjEzLTIuNTQxLTIuNjEzLTEuNjIyIDAtMi44NjYuODg5LTIuODY2IDMuMjR2OC4xNTJjLjA1NC4zNjYtLjIxNi42OC0uNTk1LjczMmgtMi43NThjLS4zNzguMDUyLS43MDMtLjIxLS43NTctLjU3NVYxNi45MzFjLS4wNTQtLjM2Ni4yMTctLjY4LjU5NS0uNzMyaDIuNzU4Yy4zNzgtLjA1Mi43MDMuMjEuNzU3LjU3NXYuOTkzYy45MTktMS4yNTQgMi4zNzktMS45MzMgNC4zOC0xLjk4NnoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMi43NjUgNDRjMTIuNTcyIDAgMjIuNzY0LTkuODUgMjIuNzY0LTIyUzM1LjMzNyAwIDIyLjc2NCAwQzEwLjE5MyAwIDAgOS44NSAwIDIyczEwLjE5MiAyMiAyMi43NjUgMjJ6IiBvcGFjaXR5PSIuMyIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMxLjc0IDEwLjQ1MUgxMy43ODhjLTEuNzMgMC0zLjE5IDEuMzU5LTMuMTkgMy4wODN2MTYuOTg0YzAgMS42NzIgMS40MDYgMy4wMyAzLjE5IDMuMDNIMzEuNzRjMS43MyAwIDMuMTM3LTEuMzU4IDMuMTM3LTMuMDNWMTMuNDgyYzAtMS42NzItMS40MDYtMy4wMy0zLjEzNy0zLjAzem0tOC45NzYgMTMuNTM1Yy00LjQzMyAwLTguMTEtMy4yOTItOC40ODktNy41NzctLjA1NC0uOTQxLjY0OS0xLjcyNSAxLjU2OC0xLjc3Ny45Mi0uMDUyIDEuNzg1LjYyNyAxLjgzOSAxLjUxNS4yMTYgMi42NjUgMi41OTUgNC43MDMgNS40MDcgNC40OTQgMi40ODctLjE1NiA0LjQ4OC0yLjA5IDQuNjUtNC40OTQuMDU0LS45NC44NjUtMS42MiAxLjgzOC0xLjU2Ny40ODcuMDUyLjkyLjI2IDEuMjQ0LjU3NC4zMjUuMzE0LjQzMy43ODQuNDMzIDEuMjAyLS4zNzkgNC4zMzgtNC4wNTYgNy42My04LjQ5IDcuNjN6TTE1Mi4wNTIgOC41N2MtMi4yMTcgMC0zLjk0OCAxLjcyNC0zLjk0OCAzLjgxNSAwIDIuMDkgMS43ODUgMy44MTUgMy45NDggMy44MTUgMi4xNjIgMCAzLjk0Ny0xLjcyNSAzLjk0Ny0zLjgxNS4wNTQtMi4xNDMtMS43MzEtMy44MTUtMy45NDctMy44MTV6bTAgLjU3NWMxLjgzOCAwIDMuMzUyIDEuNDYzIDMuMzUyIDMuMjQgMCAxLjc3Ny0xLjUxNCAzLjI0LTMuMzUyIDMuMjQtMS44MzkgMC0zLjM1My0xLjQ2My0zLjM1My0zLjI0IDAtMS43NzcgMS41MTQtMy4yNCAzLjM1My0zLjI0em0tMS4xOSAxLjQ2M3YzLjU1M2guNTk1di0xLjMwNmguODExbC44NjUgMS4zMDZoLjU5NWwtLjg2NS0xLjM1OGMuMTA4IDAgLjE2Mi0uMDUyLjI3LS4wNTIuMTYyLS4wNTMuMzI0LS4xNTcuNDMzLS4yNjIuMTA4LS4xMDQuMTYyLS4yMDkuMjE2LS4zNjYuMDU0LS4xMDQuMDU0LS4yNi4wNTQtLjM2NSAwLS4xMDUgMC0uMjYyLS4wNTQtLjM2Ni0uMDU0LS4xNTctLjEwOC0uMjYxLS4yMTYtLjM2Ni0uMTA5LS4xMDQtLjI3MS0uMjA5LS40MzMtLjI2MS0uMjE2LS4xMDUtLjQ4Ny0uMTU3LS43MDMtLjEwNWwtMS41NjgtLjA1MnptLjU5NS40N2gxLjEzNWMuMTA4IDAgLjIxNy4wNTMuMzI1LjEwNS4xMDguMDUyLjE2Mi4xMDQuMjE2LjE1Ny4wNTQuMTA0LjEwOC4yMDkuMTA4LjMxMyAwIC4xMDUgMCAuMjEtLjEwOC4zMTQtLjA1NC4xMDQtLjEwOC4xNTYtLjIxNi4yMDlsLS4zMjUuMTA0Yy0uMTA4IDAtLjIxNi4wNTMtLjMyNCAwaC0uODExdi0xLjIwMnoiLz4KPC9zdmc+Cg=='
          alt='dukaan'
          className='d-logo'
        ></img>

        <div className='d-header__rightbox'>
          <h5 className='d-header__rightbox--signin mb-0 d-inline-block mr-2'>Sign In</h5>
          <button className='d-btn d-btn-secondary'>Dukaan for PC</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
