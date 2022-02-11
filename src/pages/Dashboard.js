import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/cards/Card";
import Page from "../components/layouts/Page";
import { updateUser } from "../redux/reducers/user";

export default function Dashboard() {
  return <Page title="Dashboard"></Page>;
}
