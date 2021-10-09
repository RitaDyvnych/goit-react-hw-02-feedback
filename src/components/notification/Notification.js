import React from "react";
import PropTypes from "prop-types";

export default function Notification({ msg }) {
  return <div>{msg}</div>;
}

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
};
