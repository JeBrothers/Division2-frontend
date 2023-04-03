import type { NextPage } from "next";
import Layout from "../components/Layout";

const WeaponInfo: NextPage = () => {
  return (
    <>
      <Layout children />

      <div className=" dark:border-gray-700 ">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400  justify-center">
          <li className="mr-2">
            <a
              href="#"
              className="inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
              aria-current="page"
            >
              돌격소총
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-flex  p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              소총
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              지정사수소총
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              기관단총
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              샷건
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              권총
            </a>
          </li>
        </ul>
      </div>

      <div className="flex relative overflow-x-auto justify-center">
        <table className="w-max-md w-2/3 text-sm  text-gray-500 dark:text-gray-400 border-t border-gray-200 text-center ">
          <thead className="text-xs text-white uppercase bg-division-dark dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-6">
                총기 종류
              </th>
              <th scope="col" className="px-6 py-6">
                총기명
              </th>
              <th scope="col" className="px-6 py-6">
                RPM
              </th>
              <th scope="col" className="px-6 py-6">
                기본 탄창
              </th>
              <th scope="col" className="px-6 py-6">
                최대 탄창
              </th>
              <th scope="col" className="px-6 py-6">
                재장전 시간(빈 탄창)
              </th>
              <th scope="col" className="px-6 py-6">
                DPS
              </th>
              <th colSpan={4} scope="col" className=" justify-center ">
                부착물 슬롯
                <th className="w-1/4 px-12 py-4 bg-division-color text-division-dark whitespace-nowrap">
                  조준기
                </th>
                <th
                  scope="col"
                  className="  w-1/4 px-12 bg-division-color text-division-dark whitespace-nowrap"
                >
                  총구
                </th>
                <th
                  scope="col"
                  className=" w-1/4 px-12  bg-division-color text-division-dark whitespace-nowrap"
                >
                  총열
                </th>
                <th
                  scope="col"
                  className=" w-1/4 px-12 bg-division-color text-division-dark whitespace-nowrap"
                >
                  탄창
                </th>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                rowSpan={2}
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ACR
              </th>
              <td className="px-6 py-4">ACR</td>
              <td className="px-6 py-4">650</td>
              <td className="px-6 py-4">30</td>
              <td className="px-6 py-4">50</td>
              <td className="px-6 py-4">2.3</td>
              <td className="px-6 py-4">575510</td>
              <td className="px-6 py-4 text-center">O</td>
              <td className="px-6 py-4 text-center">O</td>
              <td className="px-6 py-4 text-center">O</td>
              <td className="px-6 py-4 text-center">O</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">ACR-E</td>
              <td className="px-6 py-4">650</td>
              <td className="px-6 py-4">30</td>
              <td className="px-6 py-4">50</td>
              <td className="px-6 py-4">2.3</td>
              <td className="px-6 py-4">575510</td>
              <td className="px-6 py-4 text-center">O</td>
              <td className="px-6 py-4 text-center">O</td>
              <td className="px-6 py-4 text-center">O</td>
              <td className="px-6 py-4 text-center">O</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                rowSpan={2}
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AK-47
              </th>
              <td className="px-6 py-4">AK-M</td>
              <td className="px-6 py-4">600</td>
              <td className="px-6 py-4">30</td>
              <td className="px-6 py-4">50</td>
              <td className="px-6 py-4">2.5</td>
              <td className="px-6 py-4">620560</td>
              <td className="px-6 py-4 text-center">O</td>
              <td className="px-6 py-4 text-center">X</td>
              <td className="px-6 py-4 text-center">O</td>
              <td className="px-6 py-4 text-center">O</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WeaponInfo;
