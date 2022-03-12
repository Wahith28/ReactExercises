import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Information from "./Information";
import { getData } from "./Service/Api";
import { useForm } from "react-hook-form";

const useStyles = makeStyles({
  input: {
    color: "#33333",
    marginRight: "15px",
    // "& .MuiInputBase-root": {
    //   backgroundColor: "white",
    //   color: "black",
    // },
  },
  component: {
    padding: "10px",
    background: "#44546f",
  },
  button: {
    width: 210,
    height: 40,
    background: "#e67e22",
    color: "#fff",
    marginTop: 15,
  },
});

const Form = () => {
  const classes = useStyles();
  const [data, getWeatherData] = useState();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [click, handleClick] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    const getWeather = async () => {
      city &&
        (await getData(city, country).then((response) => {
          getWeatherData(response.data);
          console.log(response.data);
        }));
    };

    getWeather();
    // handleClick(false);

    // axios
    //   .get(
    //     `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=8d2a110b6ad468ae1a0e459757cf659d&units=metric`
    //   )
    //   .then((response) => {
    //     getWeatherData(response.data);
    //     console.log(response);
    //   });
    // handleClick(false);
  }, [click]);

  const handleCityChange = (city) => {
    setCity(city);
  };

  const handleCountryChange = (country) => {
    setCountry(country);
  };
  console.log("Hello: ", data);
  console.log(errors.city);
  return (
    <>
      <Box className={classes.component} lg={12} sm={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("city", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
              maxLength: 20,
            })}
            inputProps={{ className: classes.input }}
            className={classes.input}
            onChange={(e) => handleCityChange(e.target.value)}
            label="City"
            blurOnSelect="false"
            style={{ backgroundColor: "#ffff", borderRadius: "5px" }}
            helperText={
              (errors.city?.type === "required" && "City is required") ||
              (errors.city?.type === "pattern" && "Enter Alphabetical only") ||
              (errors.city?.type === "maxLength" && "Max length is 20")
            }
            error={
              errors.city?.type === "maxLength" ||
              errors.city?.type === "required" ||
              errors.city?.type === "pattern"
            }
          />
          {}
          <TextField
            {...register("Country", { required: true })}
            inputProps={{ className: classes.input }}
            onChange={(e) => handleCountryChange(e.target.value)}
            className={classes.input}
            label="Country"
            style={{ backgroundColor: "#ffff", borderRadius: "5px" }}
            helperText={
              errors.Country?.type === "required" && "Country is required"
            }
            error={errors.Country?.type === "required"}
          />
          <Button
            variant="contained"
            className={classes.button}
            type="submit"
            onClick={() => handleClick(!click)}
          >
            Get Weather
          </Button>
        </form>
      </Box>
      <Information data={data} city={city} country={country} />
    </>
  );
};

export default Form;
