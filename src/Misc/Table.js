import { Button, Table, Input, Modal } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./StTable.css";
// import { Modal } from "react";
import "antd/dist/antd.less";
// import Page from "./Tab.html";
// var htmlDoc = require("./Tab.html");

const Table1 = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [abc, setabc] = useState(
    "https://www.w3schools.com/js/pic_bulboff.gif"
  );
  // const handleLight = () => {
  //   setabc("https://www.w3schools.com/js/pic_bulbon.gif");
  // };
  // const handleLightOff = () => {
  //   setabc("https://www.w3schools.com/js/pic_bulboff.gif");
  // };
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      address: "John Address",
    },
    {
      id: 2,
      name: "David",
      email: "david@gmail.com",
      address: "David Address",
    },
    {
      id: 3,
      name: "James",
      email: "james@gmail.com",
      address: "James Address",
    },
    {
      id: 4,
      name: "Sam",
      email: "sam@gmail.com",
      address: "Sam Address",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: "Name " + randomNumber,
      email: randomNumber + "@gmail.com",
      address: "Address " + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  return (
    <div className="App">
      <header
        className="App-header"
        style={
          {
            // backgroundColor: "green",
            // height: "100vh",
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
            // fontSize: "calc(10px + 2vmin)",
            // color: "white",
          }
        }
      >
        <Button
          onClick={onAddStudent}
          style={{
            fontSize: "medium",
            marginBottom: "5px",
            color: "white",
            backgroundColor: "darkviolet",
          }}
        >
          Add a new Student
        </Button>
        <Table
          columns={columns}
          filtered
          dataSource={dataSource}
          onChange={onChange}
          style={{ width: "1000px" }}
        ></Table>
        <Modal
          title="Edit Student"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.email}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.address}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
      {/* <Button onClick={handleLight}>Light On</Button>
      <img src={abc} />
      <Button onClick={handleLightOff}>Light Off</Button> */}
      {/* <iframe src={htmlDoc}></iframe> */}
      <div id="root"></div>
    </div>
  );
};

export default Table1;
