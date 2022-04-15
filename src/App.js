import {CarForm, Cars} from "./components";
import {useState} from "react";

export const App = () => {
    const [newCar, setNewCar] = useState(null);
    const [carForUpadate,setCarForUpdate] = useState(null);

  return (
      <div>
          <CarForm setNewCar={setNewCar} carForUpadate={carForUpadate}/>
          <hr/>
          <Cars newCar={newCar} setCarForUpdate={setCarForUpdate}/>
      </div>
  )
}