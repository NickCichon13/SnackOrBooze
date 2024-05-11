import React, {useState, useEffect} from "react";
import { 
  Card, 
  CardBody, 
  CardTitle,

 } from "reactstrap";

function Home() {
  const [countSnacks, setCountSnacks] = useState(0)
  const [countDrinks, setCountDrinks] = useState(0);

  useEffect = (() => {
    setCountSnacks(snacks.length);
    setCountDrinks(drinks.length);
  },[]);

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <h2>
              {countDrinks}
              {countSnacks}
            </h2>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
