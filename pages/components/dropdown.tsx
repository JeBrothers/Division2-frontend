import { useRouter } from "next/router";

function Dropdown() {
  const router = useRouter();
  return (
    <>
      {/* onclick에 들어있는 화살표함수 console.log를 router.push로 변경하고 경로지정해주면 될듯 */}
      <div className="cursor-pointer hover:bg-slate-800" onClick={() => { console.log("클릭") }}>마이페이지</div>
      <div className="cursor-pointer hover:bg-slate-800" onClick={() => { console.log("클릭") }}>로그아웃</div>
    </>
  );
}

export default Dropdown;
