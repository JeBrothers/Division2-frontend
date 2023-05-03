import "./styles.css";
import WeaponJson from "../../public/weapons.json"

function App() {
  const columns = ["Name", "Email", "Phone"];

  const data = Array(53)
    .fill()
    .map(() => ({
      name: assult rifles.name.lastName() + faker.name.firstName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
    }));

  return <Table columns={columns} data={data} />;
}

export default App;