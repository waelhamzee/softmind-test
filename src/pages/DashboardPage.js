import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Card, CardBody } from "reactstrap";
import Axios from "axios";
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";

const buttons = ["reds", "whites", "sparkling", "rose"];

const DashboardPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [moreLoading, setMoreLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  const fetchItems = async (e, type) => {
    e?.preventDefault();
    setLoading(true);
    try {
      const response = await Axios.get(
        `https://api.sampleapis.com/wines/${type}`
      );
      localStorage.setItem("type", type);
      if (response.status === 200) {
        response.data.length = 15;
        setProducts(response.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };

  const fetchMore = async () => {
    setMoreLoading(true);
    const type = localStorage.getItem("type");
    try {
      const response = await Axios.get(
        `https://api.sampleapis.com/wines/${type}`
      );
      if (response.status === 200) {
        response.data.splice(0, counter);
        response.data.splice(15, response.data.length - 1);
        setProducts((prevProducts) => {
          return [...prevProducts, ...response.data];
        });
      }
      setMoreLoading(false);
    } catch (error) {
      setMoreLoading(false);
      alert(error);
    }
  };

  useEffect(() => {
    if (!counter) return;
    fetchMore();
    // eslint-disable-next-line
  }, [counter]);

  const onScroll = (e) => {
    const element = e.target;
    if (element.scrollTop + element.offsetHeight >= element.scrollHeight) {
      setCounter((prevCounter) => {
        return prevCounter + 15;
      });
    }
  };

  return (
    <div style={{ overflowY: "scroll", height: "100vh" }} onScroll={onScroll}>
      <Card style={{ border: "none" }}>
        <CardBody>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {buttons.map((buttonText, index) => {
              return (
                <Button
                  style={{ marginLeft: "1rem" }}
                  onClick={(e) => fetchItems(e, buttonText)}
                  key={index}
                >
                  {buttonText.charAt(0).toUpperCase() + buttonText.slice(1)}
                </Button>
              );
            })}
          </div>
          <ProductList products={products} loading={loading} />
          {moreLoading && <Loading marginBottom="2rem" />}
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardPage;
