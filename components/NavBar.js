import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <div className="bg-black h-6" />
      <div className=" bg-division-color flex  font-semibold text-lg items-center justify-center ">
        <ul className="grid grid-flow-col grid-cols-5 ">
          <img className="w-30 h-10 p-2 mr-5 " src="/division2 logo.png" />
          <div className=" text-center items-center   px-8 pt-1  hover:bg-division-dark hover:text-division-orange active:bg-division-dark active:text-division-orange">
            <Link legacyBehavior href="/">
              <a className={router.pathname === "/" ? "active" : ""}>
                시뮬레이터
              </a>
            </Link>
          </div>

          <div className=" text-center items-center  px-8 pt-1 hover:bg-division-dark  hover:text-division-orange active:bg-division-dark active:text-division-orange">
            <Link legacyBehavior href="/weapon">
              <a className={router.pathname === "weapon" ? "active" : ""}>
                무기 정보
              </a>
            </Link>
          </div>

          <div className=" text-center items-center px-8 pt-1 hover:bg-division-dark hover:text-division-orange active:bg-division-dark active:text-division-orange">
            <Link legacyBehavior href="/amour">
              <a className={router.pathname === "armour" ? "active" : ""}>
                방어구 정보
              </a>
            </Link>
          </div>

          <div className=" text-center items-center px-8 pt-1 hover:bg-division-dark hover:text-division-orange active:bg-division-dark active:text-division-orange">
            <Link legacyBehavior href="/about">
              <a className={router.pathname === "" ? "active" : ""}>기타</a>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}
