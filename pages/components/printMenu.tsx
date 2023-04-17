interface PrintMenuProps {
  strArray?: string[];
}

function PrintMenu(props: PrintMenuProps) {
  console.log(props.strArray);
  return (
    <>
      {props.strArray &&
        props.strArray.map((string) => (
          <div
            id="dropdownNavbar"
            className="z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-400"
              aria-labelledby="dropdownLargeButton"
            >
              <li
                className="block px-4 py-2 hover:bg-division-dark hover:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  console.log("클릭");
                }}
              >
                {string}
              </li>
            </ul>
          </div>
        ))}
    </>
  );
}

export default PrintMenu;
