import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import AxiosService from "../utils/AxiosServise";
import { useNavigate } from "react-router-dom";
import ApiRoutes from "../utils/ApiRoutes";
import toast from "react-hot-toast";

function Dashboard() {
  let [data, setData] = useState([]);
  let navigate = useNavigate();

  let getData = async () => {
    try {
      let response = await AxiosService.get(ApiRoutes.BLOG_APP.path);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  let handleDelete = async (id) => {
    try {
      let response = await AxiosService.delete(
        `${ApiRoutes.BLOG_APP.path}/${id}`
      );
      if (response.status === 200) {
        // alert("delete successes");
        toast.success("Data Deleted Successfully");

        getData();
      }
    } catch (error) {
      toast(error.response?.message || "Internal Server Error");
    }
  };

  return (
    <>
      <div className="dash-container">
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Phone</th>
              {/* <th>Website</th>? */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.username}</td>
                  <td>{e.email}</td>
                  <td>{e.phone}</td>
                  {/* <td>{e.website}</td>   */}
                  <td>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={() => navigate(`/view-user/${e.id}`)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      type="button"
                      onClick={() => handleDelete(e.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Dashboard;
