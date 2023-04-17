interface PrintMenuProps {
  strArray?: string[];
}

function PrintMenu(props: PrintMenuProps) {
  console.log(props.strArray);
  return (
    <div>
      {props.strArray &&
        props.strArray.map((string) => (
          <div className="py-1 text-sm text-gray-700 dark:text-gray-400 ">
            <div
              className="block px-4 py-2 hover:bg-division-dark hover:text-white dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                console.log("클릭");
              }}
            >
              {string}
            </div>
          </div>
        ))}
    </div>
  );
}

export default PrintMenu;
