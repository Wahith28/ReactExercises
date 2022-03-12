import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TextField, Card, Box, Link } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import t from "../src/Practice";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  card: {
    display: "flex",
    height: "60px",
    width: "95%",
    margin: "10px 10px",
    backgroundColor: "skyblue",
  },
  main: {
    display: "flex",
    width: "100%",
    height: "100vh",
  },
  left: {
    width: "30%",
    height: "100%",
    overflow: "scroll",
  },
  right: {
    width: "70%",
    height: "100%",
  },
});

const TableDemo = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [drop, setdrop] = useState("");
  const [click, handleClick] = useState(false);
  const classes = useStyles();
  const [subData, setsubData] = useState("");

  // function LoginButton(props) {
  //   return <Card onClick={props.onClick}>Login</Card>;
  // }

  const getData = async () => {
    try {
      const data = await axios.get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      console.log(data.data);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(product);
  const handleData = (data) => {
    setsubData(data);
  };
  console.log(window.localStorage.getItem("name"));
  return (
    // <div>
    //   <h1 style={{ display: "flex", justifyContent: "center" }}>
    //     Product Lists
    //   </h1>
    //   <TextField
    //     variant="filled"
    //     placeholder="Search Here..."
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       margin: "10px auto",
    //       width: "500px",
    //     }}
    //     onChange={(e) => {
    //       setSearch(e.target.value);
    //     }}
    //   />
    //   <Autocomplete
    //     freeSolo
    //     onSelect={(e) => {
    //       setdrop(e.target.value);
    //     }}
    //     id="free-solo-2-demo"
    //     disableClearable
    //     options={product.map((option) => option.name)}
    //     renderInput={(params) => (
    //       <TextField
    //         {...params}
    //         label="Search input"
    //         margin="normal"
    //         variant="outlined"
    //         InputProps={{ ...params.InputProps, type: "search" }}
    //       />
    //     )}
    //   />
    //   <TableContainer component={Paper}>
    //     <Table className={classes.table} aria-label="customized table">
    //       <TableHead>
    //         <TableRow>
    //           <StyledTableCell>Product Name</StyledTableCell>
    //           <StyledTableCell align="right">Product Price</StyledTableCell>
    //           <StyledTableCell align="right">Category</StyledTableCell>
    //           <StyledTableCell align="center">Created_at</StyledTableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {/* {product
    //           .filter((item) => {
    //             if (drop == "") {
    //               return;
    //             } else if (
    //               item.name.toLowerCase().includes(drop.toLowerCase())
    //             ) {
    //               return item;
    //             }
    //           })
    //           ?.map((item) => (
    //             <StyledTableRow>
    //               <StyledTableCell component="th" scope="row">
    //                 {item.name}
    //               </StyledTableCell>
    //               <StyledTableCell align="right">${item.price}</StyledTableCell>
    //             </StyledTableRow>
    //           ))} */}
    //         {product
    //           .filter((item) => {
    //             if (search == "") {
    //               return item;
    //             } else if (
    //               item.name.toLowerCase().includes(search.toLowerCase())
    //             ) {
    //               return item;
    //             }
    //           })
    //           ?.map((item) => (
    //             <StyledTableRow>
    //               <StyledTableCell component="th" scope="row">
    //                 {item.name}
    //               </StyledTableCell>
    //               <StyledTableCell align="right">${item.price}</StyledTableCell>
    //               <StyledTableCell align="right">
    //                 {item.category}
    //               </StyledTableCell>
    //               <StyledTableCell align="center">
    //                 {item.created_at}
    //               </StyledTableCell>
    //             </StyledTableRow>
    //           ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    //   {/* {product
    //     .filter((item) => {
    //       if (search == "") {
    //         return item;
    //       } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
    //         return item;
    //       }
    //     })
    //     ?.map((item) => (
    //       <p>
    //         {item.name} - {item.price}
    //       </p>
    //     ))} */}
    // </div>

    <div className={classes.main}>
      <Box className={classes.left}>
        {/* <h1>{window.localStorage.getItem("name")}</h1> */}
        <Autocomplete
          freeSolo
          onSelect={(e) => {
            setdrop(e.target.value);
            setsubData(e.target.value);
          }}
          id="free-solo-2-demo"
          disableClearable
          options={product.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
              style={{ width: "95%", margin: "10px 10px" }}
            />
          )}
        />
        {product
          .filter((item) => {
            if (drop == "") {
              return item;
            } else if (item.name.toLowerCase().includes(drop.toLowerCase())) {
              return item;
            }
          })
          ?.map((item) => (
            <Card className={classes.card} onClick={() => handleData(item)}>
              {item.name}
            </Card>
          ))}
      </Box>
      <Box className={classes.right}>
        {subData && (
          <div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow style={{ height: "80px" }}>
                    <StyledTableCell style={{ width: "150px" }}>
                      Product Name
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Product Price
                    </StyledTableCell>
                    <StyledTableCell align="right">Category</StyledTableCell>

                    <StyledTableCell align="center">Created_at</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {product
    //           .filter((item) => {
    //             if (drop == "") {
    //               return;
    //             } else if (
    //               item.name.toLowerCase().includes(drop.toLowerCase())
    //             ) {
    //               return item;
    //             }
    //           })
    //           ?.map((item) => (
    //             <StyledTableRow>
    //               <StyledTableCell component="th" scope="row">
    //                 {item.name}
    //               </StyledTableCell>
    //               <StyledTableCell align="right">${item.price}</StyledTableCell>
    //             </StyledTableRow>
    //           ))} */}

                  <StyledTableRow>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      style={{ height: "10px" }}
                    >
                      {subData.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      ${subData.price}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {subData.category}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {subData.created_at}
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Card
              style={{
                backgroundImage: `url(${subData.image_link})`,
                backgroundRepeat: "no - repeat",
                backgroundSize: "cover",
                height: "70vh",
                // backgroundPosition: "center center",
              }}
            ></Card>
            <p>
              Find Your Product Here{" "}
              <a target="-blank" href={subData.product_link}>
                LINK
              </a>{" "}
            </p>
          </div>
        )}
      </Box>
    </div>
  );
  // function Mailbox(props) {
  //   const unreadMessages = props.unreadMessages;
  //   return (
  //     <div>
  //       <h1>Hello!</h1>
  //       {unreadMessages.length > 0 && (
  //         <h2>You have {unreadMessages.length} unread messages.</h2>
  //       )}
  //     </div>
  //   );
  // }
};

const studentList = [
  {
    name: "Abdul",
    age: "23",
  },
  {
    name: "Wahith",
    age: "23",
  },
];

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
];
export default TableDemo;
