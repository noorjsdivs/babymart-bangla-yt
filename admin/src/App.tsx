import { Link } from "react-router";
import CommonLayout from "./components/common/CommonLayout";
import { Button } from "./components/ui/button";

function App() {
  return (
    <CommonLayout>
      <div className="p-10">
        <h2 className="text-xl font-semibold">Baby Mart Admin Portal</h2>
        <Link to={"/login"}>Login</Link>
        <Button>click me</Button>
      </div>
    </CommonLayout>
  );
}

export default App;
