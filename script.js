import { check } from "k6";
import http from "k6/http";

export const options = {
  vus: 1000,
  rps: 1000,
  duration: '3m',
};

export default function () {
  let resid = Math.floor(Math.random() * 1000000);
  let res = http.get("http://localhost:3010/api/restaurants/" + resid + "/photos");
  check(res, {
    "is status 200": (r) => r.status === 200
  });
};
